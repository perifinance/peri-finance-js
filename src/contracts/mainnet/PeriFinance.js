import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/mainnet/PeriFinance';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function PeriFinance(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['ProxyERC20'],
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
   * Returns the count of available pynths in the system, which you can use to iterate availablePynths.<br>
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
   * Burn pynths to clear issued pynths/free PERI.<br>
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.burnPynths = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnPynths(amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param burnForAddress {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.burnPynthsOnBehalf = async (burnForAddress, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnPynthsOnBehalf(burnForAddress, amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.burnPynthsToTarget = async txParams => {
    txParams = txParams || {};
    return await this.contract.burnPynthsToTarget(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param burnForAddress {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.burnPynthsToTargetOnBehalf = async (burnForAddress, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnPynthsToTargetOnBehalf(burnForAddress, txParams);
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
   * The total PERI owned by this account, both escrowed and unescrowed, against which pynths can be issued. This includes those already being used as collateral (locked), and those available for further issuance (unlocked).<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.collateral = async account => {
    return await this.contract.collateral(account);
  };

  /**
   * The current collateralisation ratio for a user. Collateralisation ratio varies over time as the value of the underlying PeriFinance asset changes, e.g. if a user issues their maximum available pynths when they hold $10 worth of PeriFinance, they will have issued $2 worth of pynths. If the value of PeriFinance changes, the ratio returned by this function will adjust accordlingly. Users are incentivised to maintain a collateralisation ratio as close to the issuance ratio as possible by altering the amount of fees they're able to claim from the system.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param _issuer {String<EthAddress>}
   * @returns BigNumber
   **/
  this.collateralisationRatio = async _issuer => {
    return await this.contract.collateralisationRatio(_issuer);
  };

  /**
   * If a user issues pynths backed by PERI in their wallet, the PERI become locked. This function will tell you how many pynths a user has to give back to the system in order to unlock their original debt position. This is priced in whichever pynth is passed in as a currency key, e.g. you can price the debt in pUSD, XDR, or any other pynth you wish.<br>
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
   * Function that allows you to exchange pynths you hold in one flavour for another.<br>
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
   * @param account {String<EthAddress>}
   * @returns Object
   **/
  this.getLock = async account => {
    return await this.contract.getLock(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns Object
   **/
  this.getLockCalculation = async account => {
    return await this.contract.getLockCalculation(account);
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
   * Issuance is only allowed if the periFinance price isn't stale., Issue the maximum amount of Pynths possible against the sender's PERI.<br>
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.issueMaxPynths = async txParams => {
    txParams = txParams || {};
    return await this.contract.issueMaxPynths(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param issueForAddress {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.issueMaxPynthsOnBehalf = async (issueForAddress, txParams) => {
    txParams = txParams || {};
    return await this.contract.issueMaxPynthsOnBehalf(issueForAddress, txParams);
  };

  /**
   * Issuance is only allowed if the periFinance price isn't stale. Amount should be larger than 0., Issue pynths against the sender's PERI.<br>
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.issuePynths = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.issuePynths(amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param issueForAddress {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.issuePynthsOnBehalf = async (issueForAddress, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.issuePynthsOnBehalf(issueForAddress, amount, txParams);
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
   * @param  {String<EthAddress>}
   * @returns Object
   **/
  this.lockStates = async address_1 => {
    return await this.contract.lockStates(address_1);
  };

  /**
   * The maximum pynths an issuer can issue against their total periFinance quantity, priced in XDRs. This ignores any already issued pynths, and is purely giving you the maximimum amount the user can issue.<br>
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
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.mint = async txParams => {
    txParams = txParams || {};
    return await this.contract.mint(txParams);
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
   * The remaining pynths an issuer can issue against their total periFinance balance.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns Object
   **/
  this.remainingIssuablePynths = async account => {
    return await this.contract.remainingIssuablePynths(account);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.resetLock = async (account, txParams) => {
    txParams = txParams || {};
    return await this.contract.resetLock(account, txParams);
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
   * @param _integrationProxy {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setIntegrationProxy = async (_integrationProxy, txParams) => {
    txParams = txParams || {};
    return await this.contract.setIntegrationProxy(_integrationProxy, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param delay {BigNumber}
   * @param iterations {BigNumber}
   * @param totalLockAmount {BigNumber}
   * @param interval {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setLock = async (account, delay, iterations, totalLockAmount, interval, txParams) => {
    txParams = txParams || {};
    return await this.contract.setLock(
      account,
      delay,
      iterations,
      totalLockAmount,
      interval,
      txParams
    );
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
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
   * @returns Object
   **/
  this.settle = async (currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.settle(currencyKey, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param usdcStakeAmount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.stakeUSDCAndIssueMaxPynths = async (usdcStakeAmount, txParams) => {
    txParams = txParams || {};
    return await this.contract.stakeUSDCAndIssueMaxPynths(usdcStakeAmount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param usdcStakeAmount {BigNumber}
   * @param issueAmount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.stakeUSDCAndIssuePynths = async (usdcStakeAmount, issueAmount, txParams) => {
    txParams = txParams || {};
    return await this.contract.stakeUSDCAndIssuePynths(usdcStakeAmount, issueAmount, txParams);
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
   * Total amount of pynths issued by the system, priced in currencyKey.<br>
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
   * ERC20 transfer function.<br>
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
   * ERC20 transferFrom function.<br>
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
   * When issuing, escrowed PERI are locked first, then non-escrowed PERI are locked last, but escrowed PERI are not transferable, so they are not included in this calculation., The number of PERI that are free to be transferred by an account.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.transferablePeriFinance = async account => {
    return await this.contract.transferablePeriFinance(account);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param usdcUnstakeAmount {BigNumber}
   * @param burnAmount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.unstakeUSDCAndBurnPynths = async (usdcUnstakeAmount, burnAmount, txParams) => {
    txParams = txParams || {};
    return await this.contract.unstakeUSDCAndBurnPynths(usdcUnstakeAmount, burnAmount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param burnAmount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.unstakeUSDCToMaxAndBurnPynths = async (burnAmount, txParams) => {
    txParams = txParams || {};
    return await this.contract.unstakeUSDCToMaxAndBurnPynths(burnAmount, txParams);
  };
}

export default PeriFinance;
