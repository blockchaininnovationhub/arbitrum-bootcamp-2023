export const L2TokenAbi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'l2GatewayAddress_',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'l1TokenAddress_',
				type: 'address',
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
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'bridgeBurn',
		outputs: [],
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
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'bridgeMint',
		outputs: [],
		stateMutability: 'nonpayable',
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
		name: 'l1Address',
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
		name: 'l2GatewayAddress',
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
				name: 'from',
				type: 'address',
			},
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
];

export const l2TokenByteCode =
	'60806040523480156200001157600080fd5b5060405162001f3538038062001f358339818101604052810190620000379190620001bd565b6040518060400160405280600d81526020017f4c32437573746f6d546f6b656e000000000000000000000000000000000000008152506040518060400160405280600381526020017f4c435400000000000000000000000000000000000000000000000000000000008152508160039081620000b491906200047e565b508060049081620000c691906200047e565b50505081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000565565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001858262000158565b9050919050565b620001978162000178565b8114620001a357600080fd5b50565b600081519050620001b7816200018c565b92915050565b60008060408385031215620001d757620001d662000153565b5b6000620001e785828601620001a6565b9250506020620001fa85828601620001a6565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200028657607f821691505b6020821081036200029c576200029b6200023e565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003067fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620002c7565b620003128683620002c7565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200035f6200035962000353846200032a565b62000334565b6200032a565b9050919050565b6000819050919050565b6200037b836200033e565b620003936200038a8262000366565b848454620002d4565b825550505050565b600090565b620003aa6200039b565b620003b781848462000370565b505050565b5b81811015620003df57620003d3600082620003a0565b600181019050620003bd565b5050565b601f8211156200042e57620003f881620002a2565b6200040384620002b7565b8101602085101562000413578190505b6200042b6200042285620002b7565b830182620003bc565b50505b505050565b600082821c905092915050565b6000620004536000198460080262000433565b1980831691505092915050565b60006200046e838362000440565b9150826002028217905092915050565b620004898262000204565b67ffffffffffffffff811115620004a557620004a46200020f565b5b620004b182546200026d565b620004be828285620003e3565b600060209050601f831160018114620004f65760008415620004e1578287015190505b620004ed858262000460565b8655506200055d565b601f1984166200050686620002a2565b60005b82811015620005305784890151825560018201915060208501945060208101905062000509565b868310156200055057848901516200054c601f89168262000440565b8355505b6001600288020188555050505b505050505050565b6119c080620005756000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806374f4f54711610097578063a457c2d711610066578063a457c2d714610288578063a9059cbb146102b8578063c2eeeebd146102e8578063dd62ed3e14610306576100f5565b806374f4f547146102145780638c2a993e146102305780638d9ae1f81461024c57806395d89b411461026a576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce5671461019657806339509351146101b457806370a08231146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610336565b60405161010f9190611077565b60405180910390f35b610132600480360381019061012d9190611132565b6103c8565b60405161013f919061118d565b60405180910390f35b6101506103eb565b60405161015d91906111b7565b60405180910390f35b610180600480360381019061017b91906111d2565b6103f5565b60405161018d919061118d565b60405180910390f35b61019e610424565b6040516101ab9190611241565b60405180910390f35b6101ce60048036038101906101c99190611132565b61042d565b6040516101db919061118d565b60405180910390f35b6101fe60048036038101906101f9919061125c565b610464565b60405161020b91906111b7565b60405180910390f35b61022e60048036038101906102299190611132565b6104ac565b005b61024a60048036038101906102459190611132565b61054a565b005b6102546105e8565b6040516102619190611298565b60405180910390f35b61027261060e565b60405161027f9190611077565b60405180910390f35b6102a2600480360381019061029d9190611132565b6106a0565b6040516102af919061118d565b60405180910390f35b6102d260048036038101906102cd9190611132565b610717565b6040516102df919061118d565b60405180910390f35b6102f061073a565b6040516102fd9190611298565b60405180910390f35b610320600480360381019061031b91906112b3565b610760565b60405161032d91906111b7565b60405180910390f35b60606003805461034590611322565b80601f016020809104026020016040519081016040528092919081815260200182805461037190611322565b80156103be5780601f10610393576101008083540402835291602001916103be565b820191906000526020600020905b8154815290600101906020018083116103a157829003601f168201915b5050505050905090565b6000806103d36107e7565b90506103e08185856107ef565b600191505092915050565b6000600254905090565b6000806104006107e7565b905061040d8582856109b8565b610418858585610a44565b60019150509392505050565b60006012905090565b6000806104386107e7565b905061045981858561044a8589610760565b6104549190611382565b6107ef565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461053c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053390611402565b60405180910390fd5b6105468282610cba565b5050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d190611402565b60405180910390fd5b6105e48282610e87565b5050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606004805461061d90611322565b80601f016020809104026020016040519081016040528092919081815260200182805461064990611322565b80156106965780601f1061066b57610100808354040283529160200191610696565b820191906000526020600020905b81548152906001019060200180831161067957829003601f168201915b5050505050905090565b6000806106ab6107e7565b905060006106b98286610760565b9050838110156106fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f590611494565b60405180910390fd5b61070b82868684036107ef565b60019250505092915050565b6000806107226107e7565b905061072f818585610a44565b600191505092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361085e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085590611526565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c4906115b8565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516109ab91906111b7565b60405180910390a3505050565b60006109c48484610760565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610a3e5781811015610a30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2790611624565b60405180910390fd5b610a3d84848484036107ef565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ab3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aaa906116b6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1990611748565b60405180910390fd5b610b2d838383610fdd565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610bb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610baa906117da565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ca191906111b7565b60405180910390a3610cb4848484610fe2565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d209061186c565b60405180910390fd5b610d3582600083610fdd565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610dbb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610db2906118fe565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e6e91906111b7565b60405180910390a3610e8283600084610fe2565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ef6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eed9061196a565b60405180910390fd5b610f0260008383610fdd565b8060026000828254610f149190611382565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610fc591906111b7565b60405180910390a3610fd960008383610fe2565b5050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611021578082015181840152602081019050611006565b60008484015250505050565b6000601f19601f8301169050919050565b600061104982610fe7565b6110538185610ff2565b9350611063818560208601611003565b61106c8161102d565b840191505092915050565b60006020820190508181036000830152611091818461103e565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006110c98261109e565b9050919050565b6110d9816110be565b81146110e457600080fd5b50565b6000813590506110f6816110d0565b92915050565b6000819050919050565b61110f816110fc565b811461111a57600080fd5b50565b60008135905061112c81611106565b92915050565b6000806040838503121561114957611148611099565b5b6000611157858286016110e7565b92505060206111688582860161111d565b9150509250929050565b60008115159050919050565b61118781611172565b82525050565b60006020820190506111a2600083018461117e565b92915050565b6111b1816110fc565b82525050565b60006020820190506111cc60008301846111a8565b92915050565b6000806000606084860312156111eb576111ea611099565b5b60006111f9868287016110e7565b935050602061120a868287016110e7565b925050604061121b8682870161111d565b9150509250925092565b600060ff82169050919050565b61123b81611225565b82525050565b60006020820190506112566000830184611232565b92915050565b60006020828403121561127257611271611099565b5b6000611280848285016110e7565b91505092915050565b611292816110be565b82525050565b60006020820190506112ad6000830184611289565b92915050565b600080604083850312156112ca576112c9611099565b5b60006112d8858286016110e7565b92505060206112e9858286016110e7565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061133a57607f821691505b60208210810361134d5761134c6112f3565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061138d826110fc565b9150611398836110fc565b92508282019050808211156113b0576113af611353565b5b92915050565b7f4e4f545f47415445574159000000000000000000000000000000000000000000600082015250565b60006113ec600b83610ff2565b91506113f7826113b6565b602082019050919050565b6000602082019050818103600083015261141b816113df565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061147e602583610ff2565b915061148982611422565b604082019050919050565b600060208201905081810360008301526114ad81611471565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611510602483610ff2565b915061151b826114b4565b604082019050919050565b6000602082019050818103600083015261153f81611503565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006115a2602283610ff2565b91506115ad82611546565b604082019050919050565b600060208201905081810360008301526115d181611595565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061160e601d83610ff2565b9150611619826115d8565b602082019050919050565b6000602082019050818103600083015261163d81611601565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006116a0602583610ff2565b91506116ab82611644565b604082019050919050565b600060208201905081810360008301526116cf81611693565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611732602383610ff2565b915061173d826116d6565b604082019050919050565b6000602082019050818103600083015261176181611725565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006117c4602683610ff2565b91506117cf82611768565b604082019050919050565b600060208201905081810360008301526117f3816117b7565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611856602183610ff2565b9150611861826117fa565b604082019050919050565b6000602082019050818103600083015261188581611849565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b60006118e8602283610ff2565b91506118f38261188c565b604082019050919050565b60006020820190508181036000830152611917816118db565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611954601f83610ff2565b915061195f8261191e565b602082019050919050565b6000602082019050818103600083015261198381611947565b905091905056fea26469706673582212207319a145c214ea20a742cc258b419758175aa7f4313455d107baaaac1d23609d64736f6c63430008130033';
