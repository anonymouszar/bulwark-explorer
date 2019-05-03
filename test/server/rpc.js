
import chai from 'chai';
import RPC from '../../lib/rpc';

const expect = chai.expect;
const rpc = new RPC();
const should = chai.should();

describe('RPC', () => {
  it('getinfo', (done) => {
    rpc.call('getinfo')
      .then((res) => {
        res.version.should.be.a('number');
        res.protocolversion.should.be.a('number');
        res.walletversion.should.be.a('number');
        res.blocks.should.be.a('number');
        res.difficulty.should.be.a('number');
        done();
      });
  });

  it('getnetworkhashps', (done) => {
    rpc.call('getnetworkhashps')
      .then((res) => {
        res.should.be.a('number');
        done();
      });
  });

  it('getblockhash', (done) => {
    rpc.call('getblockhash', [1])
      .then((res) => {
        res.should.be.a('string');
        res.should.eq('0000b6ed9b63b9493d29464cd3d34693c5ba7bf1ee749027785bfc716f748368');
        done();
      });
  });

  it('getblock', (done) => {
    rpc.call('getblock', ['0000b6ed9b63b9493d29464cd3d34693c5ba7bf1ee749027785bfc716f748368'])
      .then((res) => {
        res.hash.should.be.a('string');
        res.confirmations.should.be.a('number');
        res.version.should.be.a('number');
        res.merkleroot.should.be.a('string');
        res.tx.should.be.a('array');
        res.time.should.be.a('number');
        res.nonce.should.be.a('number');
        res.bits.should.be.a('string');
        res.difficulty.should.be.a('number');
        res.chainwork.should.be.a('string');
        done();
      });
  });

  it('getrawtransaction', (done) => {
    rpc.call('getrawtransaction', ['97e796105f93e694efe4f0b30748918ac1c6d1716d2344cd66b5c96eb4e342c2'])
      .then((res) => {
        res.should.be.a('string');
        res.should.eq('01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff03510101ffffffff0100f8a92e8a2c000023210240b7da431af18442e8d2dab9f68be934c955f1a218a7b6bb1e4f6cddabe25a74ac00000000');
        done();
      });
  });

  it('getpeerinfo', (done) => {
    rpc.call('getpeerinfo')
      .then((res) => {
        res.should.be.a('array');
        done();
      });
  });

  it('getmasternodecount', (done) => {
    rpc.call('getmasternodecount')
      .then((res) => {
        res.should.be.a('object');
        res.total.should.be.a('number');
        res.stable.should.be.a('number');
        res.enabled.should.be.a('number');
        res.ipv4.should.be.a('number');
        res.ipv6.should.be.a('number');
        res.onion.should.be.a('number');
        done();
      });
  });

  it('masternode list', (done) => {
    rpc.call('masternode', ['list'])
      .then((res) => {
        res.should.be.a('array');
        done();
      });
  });
});
