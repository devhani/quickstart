const TruffleConfig = require('./truffle.js');

module.exports = {
  app: {
    id: '365c9c6a-5602-4bc6-942c-7084beada709' //change this to your app's client id
  },
  appWallet: {
    client: {
      //if you have an app wallet, add your client id and secret here
      id: 'YOUR-APP-WALLET-ID',
      secret: 'YOUR-APP-WALLET-SECRET'
    },
    auth: {
      tokenHost: 'https://account.bitski.com',
      tokenPath: '/oauth2/token'
    }
  },
  environments: {
    development: {
      network: 'development', //ethereum network to use for local dev
      redirectURL: 'http://localhost:3000/callback.html' //url the popup will redirect to when logged in
    },
    production: {
      network: 'kovan', //ethereum network to use for production
      redirectURL: 'https://gentle-oasis-36396.herokuapp.com/callback.html' //url the popup will redirect to when logged in
    }
  },
  networkIds: {
    kovan: 'kovan',
    rinkeby: 'rinkeby',
    live: 'mainnet',
    development: `http://${TruffleConfig.networks.development.host}:${TruffleConfig.networks.development.port}`
  }
};