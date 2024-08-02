
export const navigation = [
  {
    name: 'Home',
    path: '',
    externalLink: false
  },
  {
    name: 'Ecosystem',
    path: '/ecosystem',
    externalLink: false,
    children: [
      {
        name: 'Ecosystem 1',
        path: '/ecosystem/ecosystem-1',
        externalLink: false
      },
      {
        name: 'Ecosystem 2',
        path: '/ecosystem/ecosystem-2',
        externalLink: false
      }
    ]
  },
  {
    name: 'Node',
    path: '/node',
    externalLink: false,
    children: [
      {
        name: 'Node 1',
        path: '/node/node-1',
        externalLink: false
      },
      {
        name: 'Node 2',
        path: '/node/node-2',
        externalLink: false
      }
    ]
  },
  {
    name: 'Airdrop',
    path: '/airdrop',
    externalLink: false
  },
  {
    name: 'Referral',
    path: '/referral',
    externalLink: false
  },
  {
    name: 'Docs',
    path: '/docs',
    externalLink: false
  },
  {
    name: 'Testnet',
    path: '/testnet',
    externalLink: false,
    children: [
      {
        name: 'Testnet 1',
        path: '/testnet/testnet-1',
        externalLink: false
      },
      {
        name: 'Testnet 2',
        path: '/testnet/testnet-2',
        externalLink: false
      }
    ]
  },
];