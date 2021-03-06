const chai = require('chai');
const cryptoaddress = require('../src/cryptoaddress');

describe('btc', function () {

  describe('detect', function () {

    it('P2PKH address', function () {
      chai.expect(cryptoaddress.detect('1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2')).to.be.equals(cryptoaddress.symbols.btc);
    });

    it('P2SH address', function () {
      chai.expect(cryptoaddress.detect('3P14159f73E4gFr7JterCCQh9QjiTjiZrG')).to.be.equals(cryptoaddress.symbols.btc);
    });

    it('Bech32 address', function () {
      chai.expect(cryptoaddress.detect('bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq')).to.be.equals(cryptoaddress.symbols.btc);
    });

    it('Invalid address', function () {
      chai.expect(cryptoaddress.detect('ThisIsAnInvalidAddress')).to.be.false;
    });

  });

  describe('balance', function () {

    it('P2PKH address (1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2)', async function () {
      let balance = await cryptoaddress.balance('1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2', cryptoaddress.symbols.btc);
      chai.expect(balance).to.be.greaterThan(0);
    });

    it('P2SH address (3P14159f73E4gFr7JterCCQh9QjiTjiZrG)', async function () {
      let balance = await cryptoaddress.balance('3P14159f73E4gFr7JterCCQh9QjiTjiZrG', cryptoaddress.symbols.btc);
      chai.expect(balance).to.be.greaterThan(0);
    });

    it('Bech32 address (bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq)', async function () {
      let balance = await cryptoaddress.balance('bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', cryptoaddress.symbols.btc);
      chai.expect(balance).to.be.greaterThan(0);
    });

    it('BTC address with currency autodetection', async function () {
      let balance = await cryptoaddress.balance('1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2', cryptoaddress.symbols.btc);
      chai.expect(balance).to.be.greaterThan(0);
    });

  });

})

describe('eth', function () {

  describe('detect', function () {

    it('ETH address', function () {
      chai.expect(cryptoaddress.detect('0x32Be343B94f860124dC4fEe278FDCBD38C102D88')).to.be.equals(cryptoaddress.symbols.eth);
    });

    it('Invalid address', function () {
      chai.expect(cryptoaddress.detect('ThisIsAnInvalidAddress')).to.be.false;
    });

  });

  describe('balance', function () {

    it('ETH address (0x32Be343B94f860124dC4fEe278FDCBD38C102D88)', async function () {
      let balance = await cryptoaddress.balance('0x32Be343B94f860124dC4fEe278FDCBD38C102D88', cryptoaddress.symbols.eth);
      chai.expect(balance).to.be.greaterThan(0);
    });

    it('ETH address with currency autodetection', async function () {
      let balance = await cryptoaddress.balance('0x32Be343B94f860124dC4fEe278FDCBD38C102D88', cryptoaddress.symbols.eth);
      chai.expect(balance).to.be.greaterThan(0);
    });

  });

});