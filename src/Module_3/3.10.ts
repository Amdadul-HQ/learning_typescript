{
    //
      // getter and setter
      class BankAccount {
        readonly id: number;
        public name: string;
        protected _balance: number;
        constructor(id: number, name: string, _balance: number) {
          this.id = id;
          this.name = name;
          this._balance = _balance;
        }
        get balance() {
          return console.log(`Available balance is ${this._balance}`);
        }
        set diposit(amount: number) {
          console.log(
            `Deposited ${amount}, available balance is ${
              this._balance + amount
            }`
          );
        }
        //   addDiposit(amount: number) {
        //     this._balance += amount;
        //     console.log(
        //       `Deposited ${amount}, available balance is ${this._balance}`
        //     );
        //   }
        //   get_Balance() {
        //     console.log(`Available balance is ${this._balance}`);
        //   }
      }

      const goriberAccount = new BankAccount(1, "Goriber", 1000);

      console.log(goriberAccount.balance);
      goriberAccount.diposit = 1000;
    
}