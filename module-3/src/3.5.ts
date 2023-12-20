{
    // 
    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number

        constructor(id: number, name: string, balance: number) {
            this.id = id,
                this.name = name,
                this._balance = balance
        }
        // method
        public getDeposit(amount: number) {
            this._balance = this._balance + amount
        }
        public getBalance() {
            return this._balance
        }
    };

    // child-1
    // class Student extends BankAccount {
    //     test() {
    //         this.
    //     }
    // };

    // instance 
    const goribManusArBankAccount = new BankAccount(10, "Mr.Gorib", 20)
    //  goribManusArBankAccount.balance= 0
    goribManusArBankAccount.getDeposit(30)
    const myBalance = goribManusArBankAccount.getBalance()
    console.log(myBalance)












    // 
}