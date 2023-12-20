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
        // public getDeposit(amount: number) {
        //     this._balance = this._balance + amount
        // }
        set deposit(amount: number){
            this._balance = this._balance + amount
        }
        // public getBalance() {
        //     return this._balance
        // }
        get balance(){
            return this._balance
        }
    };


    // instance 
    const goribManusArBankAccount = new BankAccount(10, "Mr.Gorib", 20)
    // goribManusArBankAccount.getDeposit(30)
     goribManusArBankAccount.deposit= 60

    // const myBalance = goribManusArBankAccount.getBalance()
    const myBalance = goribManusArBankAccount.balance
    console.log(myBalance)












    // 
}