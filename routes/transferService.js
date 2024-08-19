const express = require('express');
const router = express.Router();
const{ accounts } = require('../models/account');
const{ transactions, Transaction } = require('../models/transaction');

const findAccount =(number)=> accounts.find(acc => acc.number === number);

router.post('/', (req, res) => {
    const{ sourceAccountNumber, destinationAccountNumber, amount } = req.body;

    //Find source and destination accounts
    const sourceAccount =findAccount(sourceAccountNumber);
    const destinationAccount = findAccount(destinationAccountNumber);

    //Validate account numbers
    if (!sourceAccount || !destinationAccount) {
        return res.status(400).send({message:'Invalid account number'});
    }

    //Validate if source account has sufficient funds
    if (sourceAccount.balance < amount) {
        return res.status(400).send({message:'Insufficient funds'});
    }

    //Updating account balances
    sourceAccount.balance -= amount;
    destinationAccount.balance += amount;

    //Create a new transaction and store it
    const transaction = new Transaction(sourceAccountNumber, destinationAccountNumber, amount);
    transactions.push(transaction);

    //Respond with success and transaction details
    res.status(200).json({ message:'Transfer Successful', transaction });
});

module.exports = router;