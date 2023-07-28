const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    user:{
        type:String,
        required :true
    },
    title: {
        type: String,
        required: true,
    },
    description:{
        type:String
    },
    tag:{
        type:String,
        default: "General"

    },
    date:{
        type:Date,
        default:Date.now
    },
    // Check if user exists or not


});

module.exports = mongoose.model('notes', NotesSchema);