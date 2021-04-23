import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/ropsten/Issuer';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Issuer(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['Issuer'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32
   **/
  this.CONTRACT_NAME = async () => {
    return await this.contract.CONTRACT_NAME();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32
   **/
  this.LAST_ISSUE_EVENT = async () => {
    return await this.contract.LAST_ISSUE_EVENT();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_ADDRESSES_FROM_RESOLVER = async () => {
    return await this.contract.MAX_ADDRESSES_FROM_RESOLVER();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.acceptOwnership = async txParams => {
    txParams = txParams || {};
    return await this.contract.acceptOwnership(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param pynth {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.addPynth = async (pynth, txParams) => {
    txParams = txParams || {};
    return await this.contract.addPynth(pynth, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.anyPynthOrSNXRateIsInvalid = async () => {
    return await this.contract.anyPynthOrSNXRateIsInvalid();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32[]
   **/
  this.availableCurrencyKeys = async () => {
    return await this.contract.availableCurrencyKeys();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.availablePynthCount = async () => {
    return await this.contract.availablePynthCount();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns String<EthAddress>
   **/
  this.availablePynths = async uint256_1 => {
    return await this.contract.availablePynths(uint256_1);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param from {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.burnPynths = async (from, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnPynths(from, amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param burnForAddress {String<EthAddress>}
   * @param from {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.burnPynthsOnBehalf = async (burnForAddress, from, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnPynthsOnBehalf(burnForAddress, from, amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param from {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.burnPynthsToTarget = async (from, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnPynthsToTarget(from, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param burnForAddress {String<EthAddress>}
   * @param from {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.burnPynthsToTargetOnBehalf = async (burnForAddress, from, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnPynthsToTargetOnBehalf(burnForAddress, from, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns boolean
   **/
  this.canBurnPynths = async account => {
    return await this.contract.canBurnPynths(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.collateral = async account => {
    return await this.contract.collateral(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _issuer {String<EthAddress>}
   * @returns BigNumber
   **/
  this.collateralisationRatio = async _issuer => {
    return await this.contract.collateralisationRatio(_issuer);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _issuer {String<EthAddress>}
   * @returns Object
   **/
  this.collateralisationRatioAndAnyRatesInvalid = async _issuer => {
    return await this.contract.collateralisationRatioAndAnyRatesInvalid(_issuer);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _issuer {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.debtBalanceOf = async (_issuer, currencyKey) => {
    return await this.contract.debtBalanceOf(_issuer, currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32[24]
   **/
  this.getResolverAddressesRequired = async () => {
    return await this.contract.getResolverAddressesRequired();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _resolver {String<EthAddress>}
   * @returns boolean
   **/
  this.isResolverCached = async _resolver => {
    return await this.contract.isResolverCached(_resolver);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.issuanceRatio = async () => {
    return await this.contract.issuanceRatio();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param from {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.issueMaxPynths = async (from, txParams) => {
    txParams = txParams || {};
    return await this.contract.issueMaxPynths(from, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param issueForAddress {String<EthAddress>}
   * @param from {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.issueMaxPynthsOnBehalf = async (issueForAddress, from, txParams) => {
    txParams = txParams || {};
    return await this.contract.issueMaxPynthsOnBehalf(issueForAddress, from, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param from {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.issuePynths = async (from, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.issuePynths(from, amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param issueForAddress {String<EthAddress>}
   * @param from {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.issuePynthsOnBehalf = async (issueForAddress, from, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.issuePynthsOnBehalf(issueForAddress, from, amount, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.lastIssueEvent = async account => {
    return await this.contract.lastIssueEvent(account);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param pusdAmount {BigNumber}
   * @param liquidator {String<EthAddress>}
   * @param txParams {TxParams}
   * @returns Object
   **/
  this.liquidateDelinquentAccount = async (account, pusdAmount, liquidator, txParams) => {
    txParams = txParams || {};
    return await this.contract.liquidateDelinquentAccount(
      account,
      pusdAmount,
      liquidator,
      txParams
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _issuer {String<EthAddress>}
   * @returns BigNumber
   **/
  this.maxIssuablePynths = async _issuer => {
    return await this.contract.maxIssuablePynths(_issuer);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.minimumStakeTime = async () => {
    return await this.contract.minimumStakeTime();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _owner {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.nominateNewOwner = async (_owner, txParams) => {
    txParams = txParams || {};
    return await this.contract.nominateNewOwner(_owner, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _issuer {String<EthAddress>}
   * @returns Object
   **/
  this.remainingIssuablePynths = async _issuer => {
    return await this.contract.remainingIssuablePynths(_issuer);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
  
   **/
  this.removePynth = async (currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.removePynth(currencyKey, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.resolver = async () => {
    return await this.contract.resolver();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns bytes32
   **/
  this.resolverAddressesRequired = async uint256_1 => {
    return await this.contract.resolverAddressesRequired(uint256_1);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _resolver {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setResolverAndSyncCache = async (_resolver, txParams) => {
    txParams = txParams || {};
    return await this.contract.setResolverAndSyncCache(_resolver, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes32}
   * @returns String<EthAddress>
   **/
  this.pynths = async bytes32_1 => {
    return await this.contract.pynths(bytes32_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns bytes32
   **/
  this.pynthsByAddress = async address_1 => {
    return await this.contract.pynthsByAddress(address_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @param excludeEtherCollateral {boolean}
   * @returns BigNumber
   **/
  this.totalIssuedPynths = async (currencyKey, excludeEtherCollateral) => {
    return await this.contract.totalIssuedPynths(currencyKey, excludeEtherCollateral);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param balance {BigNumber}
   * @returns Object
   **/
  this.transferablePeriFinanceAndAnyRateIsInvalid = async (account, balance) => {
    return await this.contract.transferablePeriFinanceAndAnyRateIsInvalid(account, balance);
  };
}

export default Issuer;