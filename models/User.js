const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {type: String,required: true,unique: true,},
    password: {type: String,required: true,minlength: 5,},
    firstname: {type: String,required: true,},
    lastname: {type: String,required: true,},
    role: {type: String,enum: ['user', 'admin', 'post-admin'],default: 'user',},
    createdAt: {type: Date,default: Date.now,},
  }
);
const User = mongoose.model('User', userSchema);

module.exports = User;
