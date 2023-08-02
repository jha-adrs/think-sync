const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');
const JWT_SECRET = 'CreatedByAadarsh';

async function findByEmail(email) {
    try {
        const user = await User.findOne({ email: email });
        return user ? true : false; // User exists
    } catch (error) {
        return false; // User doesnot exist
    }
}
// ROUTE 1: Create a user Using POST "/api/auth"
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

//ROUTE 2: Authenticate a user No login required api/auth/login
router.post('/login',[
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password too short").isLength({ min: 5 }),
    body('password').custom(async value => {
        var regex = /^[a-zA-Z0-9]+$/;
        var valid = regex.test(value); // test using regular expression
        if (!valid) throw new Error("Invalid password");
    })
],
async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email, password} = req.body; // destructure req.body
    try {
        // Queries the db to get document with email...
        let user = await User.findOne({email});
        // Before checking the password Compare check if user exists!!
        if(!user){
            return res.status(400).json({error:"Incorrect Email-ID or Password"})
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        
        // TODO: Add warning for maximum login attempts
        if(!passwordCompare){
            return res.status(400).json({error:"Incorrect Email-ID or Password"});
        }
        const data = ({
            user:{
                id:user.id,
            }
        })
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({authToken:authToken}) // Sends the authToken on successful login
    } catch(error){
        res.status(500).json({errors:"Internal Server Error", details:{name: error.name,message: error.message, stack: error.stack}});
    }
});

//ROUTE 3: Get all details of user using GET "api/auth/getuser". Login Required
/* Gets the JWT token from user and queries db for all details
We already have sent user.id through the JWT token, 
So, now we  retrace the id from the JWT token using middleware*/
router.post('/getuser', fetchUser,[],
async (req,res)=>{
    try{
        userId = req.user.id;
        const user = await User.findById(userId).select("-password"); // Donot get password
        res.send(user);
    }catch(error){
        console.error(error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
});


module.exports = router;
