//Import the required modules
const express = require('express');
const app = express();
const transferRoutes = require('./routes/transferService');

//Middleware to parse JSON request bodies
app.use(express.json());

//Routes for handling transfer requests
app.use('/api/transfers', transferRoutes);

//Error handling middleware foe unexpected errors
app.use((err, req, res, next) =>{
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//Define the port to listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});

