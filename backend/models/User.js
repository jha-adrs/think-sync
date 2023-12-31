const mongoose= require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {type:String, required: true},
    email: {type:String, required: true, unique: true},
    // Unique emailensures that no two users can have the same email address
    password: {type:String, required: true},
    date: {type: Date, default: Date.now}
    
});

const User = mongoose.model('Users',UserSchema);
module.exports = User;
