const connectToMongo = require("./db")
const express = require('express');

// Express
connectToMongo();

const app = express();
const port = 3000;
app.use(express.json());

// Available routes
// TODO: Add unique id for users
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})