const {
  describe, it,
} = require('mocha');
const {assert} = require('chai');
const sinon = require('sinon');
const {
  getEthereumProviderIds, getEthereumProviderNames,
} = require('../dist/detect');

const mockWindowObject = (toBeWindow, toBeEthereum) => {
  console.error = sinon.fake();
  if (toBeWindow) {
    global.window = toBeWindow;
  } else {
    global.window = {};
  }
  if (toBeEthereum) {
    global.window.ethereum = toBeEthereum;
  } else {
    delete global.window.ethereum;
  }
};


/* Window Objects */
const windowWithoutExtraProviders = {};
const windowWithTwoExtraProviders = {
  Coin98: {},
  BinanceChain: {},
};

/* Possible provider identifiers */
const providerWithMetaMask = {
  isMetaMask: true,
};

describe('getEthereumProviderIds: window object without ethereum', function() {
  mockWindowObject(windowWithoutExtraProviders);
  const providers = getEthereumProviderIds();

  it('should be array', function() {
    assert.isArray(providers);
  });

  it('should be empty', function() {
    assert.isEmpty(providers);
  });
});

describe('getEthereumProviderIds: window object with MetaMask', function() {
  mockWindowObject(windowWithoutExtraProviders, providerWithMetaMask);
  const providers = getEthereumProviderIds();

  it('should be array', function() {
    assert.isArray(providers);
  });

  it('should not be empty', function() {
    assert.isNotEmpty(providers);
  });

  it('should return single provider id', function() {
    assert.isTrue(providers.length === 1);
  });
});

describe('getEthereumProviderIds: window with three providers', function() {
  mockWindowObject(windowWithTwoExtraProviders, providerWithMetaMask);
  const providers = getEthereumProviderIds();

  it('should be array', function() {
    assert.isArray(providers);
  });

  it('should not be empty', function() {
    assert.isNotEmpty(providers);
  });

  it('should return three provider ids', function() {
    assert.isTrue(providers.length === 3);
  });
});