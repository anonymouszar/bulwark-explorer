const params = {
  LAST_POW_BLOCK: 500,
  ZEROCOIN_BLOCK_V2_START:1001
};

const avgBlockTime = 40; // 30 seconds

const blocksPerDay = (24 * 60 * 60) / avgBlockTime; // 2160

const blocksPerWeek = blocksPerDay * 7; // 15120

const blocksPerMonth = (blocksPerDay * 365.25) / 12; // 460215

const blocksPerYear = blocksPerDay * 365.25; // 5522580

const mncoins = 15000000.0;

const getMNBlocksPerDay = (mns) => {
  return blocksPerDay / mns;
};

const getMNBlocksPerWeek = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 52);
};

const getMNBlocksPerMonth = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 12);
};

const getMNBlocksPerYear = (mns) => {
  return getMNBlocksPerDay(mns) * 365.25;
};

const getMNSubsidy = (nHeight = 0, nMasternodeCount = 0, nMoneySupply = 0) => {
  const blockValue = getSubsidy(nHeight);
  let ret = 0.0;

  switch (true){
        case (nHeight < 500):     ret = 0; break;
        case (nHeight == 85000): ret = 1000 / 100.0 * 40.0; break;
        case (nHeight > 500): ret = blockValue / 100.0 * 40.0; break;
        default:                 ret = blockValue / 100.0 * 40.0; break;
    }

  return ret;
};

const getSubsidy = (nHeight = 1) => {
  let nSubsidy = 0.0;

   switch (true){
        case (nHeight == 1):       nSubsidy =  20000000000.0; break;
        case (nHeight == 85000):   nSubsidy =  5000000000.0;   break;
        case (nHeight <= 25000):   nSubsidy =  5000;   break;
                         default:  nSubsidy =  1000;   break;
    }

  return nSubsidy;
};

const getROI = (subsidy, mns) => {
  return ((getMNBlocksPerYear(mns) * subsidy) / mncoins) * 100.0;
};

const isAddress = (s) => {
  return typeof(s) === 'string' && s.length === 34;
};

const isBlock = (s) => {
  return !isNaN(s) || (typeof(s) === 'string');
};

const isPoS = (b) => {
  return !!b && b.height > params.LAST_POW_BLOCK; // > 500
};

const isTX = (s) => {
  return typeof(s) === 'string' && s.length === 64;
};

module.exports = {
  avgBlockTime,
  blocksPerDay,
  blocksPerMonth,
  blocksPerWeek,
  blocksPerYear,
  mncoins,
  params,
  getMNBlocksPerDay,
  getMNBlocksPerMonth,
  getMNBlocksPerWeek,
  getMNBlocksPerYear,
  getMNSubsidy,
  getSubsidy,
  getROI,
  isAddress,
  isBlock,
  isPoS,
  isTX
};