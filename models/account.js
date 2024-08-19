//Define the Account class 
class Account {
    constructor(number,balance){
        this.number = number;
        this.balance = balance;
    }
}

//Hardcoded values for demonstration
const accounts = [
    new Account('01234567',25000),
    new Account('03456789',15000)
];

module.exports = { accounts, Account };