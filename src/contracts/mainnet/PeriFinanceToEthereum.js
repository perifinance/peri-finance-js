import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/mainnet/PeriFinanceToEthereum';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function PeriFinanceToEthereum(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['PeriFinance'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Number
   **/
  this.DECIMALS = async () => {
    return await this.contract.DECIMALS();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String
   **/
  this.TOKEN_NAME = async () => {
    return await this.contract.TOKEN_NAME();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String
   **/
  this.TOKEN_SYMBOL = async () => {
    return await this.contract.TOKEN_SYMBOL();
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
   * Call (no gas consumed, doesn't require signer)
   * @param owner {String<EthAddress>}
   * @param spender {String<EthAddress>}
   * @returns BigNumber
   **/
  this.allowance = async (owner, spender) => {
    return await this.contract.allowance(owner, spender);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.anyPynthOrPERIRateIsInvalid = async () => {
    return await this.contract.anyPynthOrPERIRateIsInvalid();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param spender {String<EthAddress>}
   * @param value {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.approve = async (spender, value, txParams) => {
    txParams = txParams || {};
    return await this.contract.approve(spender, value, txParams);
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
   * @param index {BigNumber}
   * @returns String<EthAddress>
   **/
  this.availablePynths = async index => {
    return await this.contract.availablePynths(index);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.balanceOf = async account => {
    return await this.contract.balanceOf(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.blacklistManager = async () => {
    return await this.contract.blacklistManager();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _burnAmount {BigNumber}
   * @param _unstakeAmount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.burnPynthsAndUnstakeUSDC = async (_burnAmount, _unstakeAmount, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnPynthsAndUnstakeUSDC(_burnAmount, _unstakeAmount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.burnPynthsAndUnstakeUSDCToTarget = async txParams => {
    txParams = txParams || {};
    return await this.contract.burnPynthsAndUnstakeUSDCToTarget(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param  {String<EthAddress>}
   * @param  {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.burnSecondary = async (address_1, uint256_1, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnSecondary(address_1, uint256_1, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.childChainManager = async () => {
    return await this.contract.childChainManager();
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
   * @param _account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.currentUSDCDebtQuota = async _account => {
    return await this.contract.currentUSDCDebtQuota(_account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.debtBalanceOf = async (account, currencyKey) => {
    return await this.contract.debtBalanceOf(account, currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Number
   **/
  this.decimals = async () => {
    return await this.contract.decimals();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.emitExchangeRebate = async (account, currencyKey, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.emitExchangeRebate(account, currencyKey, amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.emitExchangeReclaim = async (account, currencyKey, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.emitExchangeReclaim(account, currencyKey, amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param trackingCode {bytes32}
   * @param toCurrencyKey {bytes32}
   * @param toAmount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.emitExchangeTracking = async (trackingCode, toCurrencyKey, toAmount, txParams) => {
    txParams = txParams || {};
    return await this.contract.emitExchangeTracking(
      trackingCode,
      toCurrencyKey,
      toAmount,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param fromCurrencyKey {bytes32}
   * @param fromAmount {BigNumber}
   * @param toCurrencyKey {bytes32}
   * @param toAmount {BigNumber}
   * @param toAddress {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.emitPynthExchange = async (
    account,
    fromCurrencyKey,
    fromAmount,
    toCurrencyKey,
    toAmount,
    toAddress,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.emitPynthExchange(
      account,
      fromCurrencyKey,
      fromAmount,
      toCurrencyKey,
      toAmount,
      toAddress,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchange = async (sourceCurrencyKey, sourceAmount, destinationCurrencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.exchange(
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param exchangeForAddress {String<EthAddress>}
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeOnBehalf = async (
    exchangeForAddress,
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchangeOnBehalf(
      exchangeForAddress,
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param exchangeForAddress {String<EthAddress>}
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param originator {String<EthAddress>}
   * @param trackingCode {bytes32}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeOnBehalfWithTracking = async (
    exchangeForAddress,
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    originator,
    trackingCode,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchangeOnBehalfWithTracking(
      exchangeForAddress,
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      originator,
      trackingCode,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param originator {String<EthAddress>}
   * @param trackingCode {bytes32}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeWithTracking = async (
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    originator,
    trackingCode,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchangeWithTracking(
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      originator,
      trackingCode,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param trackingCode {bytes32}
   * @param txParams {TxParams}
   * @returns Object
   **/
  this.exchangeWithVirtual = async (
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    trackingCode,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchangeWithVirtual(
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      trackingCode,
      txParams
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _contractName {bytes32}
   * @returns String<EthAddress>
   **/
  this.getRequiredAddress = async _contractName => {
    return await this.contract.getRequiredAddress(_contractName);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.inflationMinter = async () => {
    return await this.contract.inflationMinter();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.inflationalMint = async txParams => {
    txParams = txParams || {};
    return await this.contract.inflationalMint(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _networkDebtShare {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.inflationalMint = async (_networkDebtShare, txParams) => {
    txParams = txParams || {};
    return await this.contract.inflationalMint(_networkDebtShare, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.integrationProxy = async () => {
    return await this.contract.integrationProxy();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.isResolverCached = async () => {
    return await this.contract.isResolverCached();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns boolean
   **/
  this.isWaitingPeriod = async currencyKey => {
    return await this.contract.isWaitingPeriod(currencyKey);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.issueMaxPynths = async txParams => {
    txParams = txParams || {};
    return await this.contract.issueMaxPynths(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _issueAmount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.issuePynthsAndStakeMaxUSDC = async (_issueAmount, txParams) => {
    txParams = txParams || {};
    return await this.contract.issuePynthsAndStakeMaxUSDC(_issueAmount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _issueAmount {BigNumber}
   * @param _usdcStakeAmount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.issuePynthsAndStakeUSDC = async (_issueAmount, _usdcStakeAmount, txParams) => {
    txParams = txParams || {};
    return await this.contract.issuePynthsAndStakeUSDC(_issueAmount, _usdcStakeAmount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param pusdAmount {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.liquidateDelinquentAccount = async (account, pusdAmount, txParams) => {
    txParams = txParams || {};
    return await this.contract.liquidateDelinquentAccount(account, pusdAmount, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.maxIssuablePynths = async account => {
    return await this.contract.maxIssuablePynths(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.messageSender = async () => {
    return await this.contract.messageSender();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.migrateEscrowBalanceToRewardEscrowV2 = async txParams => {
    txParams = txParams || {};
    return await this.contract.migrateEscrowBalanceToRewardEscrowV2(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _user {String<EthAddress>}
   * @param _amount {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.mint = async (_user, _amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.mint(_user, _amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param  {String<EthAddress>}
   * @param  {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.mintSecondary = async (address_1, uint256_1, txParams) => {
    txParams = txParams || {};
    return await this.contract.mintSecondary(address_1, uint256_1, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param  {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.mintSecondaryRewards = async (uint256_1, txParams) => {
    txParams = txParams || {};
    return await this.contract.mintSecondaryRewards(uint256_1, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.minterRole = async () => {
    return await this.contract.minterRole();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String
   **/
  this.name = async () => {
    return await this.contract.name();
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
   * @returns bytes32
   **/
  this.pUSD = async () => {
    return await this.contract.pUSD();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.proxy = async () => {
    return await this.contract.proxy();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns String<EthAddress>
   **/
  this.pynths = async currencyKey => {
    return await this.contract.pynths(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param pynthAddress {String<EthAddress>}
   * @returns bytes32
   **/
  this.pynthsByAddress = async pynthAddress => {
    return await this.contract.pynthsByAddress(pynthAddress);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.rebuildCache = async txParams => {
    txParams = txParams || {};
    return await this.contract.rebuildCache(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns Object
   **/
  this.remainingIssuablePynths = async account => {
    return await this.contract.remainingIssuablePynths(account);
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
   * @returns bytes32[]
   **/
  this.resolverAddressesRequired = async () => {
    return await this.contract.resolverAddressesRequired();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _blacklistManager {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setBlacklistManager = async (_blacklistManager, txParams) => {
    txParams = txParams || {};
    return await this.contract.setBlacklistManager(_blacklistManager, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _integrationProxy {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setIntegrationProxy = async (_integrationProxy, txParams) => {
    txParams = txParams || {};
    return await this.contract.setIntegrationProxy(_integrationProxy, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param sender {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setMessageSender = async (sender, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMessageSender(sender, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _newMinter {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setMinterRole = async (_newMinter, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMinterRole(_newMinter, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _proxy {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setProxy = async (_proxy, txParams) => {
    txParams = txParams || {};
    return await this.contract.setProxy(_proxy, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _tokenState {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setTokenState = async (_tokenState, txParams) => {
    txParams = txParams || {};
    return await this.contract.setTokenState(_tokenState, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _newinflationMinter {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setinflationMinter = async (_newinflationMinter, txParams) => {
    txParams = txParams || {};
    return await this.contract.setinflationMinter(_newinflationMinter, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
   * @returns Object
   **/
  this.settle = async (currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.settle(currencyKey, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String
   **/
  this.symbol = async () => {
    return await this.contract.symbol();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.tokenState = async () => {
    return await this.contract.tokenState();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.totalIssuedPynths = async currencyKey => {
    return await this.contract.totalIssuedPynths(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.totalIssuedPynthsExcludeEtherCollateral = async currencyKey => {
    return await this.contract.totalIssuedPynthsExcludeEtherCollateral(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalSupply = async () => {
    return await this.contract.totalSupply();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalUSDCStakerCount = async () => {
    return await this.contract.totalUSDCStakerCount();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param to {String<EthAddress>}
   * @param value {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.transfer = async (to, value, txParams) => {
    txParams = txParams || {};
    return await this.contract.transfer(to, value, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param from {String<EthAddress>}
   * @param to {String<EthAddress>}
   * @param value {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.transferFrom = async (from, to, value, txParams) => {
    txParams = txParams || {};
    return await this.contract.transferFrom(from, to, value, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.transferablePeriFinance = async account => {
    return await this.contract.transferablePeriFinance(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.usdcStakedAmountOf = async _account => {
    return await this.contract.usdcStakedAmountOf(_account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.usdcTotalStakedAmount = async () => {
    return await this.contract.usdcTotalStakedAmount();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.userUSDCStakingShare = async _account => {
    return await this.contract.userUSDCStakingShare(_account);
  };
}

export default PeriFinanceToEthereum;
