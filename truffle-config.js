require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind evil hunt local fox twelve'; 
let testAccounts = [
"0x0b7d80a4552fd933038425b8a33189e1d391a21ae9812c88500473408a21d106",
"0x98e5c9c1b74e88124a773ea1b8f629232e03f45b515ccc452fffb83aa28c178b",
"0x8cc4d4e53a7b6db051bd8966bec5c0f853555428b990ae74dba6439d656c44bf",
"0x09c1d68fde2bd3b744a264d88db2e589e58660494f751df14c9c2567ced72d93",
"0x4b9b6f68b5fa7236afc58d803e9b1acf09905c9e054ac23cc4173f4db9a418c6",
"0x6a67e0bac44614ef1342ddff051ff593aa26ee1db51e8346c0cb1dd9026b161b",
"0xf5990b69028ae2c2e71309e839dc0987a38fd7c5ea829d8295e9a5f2357b2b6b",
"0x1061a6926ffda4fe562807b54e89e8d3a7101ef9e701b50c947c282a17df7b95",
"0x139976194f4e72ebd3715abd7772c88dbc3c830dbab2b34c3f1371d681f434ae",
"0xc82a6bd0a23934d697bac1acbcfb481b73fb9f5b129c6aaac2fbc89a5a2c0552"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
