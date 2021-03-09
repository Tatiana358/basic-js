const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const s1 = str;
  const r1 = options.repeatTimes;
  const sp1 = options.separator;
  const s2 = options.addition;
  const r2 = options.additionRepeatTimes
  const sp2 = options.additionSeparator;

  let str1 = s1 === null || s1 === Boolean(s1)? `${s1}`: s1;
  let rep1 = r1 === null || r1 === Boolean(r1)? '~':  r1? r1 : 1;
  let sep1 = sp1 === null || sp1 === Boolean(sp1)? '~': sp1? sp1 : '+';

  let str2 = s2 === null || s2 === Boolean(s2)? `${s2}`: s2 ? s2: '';
  let rep2 = r2 === null || r2 === Boolean(r2)? '~': r2? r2 : 1;
  let sep2 = sp2 === null || sp2 === Boolean(sp2)? '~': sp2? sp2 : '|';
  let sepLength1 = sep1.length;
  let sepLength2 = sep2.length;

  let bothStr = str1+(
    str2&&sep2&&str1&&sep1&&((rep1!==1&&rep2!==1) || (rep1!=='~'&&rep2!=='~'))? (str2+sep2).repeat(rep2).slice(0,-(sepLength2))+sep1:
      rep1===1&&rep2===1 || (rep1==='~'&&rep2==='~')? str2:
        str2&&sep2? (rep2!==1||rep2!=='~'? str2+sep2: str2+sep1).repeat(rep2):
          str2&&!sep2? (str2).repeat(rep2)+sep1 :
            sep1
  );

  let bothRepeatStr = sep1&&sep2 && str1 !== ''&&str2 !== '' && (rep1 !== 1&& sep2!== 1|| (rep1!=='~'&&rep2!=='~')) ?
    bothStr.repeat(rep1).slice(0,-(sepLength1)):
    !sep1 ? bothStr.repeat(rep1).slice(0,-1) :
      (rep1 === 1 && rep2 === 1 || (rep1==='~'&&rep2==='~'))&& str2? bothStr.repeat(rep1):
        rep1 === 1 || rep1 ==='~' || (rep1 === 'none' || rep2 === 'none')? bothStr.repeat(rep1):
          (rep1 === 1 && rep2 === 1 || (rep1==='~'&&rep2==='~'))? bothStr.repeat(rep1).slice(0,-(sepLength2)):
            bothStr.repeat(rep1).slice(0,-(sepLength1));
  return bothRepeatStr;
};
