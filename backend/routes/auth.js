const express = require('express');
const router = express.Router();
const User = require('../models/User')
const {body, validationResult } = require('express-validator');

// Create a user Using POST "/api/auth"
router.post('/',[], (req, res) => {
    console.log(req.body)
    const user= User(req.body);
   res.send("User created");
   user.save();
});

module.exports = router;
