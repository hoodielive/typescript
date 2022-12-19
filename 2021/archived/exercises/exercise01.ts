let bankaccount = { 
  money: 2000, 
  deposit(value) {
    this.money += value;  
  }
}; 

let myself = {
  name: "Larry", 
  bankAccount: bankAccount,
  hobbies: ["reading", "coding"]
};

myself.bankAccount.deposit(9000);

console.log(myself); 
