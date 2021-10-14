require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food fire creek noble protect industry light army gesture'; 
let testAccounts = [
"0xa0c4bf0ba8e4f46b4cd67f99f602d950f1f5a8f254dc2ec0adf87e9d0ac9a09e",
"0x49d70703b701bae9449e6e8cc4b17f8b9305d52083a7802e2f8e191808e205da",
"0x096b2a2f0d73d5ce3bd44dd25c938385b95f129413713beba8ec37c5cc4f045a",
"0xdd7bc3dd9e27fc68806eb6dd9f101ff0e8a690a1b62bbaba7c48a2d85e79d5d4",
"0xcf518508a2357d7c54269e76ceab7290311c3c7cf8faaf5415f02cb44ebfeffa",
"0x145b9c3d9cb5af0a0232873a744e80f110511da88f9af570e5b98ed830a6619b",
"0x7b30991fc437386c6644c708f30013dad7ce6721f620615093c940bc1f1c7ea8",
"0x9d9967edb68bb37d7ca8d349f19d2f31c9ea2bff1d3ac6bf50241f0e3ad34eac",
"0x597269dda44bcd9fbcbd4e56b7cd4afaace1353e6ebe81e1976aa9bcced04c50",
"0x8ac97de1c2734f81b2199ca96ea6bec97b79d361a5fe39ab19d0645bc707e4e5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

