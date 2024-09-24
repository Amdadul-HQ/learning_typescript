{
    // Access Modifiers

    class BankAccount{
        readonly id: number;
        name: string;
        balance: number;
        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
    }
    const goriberAccount = new BankAccount(1, "Goriber", 1000);
    // goriberAccount.name = "rimon";

}