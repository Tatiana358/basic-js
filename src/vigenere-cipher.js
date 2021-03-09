const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(state = true) {
    this.state = state;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  decrypt(encryptedMessage, key) { // раскодировние
    // if(!encryptedMessage && !key) throw new CustomError('Not implemented');
    let alpStr =  this.alphabet;
    let alp = alpStr.split("");

    const codedData= encryptedMessage;
    const keyData = key.toUpperCase();

    let repeatedKeyStr = '';

    let codedStr = [];
    let arr_sortedAlps = [];

    let indexChar_KeyData  = 0;
    let indexChar_CodedStr  = 0;

    let resultArrStr=[];
    let res= [];

    for (let char in codedData) {
      if (codedData[char].match(/[A-Za-z]+/g)) {

        codedStr.push(codedData[char]);
        repeatedKeyStr += keyData[indexChar_KeyData];

        ++indexChar_KeyData;
        if(indexChar_KeyData >= keyData.length) indexChar_KeyData = 0;
      }
    }

    for (let char in repeatedKeyStr) {
      if (repeatedKeyStr[char].match(/[A-Za-z]+/g)) {
        let cutIndex = alp.indexOf(repeatedKeyStr[char]);

        arr_sortedAlps = alp.slice(cutIndex,).concat(alp.slice(0, cutIndex))
        resultArrStr.push(alp[arr_sortedAlps.indexOf(codedStr[indexChar_CodedStr].toUpperCase())])

        ++indexChar_CodedStr;
      }
    }

    let mainStr = codedData.split('');
    mainStr.forEach((char_codedStr, index) => {
      if(char_codedStr.match(/[A-Za-z]+/g) && !alp.includes(char_codedStr)) {
        resultArrStr.splice(index, 1, resultArrStr[index].toLowerCase());
      }
      if (!(char_codedStr.match(/[A-Za-z]+/g))) {
        resultArrStr.splice(index, 0, char_codedStr);
      }
    })

    res = resultArrStr.join('')
    return this.state ?  res : res.split('').reverse().join('').toUpperCase();
    }

  encrypt(message, key) {// закодировние
    //t + l = e)
    // if(!message && !key) throw new CustomError('Not implemented');
    let alpStr =  this.alphabet;
    let alp = alpStr.split("");

    const nonCodedData= message;
    const keyData = key.toUpperCase();
    let repeatedKeyStr = '';

    let nonCodedStr = [];
    let arr_sortedAlps = [];

    let indexChar_KeyData = 0;
    let indexChar_nonCodedStr = 0;

    let resultArrStr=[];
    let res = '';

    for (let char in nonCodedData) {
      if (nonCodedData[char].match(/[A-Za-z]+/g)) {
        nonCodedStr.push(nonCodedData[char]);
        repeatedKeyStr += keyData[indexChar_KeyData];

        ++indexChar_KeyData;
        if(indexChar_KeyData >= keyData.length) indexChar_KeyData = 0;
      }
    }

    for (let char in repeatedKeyStr) {
      if (repeatedKeyStr[char].match(/[A-Za-z]+/g)) {
        let cutIndex = alp.indexOf(repeatedKeyStr[char]);

        arr_sortedAlps = alp.slice(cutIndex,).concat(alp.slice(0, cutIndex))

        resultArrStr.push(arr_sortedAlps[alp.indexOf(nonCodedStr[indexChar_nonCodedStr].toUpperCase())]);
        ++indexChar_nonCodedStr;
      }
    }

    let mainStr = nonCodedData.split('');
    mainStr.forEach((char_nonCodedStr, index) => {
      if (!(char_nonCodedStr.match(/[A-Za-z]+/g))) resultArrStr.splice(index, 0, char_nonCodedStr);
    })
    res = resultArrStr.join('');
    return this.state ?  res : res.split('').reverse().join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
