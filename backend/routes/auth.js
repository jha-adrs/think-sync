const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'HelloThere';

async function findByEmail(email) {
    try {
        const user = await User.findOne({ email: email });
        return user ? true : false; // User exists
    } catch (error) {
        return false; // User doesnot exist
    }
}
// Create a user Using POST "/api/auth"
router.post('/createuser', [
    body('name', "Enter a longer name").isLength({ min: 3 }),
    body('email', "Invalid email").isEmail(),
    body('email').custom(async value => {
        try {
            const existingUser = await findByEmail(value);
            if (existingUser) {
                throw new Error('A user with the same e-mail already exists');

            }
            return true;
        } catch (error) { throw error; }
    }),
    body('password', "Password too short, atleast 5 chars").isLength({ min: 5 }),
    body('password').custom(async value => {
        var regex = /^[a-zA-Z0-9]+$/;
        var valid = regex.test(value); // test using regular expression
        if (!valid) throw new Error("Must contain Alphanumeric characters only");
    })


], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Create the salt
    // Use await  
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
        name: req.body.name,
        password: secPass,
        email:req.body.email
    });
    const data = {
        user:{
            id: user.id,
        }
    };
    const authToken = jwt.sign(data, JWT_SECRET);
    res.json({authToken: authToken});
});

module.exports = router;
