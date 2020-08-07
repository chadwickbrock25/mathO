const express = require('express');
const mathO = express.Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

mathO.get('/', (req, res) =>  {
    res.send('Second step')
});