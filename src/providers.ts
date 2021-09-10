export interface IDetectionProviderChecks {
  constructorName?: string,
  propertyWindow?: string,
  propertyEthereum?: string,
}

export interface IDetectionProvider {
  id: string,
  name: string,
  checks: IDetectionProviderChecks
}

const providers : Array<IDetectionProvider> = [
  {
    id: 'exampleprovider',
    name: 'Example Provider',
    checks: {
      // window.ethereum.constructor.toString().indexOf('NameInConstructor')
      constructorName: 'NameInConstructor',
      // window.ExampleProvider
      propertyWindow: 'ExampleProvider',
      // window.ethereum.isExampleProvider
      propertyEthereum: 'isExampleProvider',
    },
  },
  {
    id: 'metamask',
    name: 'Metamask',
    checks: {
      propertyEthereum: 'isMetaMask',
    },
  },
  {
    id: 'trustwallet',
    name: 'Trust Wallet',
    checks: {
      propertyEthereum: 'isTrust',
    },
  },
  {
    id: 'binancewallet',
    name: 'Binance Wallet',
    checks: {
      propertyWindow: 'BinanceChain',
    },
  },
  {
    id: 'coin98',
    name: 'Coin98 Wallet',
    checks: {
      propertyWindow: 'Coin98',
      propertyEthereum: 'isCoin98',
    },
  },
];

export default providers;
