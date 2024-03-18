import { useAccount, useDisconnect, useSimulateContract, useWriteContract, useWatchContractEvent } from 'wagmi';
import { Inter } from 'next/font/google';
import { useReadContract } from 'wagmi';
import { NFTStorage } from 'nft.storage';
import { ERC20ABI } from '../../utils/tokenAbi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState } from 'react';
import { parseEther } from 'viem';

const inter = Inter({ subsets: ['latin'] });

const NFT_STORAGE_API_KEY = process.env.NEXT_PUBLIC_NFTSTORAGE_API_KEY;

const nftStorage = new NFTStorage({ token: `${NFT_STORAGE_API_KEY}` });

const ERC_20_TOKEN_ADDRESS = '0xF6d3B2859541BB592F61901ac1948FE0fb6b94e9';

export default function Home() {
	const { isConnected, isConnecting, address } = useAccount();

	const { disconnect } = useDisconnect();

	const [storedValue, setStoreData] = useState(0);

	const { data: balance, isLoading: readContractLoading } = useReadContract({
		abi: ERC20ABI,
		functionName: 'balanceOf',
		args: [address],
		address: ERC_20_TOKEN_ADDRESS,
	});

	const [formData, setFormData] = useState({
		address: '',
		value: '',
	});

	useWatchContractEvent({
		address: '0xb11B363819F6B6fc18fc6568Bc167E76b63c5Cd7',
		abi: [
			{
				inputs: [
					{
						internalType: 'uint256',
						name: 'newValue',
						type: 'uint256',
					},
				],
				name: 'setValue',
				outputs: [],
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				anonymous: false,
				inputs: [
					{
						indexed: false,
						internalType: 'uint256',
						name: 'newValue',
						type: 'uint256',
					},
				],
				name: 'ValueChanged',
				type: 'event',
			},
			{
				inputs: [],
				name: 'storedValue',
				outputs: [
					{
						internalType: 'uint256',
						name: '',
						type: 'uint256',
					},
				],
				stateMutability: 'view',
				type: 'function',
			},
		],
		eventName: 'ValueChanged',
		onLogs(logs) {
			if (logs[0].args.newValue) setStoreData(Number(logs[0].args.newValue));

			console.log('Event emitted', logs);
		},
	});

	const { data, error } = useSimulateContract({
		abi: ERC20ABI,
		address: ERC_20_TOKEN_ADDRESS,
		functionName: 'transferFrom',
		args: [address, formData.address, parseEther(formData.value)],
	});

	const { data: approveData, error: approveError } = useSimulateContract({
		abi: ERC20ABI,
		address: ERC_20_TOKEN_ADDRESS,
		functionName: 'approve',
		args: [address, parseEther(formData.value)],
	});

	const { writeContractAsync } = useWriteContract();

	const handleTransfer = async () => {
		try {
			const approvalResponse = await writeContractAsync(approveData!.request);

			if (approvalResponse) {
				const response = await writeContractAsync(data!.request);
				console.log(response);
			}
		} catch (error) {
			console.error(error);
		}
	};

	// Upload to IPFS
	const [storageData, setStorageData] = useState({
		name: '',
		description: '',
		image: null as File | null | undefined,
	});

	const handleUploadToIPFS = async () => {
		// const imageFile = new File();
		if (!storageData.image || !storageData.name || !storageData.description) return alert('Incomplete form');

		const response = await nftStorage.store({
			name: storageData.name,
			description: storageData.description,
			image: storageData.image,
			// image:
			// properties: {
			// 	age: '20'
			// }
		});
		console.log(response);
	};

	if (isConnecting) return <p>Loading...</p>;

	if (!isConnected)
		return (
			<div>
				<p>Please connect your wallet</p>
				<ConnectButton />
			</div>
		);

	return (
		<main className={` min-h-screen p-24 ${inter.className}`}>
			<p>{address}</p>

			{readContractLoading && <p>Loading Balance ...</p>}

			{!!balance && !readContractLoading && <p>Balance of : {balance as any} </p>}
			<div>
				<input
					type="text"
					className="my-3 text-black "
					placeholder="Enter Address"
					onChange={(event) => {
						setFormData((prev) => ({ ...prev, address: event.target.value }));
					}}
				/>
			</div>
			<div>
				<input
					type="text"
					className="text-black"
					placeholder="Enter Amount"
					onChange={(event) => {
						setFormData((prev) => ({ ...prev, value: event.target.value }));
					}}
				/>
			</div>
			<div>
				<button
					className="bg-blue-500 my-4 px-3 py-2"
					onClick={(event) => {
						handleTransfer();
					}}
				>
					Send Token
				</button>
			</div>
			<button
				onClick={() => {
					disconnect();
				}}
			>
				Disconnect Account
			</button>

			<h1>Upload to IPFS</h1>
			<div>
				<input
					type="text"
					placeholder="Enter Name"
					className="text-black"
					onChange={(event) => setStorageData((prev) => ({ ...prev, name: event?.target.value }))}
				/>
			</div>
			<div className="my-4">
				<input
					type="text"
					className="text-black"
					placeholder="Enter Description"
					onChange={(event) => setStorageData((prev) => ({ ...prev, description: event?.target.value }))}
				/>
			</div>

			<div>
				<input
					type="file"
					accept="image/png, image/jpeg"
					placeholder="Select Image"
					onChange={(event) => {
						setStorageData((prev) => ({ ...prev, image: event?.target.files?.[0] }));
					}}
				/>
			</div>
			<div>
				<button onClick={handleUploadToIPFS} className="bg-red-400">
					Upload
				</button>
			</div>
			<div>
				<p>Smart contract Stored value: {storedValue}</p>
			</div>
		</main>
	);
}
