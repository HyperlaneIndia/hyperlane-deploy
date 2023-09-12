import { ChainMap, ModuleType, MultisigIsmConfig } from '@hyperlane-xyz/sdk';

export const multisigIsmConfig: ChainMap<MultisigIsmConfig> = {
  // ----------- Your chains here -----------------
  anvil1: {
    type: ModuleType.LEGACY_MULTISIG,
    threshold: 1,
    validators: [
      // Last anvil address
      '0xa0ee7a142d267c1f36714e4a8f75612f20a79720',
    ],
  },
  anvil2: {
    type: ModuleType.LEGACY_MULTISIG,
    threshold: 1,
    validators: [
      // Last anvil address
      '0xa0ee7a142d267c1f36714e4a8f75612f20a79720',
    ],
  },
  polygonzkevm: {
    threshold: 1,
    type: ModuleType.LEGACY_MULTISIG,
    validators: [
      '0x821d8a570fc0098e22eee4221529b10c9d8ce48a',
      '0x5c690e1ba18c92c2b92b89e096db93d3dec0faa0',
    ],
  },
};
