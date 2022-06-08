/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];

}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && Math.sign(amount) === 1) {
    var newAccount = new Transaction('deposit', amount);
    this.transactions.push(newAccount);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && Math.sign(amount) === 1) {
    var newAccount = new Transaction('withdrawal', amount);
    this.transactions.push(newAccount);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  } else {
    var sum = 0;
    var difference = 0;
    var total = 0;
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'withdrawal') {
        difference += this.transactions[i].amount;
        total = sum - difference;
      } else if (this.transactions[i].type === 'deposit') {
        sum += this.transactions[i].amount;
        total = sum - difference;
      }
    }
  } return total;

};
