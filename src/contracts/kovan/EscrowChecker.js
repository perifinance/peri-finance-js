import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/kovan/EscrowChecker';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function EscrowChecker(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['EscrowChecker'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns uint256[16]
   **/
  this.checkAccountSchedule = async account => {
    return await this.contract.checkAccountSchedule(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.periFinance_escrow = async () => {
    return await this.contract.periFinance_escrow();
  };
}

export default EscrowChecker;
