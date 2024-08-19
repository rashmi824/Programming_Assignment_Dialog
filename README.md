# Programming_Assignment_Dialog
Design and implement a RESTful API for doing transfers between accounts

Description :  
This is a RESTful money transfer API system from one account to another. The API building is done with Express.js, which provides end-points for the transfer of funds. The transferred accounts are validated first, and then checks if there are enough funds available for transfer. Besides this, it has a set of automated tests written in Jest and Supertest to test whether the API is working as expected.

Features :  
Transfers Accounts: Allows sending money between two accounts.  
Validation: Source and Destination accounts should be valid, also source account has the required balance to make a transfer.  
Error Handling: Implementation of proper error messages of invalid account numbers and insufficient funds.

Installation and Setup :  
1.Clone the repository  
https://github.com/rashmi824/Programming_Assignment_Dialog.git  
cd programming-assignment

2.Install the necessary dependencies  
npm install

3.Start the server  
npm start

4.Run tests  
npm test
