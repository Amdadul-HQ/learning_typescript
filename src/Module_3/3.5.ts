{
    // Access Modifiers

    class BankAccount{
        readonly id: number;
        public name: string;
        protected _balance: number;
        private password: number;
        constructor(id: number, name: string, _balance: number){
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        addDiposit(amount: number){
            this._balance += amount;
            console.log(`Deposited ${amount}, available balance is ${this._balance}`);
        }
        get_Balance(){
            console.log(`Available balance is ${this._balance}`);
        }
    }

    class StudentAccount extends BankAccount{
        
        test() {
            this._balance = 100
        }
    }


    const goriberAccount = new BankAccount(1, "Goriber", 1000);
    goriberAccount.addDiposit(500);
    goriberAccount.getBalance();


}