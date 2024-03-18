export const l1TokenAbi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'l1GatewayAddress_',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'routerAddress_',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'initialSupply',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'spender',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
		],
		name: 'Approval',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
		],
		name: 'Transfer',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'spender',
				type: 'address',
			},
		],
		name: 'allowance',
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
	{
		inputs: [
			{
				internalType: 'address',
				name: 'spender',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'approve',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'balanceOf',
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
	{
		inputs: [],
		name: 'decimals',
		outputs: [
			{
				internalType: 'uint8',
				name: '',
				type: 'uint8',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'spender',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'subtractedValue',
				type: 'uint256',
			},
		],
		name: 'decreaseAllowance',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'spender',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'addedValue',
				type: 'uint256',
			},
		],
		name: 'increaseAllowance',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'isArbitrumEnabled',
		outputs: [
			{
				internalType: 'uint8',
				name: '',
				type: 'uint8',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'l1GatewayAddress',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'name',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'maxSubmissionCostForRouter',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'maxGasForRouter',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'gasPriceBid',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'valueForRouter',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'creditBackAddress',
				type: 'address',
			},
		],
		name: 'registerTokenOnL2',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'routerAddress',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'symbol',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'totalSupply',
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
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'transfer',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'sender',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'recipient',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'transferFrom',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
];

export const l1TokenByteCode =
	'608060405234801562000010575f80fd5b50604051620025a3380380620025a383398181016040528101906200003691906200048a565b6040518060400160405280600d81526020017f4c31437573746f6d546f6b656e000000000000000000000000000000000000008152506040518060400160405280600381526020017f4c43540000000000000000000000000000000000000000000000000000000000815250620000c2620000b6620001ad60201b60201c565b620001b460201b60201c565b8160049081620000d391906200073e565b508060059081620000e591906200073e565b5050508260065f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620001a4336200017d6200027560201b60201c565b600a6200018b9190620009ab565b83620001989190620009fb565b6200027d60201b60201c565b50505062000b29565b5f33905090565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f6012905090565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620002ee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002e59062000aa3565b60405180910390fd5b620003015f8383620003e360201b60201c565b8060035f82825462000314919062000ac3565b925050819055508060015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055508173ffffffffffffffffffffffffffffffffffffffff165f73ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620003c4919062000b0e565b60405180910390a3620003df5f8383620003e860201b60201c565b5050565b505050565b505050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6200041c82620003f1565b9050919050565b6200042e8162000410565b811462000439575f80fd5b50565b5f815190506200044c8162000423565b92915050565b5f819050919050565b620004668162000452565b811462000471575f80fd5b50565b5f8151905062000484816200045b565b92915050565b5f805f60608486031215620004a457620004a3620003ed565b5b5f620004b3868287016200043c565b9350506020620004c6868287016200043c565b9250506040620004d98682870162000474565b9150509250925092565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806200055f57607f821691505b6020821081036200057557620005746200051a565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302620005d97fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200059c565b620005e586836200059c565b95508019841693508086168417925050509392505050565b5f819050919050565b5f62000626620006206200061a8462000452565b620005fd565b62000452565b9050919050565b5f819050919050565b620006418362000606565b6200065962000650826200062d565b848454620005a8565b825550505050565b5f90565b6200066f62000661565b6200067c81848462000636565b505050565b5b81811015620006a357620006975f8262000665565b60018101905062000682565b5050565b601f821115620006f257620006bc816200057b565b620006c7846200058d565b81016020851015620006d7578190505b620006ef620006e6856200058d565b83018262000681565b50505b505050565b5f82821c905092915050565b5f620007145f1984600802620006f7565b1980831691505092915050565b5f6200072e838362000703565b9150826002028217905092915050565b6200074982620004e3565b67ffffffffffffffff811115620007655762000764620004ed565b5b62000771825462000547565b6200077e828285620006a7565b5f60209050601f831160018114620007b4575f84156200079f578287015190505b620007ab858262000721565b8655506200081a565b601f198416620007c4866200057b565b5f5b82811015620007ed57848901518255600182019150602085019450602081019050620007c6565b868310156200080d578489015162000809601f89168262000703565b8355505b6001600288020188555050505b505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f8160011c9050919050565b5f808291508390505b6001851115620008ac5780860481111562000884576200088362000822565b5b6001851615620008945780820291505b8081029050620008a4856200084f565b945062000864565b94509492505050565b5f82620008c6576001905062000998565b81620008d5575f905062000998565b8160018114620008ee5760028114620008f9576200092f565b600191505062000998565b60ff8411156200090e576200090d62000822565b5b8360020a91508482111562000928576200092762000822565b5b5062000998565b5060208310610133831016604e8410600b8410161715620009695782820a90508381111562000963576200096262000822565b5b62000998565b6200097884848460016200085b565b9250905081840481111562000992576200099162000822565b5b81810290505b9392505050565b5f60ff82169050919050565b5f620009b78262000452565b9150620009c4836200099f565b9250620009f37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620008b5565b905092915050565b5f62000a078262000452565b915062000a148362000452565b925082820262000a248162000452565b9150828204841483151762000a3e5762000a3d62000822565b5b5092915050565b5f82825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f2061646472657373005f82015250565b5f62000a8b601f8362000a45565b915062000a988262000a55565b602082019050919050565b5f6020820190508181035f83015262000abc8162000a7d565b9050919050565b5f62000acf8262000452565b915062000adc8362000452565b925082820190508082111562000af75762000af662000822565b5b92915050565b62000b088162000452565b82525050565b5f60208201905062000b235f83018462000afd565b92915050565b611a6c8062000b375f395ff3fe608060405260043610610108575f3560e01c80638da5cb5b11610094578063a60d2e8c11610063578063a60d2e8c14610374578063a9059cbb1461039e578063dd62ed3e146103da578063f2fde38b14610416578063fc792d8e1461043e57610108565b80638da5cb5b146102ba5780638e5f5ad1146102e457806395d89b411461030e578063a457c2d71461033857610108565b8063313ce567116100db578063313ce567146101d85780633268cc5614610202578063395093511461022c57806370a0823114610268578063715018a6146102a457610108565b806306fdde031461010c578063095ea7b31461013657806318160ddd1461017257806323b872dd1461019c575b5f80fd5b348015610117575f80fd5b5061012061045a565b60405161012d91906110ac565b60405180910390f35b348015610141575f80fd5b5061015c6004803603810190610157919061115d565b6104ea565b60405161016991906111b5565b60405180910390f35b34801561017d575f80fd5b5061018661050c565b60405161019391906111dd565b60405180910390f35b3480156101a7575f80fd5b506101c260048036038101906101bd91906111f6565b610515565b6040516101cf91906111b5565b60405180910390f35b3480156101e3575f80fd5b506101ec61052a565b6040516101f99190611261565b60405180910390f35b34801561020d575f80fd5b50610216610532565b6040516102239190611289565b60405180910390f35b348015610237575f80fd5b50610252600480360381019061024d919061115d565b610557565b60405161025f91906111b5565b60405180910390f35b348015610273575f80fd5b5061028e600480360381019061028991906112a2565b61058d565b60405161029b91906111dd565b60405180910390f35b3480156102af575f80fd5b506102b861059e565b005b3480156102c5575f80fd5b506102ce6105b1565b6040516102db9190611289565b60405180910390f35b3480156102ef575f80fd5b506102f86105d8565b6040516103059190611261565b60405180910390f35b348015610319575f80fd5b5061032261062f565b60405161032f91906110ac565b60405180910390f35b348015610343575f80fd5b5061035e6004803603810190610359919061115d565b6106bf565b60405161036b91906111b5565b60405180910390f35b34801561037f575f80fd5b50610388610734565b6040516103959190611289565b60405180910390f35b3480156103a9575f80fd5b506103c460048036038101906103bf919061115d565b610759565b6040516103d191906111b5565b60405180910390f35b3480156103e5575f80fd5b5061040060048036038101906103fb91906112cd565b61077b565b60405161040d91906111dd565b60405180910390f35b348015610421575f80fd5b5061043c600480360381019061043791906112a2565b6107fd565b005b6104586004803603810190610453919061130b565b61087f565b005b606060048054610469906113fc565b80601f0160208091040260200160405190810160405280929190818152602001828054610495906113fc565b80156104e05780601f106104b7576101008083540402835291602001916104e0565b820191905f5260205f20905b8154815290600101906020018083116104c357829003601f168201915b5050505050905090565b5f806104f46109a1565b90506105018185856109a8565b600191505092915050565b5f600354905090565b5f610521848484610b6b565b90509392505050565b5f6012905090565b60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f806105616109a1565b9050610582818585610573858961077b565b61057d9190611459565b6109a8565b600191505092915050565b5f61059782610b99565b9050919050565b6105a6610bdf565b6105af5f610c5d565b565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5f600760149054906101000a900460ff16610628576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061f906114d6565b60405180910390fd5b60b1905090565b60606005805461063e906113fc565b80601f016020809104026020016040519081016040528092919081815260200182805461066a906113fc565b80156106b55780601f1061068c576101008083540402835291602001916106b5565b820191905f5260205f20905b81548152906001019060200180831161069857829003601f168201915b5050505050905090565b5f806106c96109a1565b90505f6106d6828661077b565b90508381101561071b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071290611564565b60405180910390fd5b61072882868684036109a8565b60019250505092915050565b60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f806107636109a1565b9050610770818585610d1e565b600191505092915050565b5f60025f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b610805610bdf565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610873576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086a906115f2565b60405180910390fd5b61087c81610c5d565b50565b610887610bdf565b5f600760149054906101000a900460ff1690506001600760146101000a81548160ff02191690831515021790555060075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632d67b72d8460065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1689898d886040518763ffffffff1660e01b8152600401610939959493929190611610565b60206040518083038185885af1158015610955573d5f803e3d5ffd5b50505050506040513d601f19601f8201168201806040525081019061097a9190611675565b5080600760146101000a81548160ff02191690831515021790555050505050505050505050565b5f33905090565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0d90611710565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a84576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7b9061179e565b60405180910390fd5b8060025f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610b5e91906111dd565b60405180910390a3505050565b5f80610b756109a1565b9050610b82858285610f8d565b610b8d858585610d1e565b60019150509392505050565b5f60015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b610be76109a1565b73ffffffffffffffffffffffffffffffffffffffff16610c056105b1565b73ffffffffffffffffffffffffffffffffffffffff1614610c5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5290611806565b60405180910390fd5b565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610d8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8390611894565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610dfa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df190611922565b60405180910390fd5b610e05838383611018565b5f60015f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610e89576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e80906119b0565b60405180910390fd5b81810360015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508160015f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f7491906111dd565b60405180910390a3610f8784848461101d565b50505050565b5f610f98848461077b565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146110125781811015611004576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ffb90611a18565b60405180910390fd5b61101184848484036109a8565b5b50505050565b505050565b505050565b5f81519050919050565b5f82825260208201905092915050565b5f5b8381101561105957808201518184015260208101905061103e565b5f8484015250505050565b5f601f19601f8301169050919050565b5f61107e82611022565b611088818561102c565b935061109881856020860161103c565b6110a181611064565b840191505092915050565b5f6020820190508181035f8301526110c48184611074565b905092915050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6110f9826110d0565b9050919050565b611109816110ef565b8114611113575f80fd5b50565b5f8135905061112481611100565b92915050565b5f819050919050565b61113c8161112a565b8114611146575f80fd5b50565b5f8135905061115781611133565b92915050565b5f8060408385031215611173576111726110cc565b5b5f61118085828601611116565b925050602061119185828601611149565b9150509250929050565b5f8115159050919050565b6111af8161119b565b82525050565b5f6020820190506111c85f8301846111a6565b92915050565b6111d78161112a565b82525050565b5f6020820190506111f05f8301846111ce565b92915050565b5f805f6060848603121561120d5761120c6110cc565b5b5f61121a86828701611116565b935050602061122b86828701611116565b925050604061123c86828701611149565b9150509250925092565b5f60ff82169050919050565b61125b81611246565b82525050565b5f6020820190506112745f830184611252565b92915050565b611283816110ef565b82525050565b5f60208201905061129c5f83018461127a565b92915050565b5f602082840312156112b7576112b66110cc565b5b5f6112c484828501611116565b91505092915050565b5f80604083850312156112e3576112e26110cc565b5b5f6112f085828601611116565b925050602061130185828601611116565b9150509250929050565b5f805f805f805f805f6101208a8c031215611329576113286110cc565b5b5f6113368c828d01611116565b99505060206113478c828d01611149565b98505060406113588c828d01611149565b97505060606113698c828d01611149565b965050608061137a8c828d01611149565b95505060a061138b8c828d01611149565b94505060c061139c8c828d01611149565b93505060e06113ad8c828d01611149565b9250506101006113bf8c828d01611116565b9150509295985092959850929598565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061141357607f821691505b602082108103611426576114256113cf565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6114638261112a565b915061146e8361112a565b92508282019050808211156114865761148561142c565b5b92915050565b7f4e4f545f45585045435445445f43414c4c0000000000000000000000000000005f82015250565b5f6114c060118361102c565b91506114cb8261148c565b602082019050919050565b5f6020820190508181035f8301526114ed816114b4565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f775f8201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b5f61154e60258361102c565b9150611559826114f4565b604082019050919050565b5f6020820190508181035f83015261157b81611542565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f20615f8201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b5f6115dc60268361102c565b91506115e782611582565b604082019050919050565b5f6020820190508181035f830152611609816115d0565b9050919050565b5f60a0820190506116235f83018861127a565b61163060208301876111ce565b61163d60408301866111ce565b61164a60608301856111ce565b611657608083018461127a565b9695505050505050565b5f8151905061166f81611133565b92915050565b5f6020828403121561168a576116896110cc565b5b5f61169784828501611661565b91505092915050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f206164645f8201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b5f6116fa60248361102c565b9150611705826116a0565b604082019050919050565b5f6020820190508181035f830152611727816116ee565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f2061646472655f8201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b5f61178860228361102c565b91506117938261172e565b604082019050919050565b5f6020820190508181035f8301526117b58161177c565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725f82015250565b5f6117f060208361102c565b91506117fb826117bc565b602082019050919050565b5f6020820190508181035f83015261181d816117e4565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f2061645f8201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b5f61187e60258361102c565b915061188982611824565b604082019050919050565b5f6020820190508181035f8301526118ab81611872565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f20616464725f8201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b5f61190c60238361102c565b9150611917826118b2565b604082019050919050565b5f6020820190508181035f83015261193981611900565b9050919050565b7f45524332303a207472616e7366657220616d6f756e74206578636565647320625f8201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b5f61199a60268361102c565b91506119a582611940565b604082019050919050565b5f6020820190508181035f8301526119c78161198e565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000005f82015250565b5f611a02601d8361102c565b9150611a0d826119ce565b602082019050919050565b5f6020820190508181035f830152611a2f816119f6565b905091905056fea264697066735822122077152ece26262db53241e4545f03b1b12f2d68223d01068644f8c20923d7f55d64736f6c63430008180033';
