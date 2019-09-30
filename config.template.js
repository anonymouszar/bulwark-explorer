/**
 * Global configuration object.
 */
const config = {
  api: {
    host: 'https://explorer.vestxcoin.com',
    port: '3000',
    portWorker: '443',
    prefix: '/api',
    timeout: '5s'
  },
  db: {
    host: '127.0.0.1',
    port: '27017',
    name: 'vestx',
    user: 'vestx',
    pass: 'vestx'
  },
  rpc: {
    host: '127.0.0.1',
    port: '20001',
    user: 'vestx',
    pass: 'vestxxtsev!',
    timeout: 8000, // 8 seconds
  },
  coinDetails: {
    name: 'Vestxcoin',
    shortName: 'VESTX',
    longName: 'Vestxcoin',
    coinNumberFormat: '0,0.0000',
    websiteUrl: 'https://www.vestxcoin.com/'
  },

  ///////////////////////////////
  // API & Social configurations
  ///////////////////////////////
  freegeoip: {
    api: 'https://extreme-ip-lookup.com/json/'
  },
  coingecko: {
    api: 'https://api.coingecko.com/api/v3/coins/',
    ticker: 'vestxcoin/tickers'
  }
};

module.exports = config;