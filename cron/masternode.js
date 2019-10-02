
// require('babel-polyfill');
require('../lib/cron');
const config = require('../config');
const { exit, rpc } = require('../lib/cron');
const fetch = require('../lib/fetch');
const { forEach } = require('p-iteration');
const locker = require('../lib/locker');
const moment = require('moment');
// Models.
const Masternode = require('../model/masternode');

/**
 * Get a list of the mns and request IP information
 * from freegeopip.net.
 */
async function syncMasternode() {
  const date = moment().utc().startOf('minute').toDate();

  await Masternode.deleteMany({});

  // Increase the timeout for masternode.
  rpc.timeout(10000); // 10 secs

  const mnsJSON = await rpc.call('masternodelist',['full']);
  
  var mns = []

  var keys = Object.keys(mnsJSON);
    keys.forEach(function(key){
        var mndetail = mnsJSON[key];

        var separators = [' ', '\\\+', '-', '\\\(', '\\\)', '\\*', '/', ':', '\\\?'];
        var txarr = key.split(new RegExp(separators.join('|'), 'g'));
        var mndetailarr = mndetail.trim().split(' '); 
        var mnfilterarr = mndetailarr.filter(function (el) {
            return el != "";
        });
        
        var mn = {
            active: mnfilterarr[4],
            addr: mnfilterarr[2],
            createdAt: date,
            lastAt: new Date(mnfilterarr[3] * 1000),
            lastPaidAt: new Date(mnfilterarr[5] * 1000),
            network: mnfilterarr[7],
            lastBlockPaid: mnfilterarr[6],
            status: mnfilterarr[0],
            txHash: txarr[1],
            txOutIdx: txarr[2],
            ver: mnfilterarr[1]
        }
        mns.push(mn);
    });
  
  
  const inserts = [];
  await forEach(mns, async (mn) => {
    console.log('build mns');

    const masternode = new Masternode({
      active: mn.active,
      addr: mn.addr,
      createdAt: date,
      lastAt: mn.lastAt,
      lastPaidAt: mn.lastPaidAt,
      network: mn.network,
      lastBlockPaid: mn.lastBlockPaid,
      status: mn.status,
      txHash: mn.txHash,
      txOutIdx: mn.txOutIdx,
      ver: mn.ver
    });

    inserts.push(masternode);
  });

  if (inserts.length) {
    await Masternode.insertMany(inserts);
  }
}

/**
 * Handle locking.
 */
async function update() {
  const type = 'masternode';
  let code = 0;

  try {
    locker.lock(type);
    await syncMasternode();
  } catch(err) {
    console.log(err);
    code = 1;
  } finally {
    try {
      locker.unlock(type);
    } catch(err) {
      console.log(err);
      code = 1;
    }
    exit(code);
  }
}

update();
