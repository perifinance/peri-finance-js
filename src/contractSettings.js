import { getDefaultProvider, providers as Providers } from 'ethers';
import addresses from '../lib/addresses';
import ABIS from '../lib/abis';
import pynths from '../lib/pynths';

const SUPPORTED_NETWORKS = {
  1: 'mainnet',
  3: 'ropsten',
  4: 'rinkeby',
  5: 'goerli',
  42: 'kovan',
  137: 'polygon',
  80001: 'mumbai',
  // 56: 'bsc',
  97: 'bsctest',
};

const PROVIDER_URL = {
  mumbai: 'https://rpc-mumbai.maticvigil.com/v1/c5e88b495fa51a03f110ec4b047f2802933d625d',
  polygon: 'https://rpc-mainnet.maticvigil.com/v1/c5e88b495fa51a03f110ec4b047f2802933d625d',
  bsc: 'https://bsc-dataseed.binance.org/',
  bsctest: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
};

class ContractSettings {
  /**
   * @constructor
   * @param provider {Object} - ethers.js provider object - default ethers.providers.getDefaultProvider()
   * @param signer {Object} - one of 4 provided signers or a custom ethers.js compatible signer. Use Metamask for Dapp browser support
   * @param networkId {Number} - default 1 - mainnet, also supports 42 (Kovan)
   */
  constructor(contractSettings) {
    contractSettings = contractSettings || {};
    const { provider, signer, networkId } = contractSettings;
    this.networkId = networkId || 1;
    this.network = SUPPORTED_NETWORKS[Number(this.networkId)];
    this.provider = provider || getDefaultProvider();
    if (!provider && networkId) {
      if (['mumbai', 'polygon', 'bsc', 'bsctest'].includes(this.network)) {
        this.provider = new Providers.JsonRpcProvider(PROVIDER_URL[this.network]);
      } else {
        this.provider = getDefaultProvider(this.network);
      }
    }
    this.signer = signer;
    this.addressList = addresses[this.networkId];
    this.pynths = pynths[this.networkId];
    this.ABIS = ABIS[this.network];
  }
}

ContractSettings.SUPPORTED_NETWORKS = SUPPORTED_NETWORKS;

export default ContractSettings;
