const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let fullTurns = Math.pow(2, disksNumber) -1;
  let fullSpeed = Math.floor(fullTurns/turnsSpeed*3600);
 return {
   turns:fullTurns,
   seconds: fullSpeed,
  }
};
