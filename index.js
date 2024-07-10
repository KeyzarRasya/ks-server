require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const formRouter = require('./src/routes/Form')
const dashboardRouter = require('./src/routes/dashboard');
const {configure} = require('./src/helper/configuration') 

const {BASE_URI, MONGO, PORT} = configure(process.env);

mongoose.connect(MONGO)
.then(res => console.log('Connected to Database'))
.catch(err => console.log(err));

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use('/form', formRouter);
app.use('/dashboard', dashboardRouter);

app.listen(PORT, () => {
    console.log(`Connected to server, ${BASE_URI}`);
})

