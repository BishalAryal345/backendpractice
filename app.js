const express = require('express');
const mongoose = require('mongoose'); //third party
const bodyParser = require('body-parser') //core module

const db = require('./database/db')
const register_route = require('./routes/register_route');
const login_route = require('./routes/login_route');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(register_route);
app.use(login_route);

app.listen(91);