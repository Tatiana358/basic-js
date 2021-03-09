const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arr1 = arr.slice(0);
  if (!arr1 || !(arr1 instanceof Array)) throw new Error('Not implemented');

  arr1.forEach(function(el, i) {
    if(el ==='--discard-next'){
      arr1[i] = '~';
      arr1[i+1] = '~';
    }
    if(el ==='--discard-prev'){
      arr1[i] = '~';
      arr1[i-1]= '~';
    }

    if(el ==='--double-next'){
      if(arr1[i+1] === undefined) {
        arr1[i+1] = '~';
        arr1[i] = '~';
      }
      else arr1[i]= arr1[i+1];
    }
    if(el ==='--double-prev'){
      if(arr1[i-1] === undefined) {
        arr1[i-1] = '~';
        arr1[i] = '~';
      }
      else arr1[i]= arr1[i-1];
    }
  })
  return arr1.filter((el) => el !=='~');
};
