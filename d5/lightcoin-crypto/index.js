class Account {

  constructor(username) {
    this.username = username;
    this._balance = 40;
    this._transactions = [];
  }

  get transactions() {
    return this._transactions;
  }

  get balance() {
    let total = this._balance;
    for(const transaction of this._transactions){
      total += transaction.value;
    }
    return Math.round(total*100) / 100 
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    if (this.account.balance + this.value > 0) {
      this.time = new Date();
      this.account.addTransaction(this);
    } else {
      console.log('Insufficient Funds');
    }
  }

}

class Deposit extends Transaction {


  get value() {
    return this.amount
  }

}


class Withdrawal extends Transaction {

  get value() {
    return -this.amount
  }

}


// DRIVER CODE BELOW

const newAccount = new Account('Jackson');

console.log('Starting Balance: ', newAccount.balance);

const t1 = new Deposit(333.40, newAccount);
t1.commit();

const t2 = new Withdrawal(33.40, newAccount);
t2.commit();


console.log(newAccount.transactions);