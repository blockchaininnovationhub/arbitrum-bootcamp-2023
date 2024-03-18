'use client';

import React, { useEffect, useState } from 'react';
import { ethers, providers, Wallet } from 'ethers';
import { Erc20Bridger, getL2Network } from '@arbitrum/sdk';
import { WalletClient, createWalletClient, custom, parseEther } from 'viem';
import { arbitrumSepolia, sepolia } from 'viem/chains';
import { AdminErc20Bridger } from '@arbitrum/sdk/dist/lib/assetBridger/erc20Bridger';
import { L1CustomGatewayAbi, L1CustomGatewayByteCode } from '../../contracts/l1customGatewayAbi';
import { L2CustomGatewayAbi, L2CustomGatewayByteCode } from '../../contracts/l2CustomGatewayAbi';
import { l1TokenAbi, l1TokenByteCode } from '../../contracts/l1TokenAbi';
import { L2TokenAbi, l2TokenByteCode } from '../../contracts/l2TokenAbi';

// const l1Provider = new ethers.BrowserProvider(window!.ethereum);

// const l2Provider = new providers.JsonRpcProvider(process.env.L2RPC);

// const l1Wallet = new Wallet(l1PrivateKey, l1Provider);
// const l2Wallet = new Wallet(l1PrivateKey, l2Provider);
const l1PrivateKey = process.env.NEXT_PUBLIC_DEVNET_PRIVKEY;
console.log(l1PrivateKey);
const l1Provider = new providers.JsonRpcProvider(process.env.NEXT_PUBLIC_L1RPC);

const l2Provider = new providers.JsonRpcProvider(process.env.NEXT_PUBLIC_L2RPC);

const l1Wallet = new Wallet(`${l1PrivateKey}`, l1Provider);
const l2Wallet = new Wallet(`${l1PrivateKey}`, l2Provider);

const Dapp = () => {
	const [, setL1Wallet] = useState<WalletClient | undefined>();
	const [, setL2Wallet] = useState<WalletClient | undefined>();

	useEffect(() => {
		if (window?.ethereum) {
			const wallet = createWalletClient({
				chain: sepolia,
				transport: custom(window?.ethereum!),
			});

			setL1Wallet(wallet);
			const l2Wallet = createWalletClient({
				chain: arbitrumSepolia,
				transport: custom(window.ethereum!),
			});
			setL2Wallet(l2Wallet);
		}
	}, []);
	console.log(l1Wallet);
	const handleDeployment = async () => {
		console.log('Starting process');

		// addDefaultLocalNetwork();

		// Use L2Network to create an Arbitrum SDK ERC20Bridger instance
		const l2Network = await getL2Network(arbitrumSepolia.id);
		const erc20Bridger = new Erc20Bridger(l2Network);

		const adminTokenBridger = new AdminErc20Bridger(l2Network);

		const l1Router = l2Network.tokenBridge.l1GatewayRouter;

		const l2Router = l2Network.tokenBridge.l2GatewayRouter;
		const inbox = l2Network.ethBridge.inbox;

		console.log(erc20Bridger, l1Router, adminTokenBridger, l2Router, inbox);

		console.log('Proceeding to custom gateways and tokens deployment');

		const L1CustomGateway = new ethers.ContractFactory(L1CustomGatewayAbi, L1CustomGatewayByteCode, l1Wallet);

		console.log('Deploying L1 custom gateway contract');

		const l1CustomGateway = await L1CustomGateway.deploy(l1Router, inbox);

		await l1CustomGateway.deployed();

		console.log(`L1 custom gateway is deployed to ${l1CustomGateway.address}`);
		const l1CustomGatewayAddress = l1CustomGateway.address;

		const L2CustomGateway = new ethers.ContractFactory(L2CustomGatewayAbi, L2CustomGatewayByteCode, l2Wallet);
		console.log('Deploying L2 custom gateway contract');

		const l2CustomGateway = await L2CustomGateway.deploy(l2Router);
		await l2CustomGateway.deployed();

		console.log(`L2 custom gateway is deployed to ${l2CustomGateway.address}`);
		const l2CustomGatewayAddress = l2CustomGateway.address;

		// Deploy custom token smart contract to L1;
		const L1CustomToken = new ethers.ContractFactory(l1TokenAbi, l1TokenByteCode, l1Wallet);

		const l1CustomToken = await L1CustomToken.deploy(l1CustomGatewayAddress, l1Router, parseEther('0.03'));

		await l1CustomToken.deployed();

		console.log(`Custom token is deployed at ${l1CustomToken.address}`);
		const l1CustomTokenAddress = l1CustomToken.address;

		// Deploy custom token smart contract to L2;
		const L2CustomToken = new ethers.ContractFactory(L2TokenAbi, l2TokenByteCode, l2Wallet);

		const l2CustomToken = await L2CustomToken.deploy(l2CustomGatewayAddress, l1CustomTokenAddress);

		await l2CustomToken.deployed();

		console.log(`L2 Custom token is deployed at ${l2CustomToken.address}`);
		const l2CustomTokenAddress = l2CustomToken.address;

		// Setting token bridge information on L1CustomGateWay;

		const setTokenBridgeInfoOnL1 = await l1CustomGateway.setTokenBridgeInformation(
			l1CustomTokenAddress,
			l2CustomTokenAddress,
			l2CustomGatewayAddress
		);

		const setTokenBridgeRec = await setTokenBridgeInfoOnL1.wait();
		console.log(`Token bridge information on L1CustomGateway: ${setTokenBridgeRec.transactionHash}`);

		// Registering custom token on L2

		const registerTokenTx = await adminTokenBridger.registerCustomToken(
			l1CustomTokenAddress,
			l2CustomTokenAddress,
			l1Wallet as any,
			l2Provider as any
		);
		const registerTokenRec = await registerTokenTx.wait();
		console.log(`Registering token confirmed on L1: reciept is ${registerTokenRec.transactionHash}`);

		console.log(`Waiting for L2 retryable (takes 10-15 minutes)`);
		console.log('We can now deposit');

		// Approving the l1Customgateway to transfer the tokens being deposited;

		const approveTx = await erc20Bridger.approveToken({
			l1Signer: l1Wallet as any,
			erc20L1Address: l1CustomTokenAddress,
		});

		const approveRec = await approveTx.wait();
		console.log(
			`You succesfully approved the Arbitrum Bridge to spend the L1 token : Tx Hash ${approveRec.transactionHash}`
		);

		const depositTx = await erc20Bridger.deposit({
			amount: parseEther('100') as any,
			erc20L1Address: l1CustomTokenAddress,
			l1Signer: l1Wallet as any,
			l2Provider: l2Provider as any,
		});

		console.log(`Deposit initiated: waiting for L2 retryable (takes 10 - 15 minutes)`);
		const depositRec = await depositTx.wait();

		const l2Result = await depositRec.waitForL2(l2Provider as any);

		l2Result.complete ? console.log('Deposit completed ') : console.log('Deposit failed');
	};

	return (
		<div>
			<button className="bg-red-400 py-2 px-3" onClick={handleDeployment}>
				Deploy
			</button>
		</div>
	);
};

export default Dapp;
