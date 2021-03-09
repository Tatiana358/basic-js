const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const MODERN_ACTIVITY= 15;
  const HALF_LIFE_PERIOD= 5730;

  const activity = typeof(sampleActivity) === 'string' ? Number(sampleActivity): -1;

  let result = activity <= 0 || activity > 100 || isNaN(activity) ? false :
    (activity ^ 0) === activity ? (Math.floor((Math.log(MODERN_ACTIVITY/activity))/(0.693/HALF_LIFE_PERIOD))+1) :
      Math.floor((Math.log(MODERN_ACTIVITY/activity)/(0.693/HALF_LIFE_PERIOD)))+1;

  result = result >= 0 ? result : false;
  return result;
};
