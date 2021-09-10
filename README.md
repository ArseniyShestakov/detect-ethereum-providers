# detect-ethereum-providers

Micro library for detecting all injected Ethereum providers.

This library has no dependencies.

[![npm version](https://badge.fury.io/js/detect-ethereum-providers.svg)](https://www.npmjs.com/package/detect-ethereum-providers)

## Usage

This library can be added to your project using NPM

```bash
npm install --save detect-ethereum-providers
```

### Browser

```html
<script src="https://unpkg.com/detect-ethereum-providers/dist/detect-ethereum-providers.min.js"></script>
<script type="text/javascript">
  const providers = getEthereumProviderIds();

  if (providers.length) {
    // handle providers
  } else {
    // no providers found
  }
</script>
```