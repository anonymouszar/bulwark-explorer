
import chai from 'chai';
import http from 'chai-http';
import server from '../../server';

const expect = chai.expect;
const should = chai.should();

chai.use(http);

describe('API', () => {
  it('/api/address/:hash', (done) => {
    chai.request(server)
      .get('/api/address/VSrDRSbT4ENYsiy17kJTZJ5Btnq6WVqCfq')
      .end((err, res) => {
        expect(err).to.be.null;
        res.should.have.status(200);
        done();
      });
  });

  it('/api/block/hash/:hash', (done) => {
    chai.request(server)
      .get('/api/block/hash/eb603e16df10ae27bfb917afb3e97f574034642770e9b8aeea56d44c81e96cbe')
      .end((err, res) => {
        expect(err).to.be.null;
        res.should.have.status(200);
        done();
      });
  });

  it('/api/block/height/:height', (done) => {
    chai.request(server)
      .get('/api/block/height/36007')
      .end((err, res) => {
        expect(err).to.be.null;
        res.should.have.status(200);
        done();
      });
  });

  it('/api/coin', (done) => {
    chai.request(server)
      .get('/api/coin')
      .end((err, res) => {
        expect(err).to.be.null;
        res.should.have.status(200);
        if (res.body) {
          res.body.should.be.a('object');
          res.body.blocks.should.be.a('number');
          res.body.btc.should.be.a('number');
          res.body.cap.should.be.a('number');
          res.body.diff.should.be.a('number');
          res.body.mnsOff.should.be.a('number');
          res.body.mnsOn.should.be.a('number');
          res.body.netHash.should.be.a('number');
          res.body.peers.should.be.a('number');
          res.body.status.should.be.a('string');
          res.body.supply.should.be.a('number');
          res.body.usd.should.be.a('number');
        }
        done();
      });
  });

  it('/api/coin/history', (done) => {
    chai.request(server)
      .get('/api/coin/history')
      .end((err, res) => {
        expect(err).to.be.null;
        res.should.have.status(200);
        done();
      });
  });

  it('/api/peer', (done) => {
    chai.request(server)
      .get('/api/peer')
      .end((err, res) => {
        expect(err).to.be.null;
        res.should.have.status(200);
        done();
      });
  });

  it('/api/peer/history', (done) => {
    chai.request(server)
      .get('/api/peer/history')
      .end((err, res) => {
        expect(err).to.be.null;
        res.should.have.status(200);
        done();
      });
  });

  it('/api/tx/latest', (done) => {
    chai.request(server)
      .get('/api/tx/latest')
      .query({ limit: 1 })
      .end((err, res) => {
        expect(err).to.be.null;
        res.should.have.status(200);
        res.body.should.be.a('array');
        if (res.body.length) {
          expect(res.body.length).to.gte(1);
        }
        done();
      });
  });

  it('/api/tx/:hash', (done) => {
    chai.request(server)
      .get('/api/tx/c1659dbd7068fa0afabbc39826583bb84ce0cec6dc0a3339b0ce733ffe1d6266')
      .end((err, res) => {
        expect(err).to.be.null;
        res.should.have.status(200);
        done();
      });
  });
});
