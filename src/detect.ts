import providers from './providers';

declare global {
  interface Window {
    ethereum?: any;
  }
}

/**
 * Returns a list of all currently injected providers
 *
 * @return {Array<string>} list of provider ids
 */
export function getEthereumProviderIds() : Array<string> {
  const result = [];
  for (let i = 0; i < providers.length; i++) {
    const providerId = providers[i]['id'];

    const check = providers[i]['checks']['propertyWindow'];
    if (check) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (window[check] != undefined) {
        result.push(providerId);
        continue;
      }
    }

    const {ethereum} = window;
    if (ethereum) {
      const check = providers[i]['checks']['propertyEthereum'];
      if (check && ethereum[check]) {
        result.push(providerId);
        continue;
      }
    }
  }
  return result;
}

/**
 * Returns a map of ids and names for currently injected providers
 *
 * @return {Map<string, string>} list of provider ids
 */
export function getEthereumProviderNames() : Map<string, string> {
  const result = new Map<string, string>();
  const currentIds = getEthereumProviderIds();
  for (let i = 0; i < providers.length; i++) {
    const providerId : string = providers[i]['id'];
    const providerName : string = providers[i]['name'];
    if (currentIds.includes(providerId)) {
      result.set(providerId, providerName);
    }
  }
  return result;
}
