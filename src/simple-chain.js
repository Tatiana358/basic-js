const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length === 0) this.chain.push('');
    else this.chain.push(`${value}`);

    return this;
  },
  removeLink(position) {
    if (position<1 || position > chainMaker.length) {
      this.chain = [];
      throw new Error('error');
    } else {
      this.chain.splice(position-1,1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = '( ' + this.chain.join(' )~~( ') + ' )';

    this.chain = [];
    return res;
  },

  chain: [],
};

module.exports = chainMaker;
