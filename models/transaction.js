//Define the Transaction class
class Transaction{
    constructor(sourceAccountNumber, destinationAccountNumber, amount) {
        this.sourceAccountNumber = sourceAccountNumber;
        this.destinationAccountNumber = destinationAccountNumber;
        this.amount = amount;
    }

}

//Initialize the empty array to store transactions
const transactions = [];

module.exports = { transactions, Transaction};



