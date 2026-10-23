const crypto = require('crypto');
const nodeCrypto = require('node:crypto');

if (crypto.webcrypto) {
  crypto.getRandomValues = crypto.webcrypto.getRandomValues.bind(crypto.webcrypto);
  nodeCrypto.getRandomValues = crypto.webcrypto.getRandomValues.bind(crypto.webcrypto);
  globalThis.crypto = crypto.webcrypto;
}
