const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

async function findByEmail(email) {
    try {
        const user = await User.findOne({ email: email });
        return user ? true : false; // User exists
    } catch (error) {
        return false; // User doesnot exist
    }
}
// Create a user Using POST "/api/auth"
router.post('/', [
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


], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
    }).then(user => res.status(200).json({ status: "user created", user: user }))
        .catch(err => console.log(err));
    // headers already sent res.send(req.body);
});

module.exports = router;
