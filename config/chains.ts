import { ChainMap, ChainMetadata, ExplorerFamily, ProtocolType } from '@hyperlane-xyz/sdk';

// import { chainMetadata } from '@hyperlane-xyz/sdk';
// A map of chain names to ChainMetadata
export const chains: ChainMap<ChainMetadata> = {
  // ----------- Add your chains here -----------------
  polygonzkevm: {
    name: 'polygonzkevm',
    chainId: 1101,
    domainId: 1101,
    protocol: ProtocolType.Ethereum,
    displayName: 'Polygon zkEVM',
    displayNameShort: 'Polygon zkEVM',
    nativeToken: {
      name: 'ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'https://zkevm-rpc.com',
      },
    ],
    blockExplorers: [
      {
        name: 'Polygon Scan',
        url: 'https://zkevm.polygonscan.com',
        apiUrl: 'https://api-zkevm.polygonscan.com/api',
        family: ExplorerFamily.Etherscan
      },
    ],
    isTestnet: false,
    blocks: {
      confirmations: 1,
      reorgPeriod: 0,
      estimateBlockTime: 5,
    }
  },
  anvil1: {
    name: 'anvil1',
    protocol: ProtocolType.Ethereum,
    // anvil default chain id
    chainId: 31337,
    // Used to configure a Warp Route to bridge anvil1 ETH
    // to anvil2 in CI tests.
    nativeToken: {
      name: 'ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'http://127.0.0.1:8545',
      },
    ],
    // You can set overrides for transaction fields here
    // transactionOverrides: {
    //   gasLimit: 1000000
    // },
  },
  anvil2: {
    name: 'anvil2',
    protocol: ProtocolType.Ethereum,
    chainId: 31338,
    rpcUrls: [
      {
        http: 'http://127.0.0.1:8555',
      },
    ],
  },
  // --------------------------------------------------
  // You can also override the default chain metadata (completely)
  // ethereum: {
  //   ...chainMetadata.ethereum,
  //   publicRpcUrls: [
  //     {
  //       http: 'my.custom.rpc.url',
  //     }
  //   ],
  // }
};
