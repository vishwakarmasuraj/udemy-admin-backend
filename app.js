const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const port = process.env.PORT


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());

mongoose.connect(process.env.DB_URL).then(() =>{
    console.log('Successfully connected to database')
})

app.listen(port, () => console.log(`App is listening on port ${port}`))

