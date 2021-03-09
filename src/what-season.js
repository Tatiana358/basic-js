const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!arguments.length)  return 'Unable to determine the time of year!';
  if(!(date instanceof Date && date.getUTCFullYear())) throw new Error('Error');

  let season;

  const year = date.getFullYear(); //2019
  const month = date.getMonth(); // 10
  const day = date.getDate(); // 11
  const hours = date.getHours(); // 10
  const minutes = date.getMinutes(); // 0
  const seconds = date.getSeconds(); // 0
  const mSeconds = date.getMilliseconds(); // 0

  if([11,0,1].includes(month)) season = 'winter';
  if([2,3,4].includes(month)) season = 'spring';
  if([5,6,7].includes(month)) season = 'summer';
  if([8,9,10].includes(month)) season = 'autumn';

  return season;
};
