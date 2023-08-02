const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    // Acts as a foreign key 
    user:{
        type:mongoose.Schema.Type.ObjectId,
        ref:'user',
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