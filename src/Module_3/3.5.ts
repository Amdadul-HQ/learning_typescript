{
    // Access Modifiers

    class BankAccount{
        readonly id: number;
        public name: string;
        private balance: number;
        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        addDiposit(amount: number){
            this.balance += amount;
            console.log(`Deposited ${amount}, available balance is ${this.balance}`);
        }
    }
    const goriberAccount = new BankAccount(1, "Goriber", 1000);
    goriberAccount.addDiposit(500);


}