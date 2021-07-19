export class BankAccount {
  balance;
  accountOpen;

  constructor() {
    this.balance = 0;
    this.accountOpen = false;
  }

  open() {
    if (this.accountOpen) { throw new ValueError("Cannot open account that is already open."); }
    else {
      this.balance = 0;
      this.accountOpen = true;
    }
  }

  close() {
    if (this.accountOpen) { 
      this.accountOpen = false; 
      this.balance = -1;
    }
    else { throw new ValueError("Cannot close account that is already closed."); }
  }

  deposit(deposit) {
    if (this.accountOpen) {
      if (deposit > 0) { this.balance += deposit; }
      else { throw new ValueError("Cannot deposit a negative amount.") }
    }
    else { throw new ValueError("Cannot deposit into a closed account."); } 
  }

  withdraw(amount) {
    if (this.accountOpen) {
      if (amount > 0 && amount <= this.balance) { this.balance -= amount; }
      else if (amount < 0) { throw new ValueError("Cannot withdraw an negative amount.");}
      else if (amount > this.balance ) { throw new ValueError("Cannot withdraw more than balance."); }
    }
    else { throw new ValueError("Cannot deposit into a closed account."); } 
  }

  get balance() {
    if (this.accountOpen) { return this.balance; }
    else { throw new ValueError("Cannot check balance of closed account."); }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}