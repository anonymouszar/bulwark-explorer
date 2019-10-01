
/**
 * Global configuration object.
 */
const config = {
  'api': {
    'host': 'http://127.0.0.1',
    'port': '8087',
    'prefix': '/api',
    'timeout': '30s'
  },
  'coingecko': {
    'api': 'https://api.coingecko.com/api/v3/coins/',
    'ticker': 'vestxcoin'
  },
  'db': {
    'host': '127.0.0.1',
    'port': '27017',
    'name': 'vestx',
    'user': 'vestx',
    'pass': 'vestx'
  },
  'freegeoip': {
    'api': 'https://extreme-ip-lookup.com/json/'
  },
  'rpc': {
    'host': '127.0.0.1',
    'port': '20001',
    'user': 'test',
    'pass': 'test',
    'timeout': 10000, // 10 seconds
  }
};

module.exports = config;
