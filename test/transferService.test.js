const request = require('supertest');
const express = require('express');
const app = express();
const{ accounts } = require('../models/account');
const transferService = require('../routes/transferService');


app.use(express.json());
app.use('/api/transfers', transferService);

describe('Transfer API', () => {
    beforeEach(() => {
        accounts.length = 0;
        accounts.push({ number: '01234567', balance:25000 });
        accounts.push({ number: '03456789', balance:15000 });
    });

    //Test for successful transfer
    test('Should successfully transfer funds between accounts', async () => {
        const response = await request(app)
        .post('/api/transfers')
        .send({
            sourceAccountNumber:"01234567",
            destinationAccountNumber:"03456789",
            amount:100
        });

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Transfer Successful');

        expect(response.body.transaction).toMatchObject({
            sourceAccountNumber:"01234567",
            destinationAccountNumber:"03456789",
            amount:100
        });

        expect(accounts.find(acc => acc.number === '01234567').balance).toBe(24900);
        expect(accounts.find(acc => acc.number === '03456789').balance).toBe(15100);

    });

    //Test for handling invalid account numbers
    test('should return error for invalid account number', async () =>{
        const response = await request(app)
              .post('/api/transfers')
              .send({
                sourceAccountNumber:"0123456",
                destinationAccountNumber:"03456789",
                amount:100
        });


              expect(response.statusCode).toBe(400);
              expect(response.body.message).toBe('Invalid account number');
    });

    //Test for handling insuffient funds
    test('should return error for insufficient funds', async () =>{
        const response = await request(app)
              .post('/api/transfers')
              .send({
                sourceAccountNumber:"01234567",
                destinationAccountNumber:"03456789",
                amount:10000000
        });


              expect(response.statusCode).toBe(400);
              expect(response.body.message).toBe('Insufficient funds');
    });



})
