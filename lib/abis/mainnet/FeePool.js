export default [
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_proxy',
        type: 'address',
      },
      { internalType: 'address', name: '_owner', type: 'address' },
      { internalType: 'address', name: '_resolver', type: 'address' },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
    signature: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'name',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'destination',
        type: 'address',
      },
    ],
    name: 'CacheUpdated',
    type: 'event',
    signature: '0x88a93678a3692f6789d9546fc621bf7234b101ddb7d4fe479455112831b8aa68',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'feePeriodId',
        type: 'uint256',
      },
    ],
    name: 'FeePeriodClosed',
    type: 'event',
    signature: '0xe2ca356e01eb0a4bb7caaf07d472b7d687db156713ffc3111c758e9fe0a17ea7',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'pUSDAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'periRewards',
        type: 'uint256',
      },
    ],
    name: 'FeesClaimed',
    type: 'event',
    signature: '0x1ac537f0ad67b64ac68a04587ff3a4cb6977de22eb2c37ee560897a92c6d07c7',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'debtRatio',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'debtEntryIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'feePeriodStartingDebtIndex',
        type: 'uint256',
      },
    ],
    name: 'IssuanceDebtRatioEntry',
    type: 'event',
    signature: '0x28dcdf40e6b6196065d54760038ab1a8c0c1d9cfa58a99e6b0cb6022f7e24775',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'oldOwner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnerChanged',
    type: 'event',
    signature: '0xb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnerNominated',
    type: 'event',
    signature: '0x906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce22',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'proxyAddress',
        type: 'address',
      },
    ],
    name: 'ProxyUpdated',
    type: 'event',
    signature: '0xfc80377ca9c49cc11ae6982f390a42db976d5530af7c43889264b13fbbd7c57e',
  },
  {
    constant: true,
    inputs: [],
    name: 'FEE_ADDRESS',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xeb1edd61',
  },
  {
    constant: true,
    inputs: [],
    name: 'FEE_PERIOD_LENGTH',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xcff2ddad',
  },
  {
    constant: false,
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x79ba5097',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'uint256', name: 'debtRatio', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'debtEntryIndex',
        type: 'uint256',
      },
    ],
    name: 'appendAccountIssuanceRecord',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x86645274',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'uint256', name: 'quantity', type: 'uint256' },
    ],
    name: 'appendVestingEntry',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xb5ddb9c7',
  },
  {
    constant: false,
    inputs: [],
    name: 'claimFees',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xd294f093',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'claimingForAddress',
        type: 'address',
      },
    ],
    name: 'claimOnBehalf',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x6466f45e',
  },
  {
    constant: false,
    inputs: [],
    name: 'closeCurrentFeePeriod',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x3ebc457a',
  },
  {
    constant: true,
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'uint256', name: 'period', type: 'uint256' },
    ],
    name: 'effectiveDebtRatioForPeriod',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x0813071c',
  },
  {
    constant: true,
    inputs: [],
    name: 'feePeriodDuration',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x22425fa4',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'feesAvailable',
    outputs: [
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'uint256', name: '', type: 'uint256' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x0de58615',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'feesByPeriod',
    outputs: [
      {
        internalType: 'uint256[2][2]',
        name: 'results',
        type: 'uint256[2][2]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x33140016',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_claimingAddress',
        type: 'address',
      },
    ],
    name: 'getLastFeeWithdrawal',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x07ea50cd',
  },
  {
    constant: true,
    inputs: [],
    name: 'getPenaltyThresholdRatio',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xac834193',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'feePeriodIndex',
        type: 'uint256',
      },
      { internalType: 'uint256', name: 'feePeriodId', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'startingDebtIndex',
        type: 'uint256',
      },
      { internalType: 'uint256', name: 'startTime', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'feesToDistribute',
        type: 'uint256',
      },
      { internalType: 'uint256', name: 'feesClaimed', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'rewardsToDistribute',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewardsClaimed',
        type: 'uint256',
      },
    ],
    name: 'importFeePeriod',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xb10090b8',
  },
  {
    constant: true,
    inputs: [],
    name: 'integrationProxy',
    outputs: [{ internalType: 'contract Proxy', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x9cbdaeb6',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'isFeesClaimable',
    outputs: [{ internalType: 'bool', name: 'feesClaimable', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x59a2f19f',
  },
  {
    constant: true,
    inputs: [],
    name: 'isResolverCached',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x2af64bd3',
  },
  {
    constant: true,
    inputs: [],
    name: 'issuanceRatio',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xb410a034',
  },
  {
    constant: true,
    inputs: [],
    name: 'messageSender',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xd67bdd25',
  },
  {
    constant: false,
    inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
    name: 'nominateNewOwner',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x1627540c',
  },
  {
    constant: true,
    inputs: [],
    name: 'nominatedOwner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x53a47bb7',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x8da5cb5b',
  },
  {
    constant: true,
    inputs: [],
    name: 'proxy',
    outputs: [{ internalType: 'contract Proxy', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xec556889',
  },
  {
    constant: false,
    inputs: [],
    name: 'rebuildCache',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x74185360',
  },
  {
    constant: true,
    inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
    name: 'recentFeePeriods',
    outputs: [
      { internalType: 'uint64', name: 'feePeriodId', type: 'uint64' },
      {
        internalType: 'uint64',
        name: 'startingDebtIndex',
        type: 'uint64',
      },
      { internalType: 'uint64', name: 'startTime', type: 'uint64' },
      {
        internalType: 'uint256',
        name: 'feesToDistribute',
        type: 'uint256',
      },
      { internalType: 'uint256', name: 'feesClaimed', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'rewardsToDistribute',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewardsClaimed',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x3fcd2240',
  },
  {
    constant: false,
    inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
    name: 'recordFeePaid',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x22bf55ef',
  },
  {
    constant: true,
    inputs: [],
    name: 'resolver',
    outputs: [
      {
        internalType: 'contract AddressResolver',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x04f3bcec',
  },
  {
    constant: true,
    inputs: [],
    name: 'resolverAddressesRequired',
    outputs: [
      {
        internalType: 'bytes32[]',
        name: 'addresses',
        type: 'bytes32[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x899ffef4',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address payable',
        name: '_integrationProxy',
        type: 'address',
      },
    ],
    name: 'setIntegrationProxy',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x131b0ae7',
  },
  {
    constant: false,
    inputs: [{ internalType: 'address', name: 'sender', type: 'address' }],
    name: 'setMessageSender',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xbc67f832',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address payable',
        name: '_proxy',
        type: 'address',
      },
    ],
    name: 'setProxy',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x97107d6d',
  },
  {
    constant: false,
    inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
    name: 'setRewardsToDistribute',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xfd1f498d',
  },
  {
    constant: true,
    inputs: [],
    name: 'setupExpiryTime',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x46ba2d90',
  },
  {
    constant: true,
    inputs: [],
    name: 'targetThreshold',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xe0e6393d',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalFeesAvailable',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x569249d0',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalRewardsAvailable',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x6de813f1',
  },
];
