const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let isCharFound = false;
  let arr = [];

  if(!(Array.isArray(members))) return false;
  else {
    members.sort().forEach((name) => {
      if(typeof(name) !== 'string') isCharFound = true;
      for (let char in name) {
        if (/([A-Za-z])/g.test(name[char]) && !isCharFound) {
          arr.push(name[char].toUpperCase());
          isCharFound = true;
        }
      }
      isCharFound = false;
    })
    arr =  arr.join('').split('').sort().join('');
    return arr;
  }
};
