class hdfcBank {
 #Balance;
 constructor(name,Balance) {
    this.name = name;
    this.#Balance = Balance;
    }
 getBalance() {
    return this.#Balance;
    }
 setBalance(Balance,authorized) {
    if(authorized) {
        this.#Balance = Balance;
    }
    else {
        console.log("You are not authorized to change the balance");
    }
}}

let account1 = new hdfcBank("Rajendra",10000);
console.log(account1.name + " has balance: " + account1.getBalance());
account1.setBalance(50000,false);
console.log(account1.name + " has balance: " + account1.getBalance());
account1.setBalance(50000,true);
console.log(account1.name + " has balance: " + account1.getBalance());