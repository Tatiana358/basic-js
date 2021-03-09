const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.length ? ([].concat(...matrix).map((el) =>Number(el === '^^'))).reduce((a,b)=>a+b) : 0;
};
