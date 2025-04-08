const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema(
    {
        author: {type: String, require:true,},
        userName: {type: String, require:true,},
        title:{type:String, require:true,},
        thema: {type: String, require:true,},
        description: {type: String,},
        dateOfCreate: {type:Date,default:DataTransfer.now,}
    }
);
const UserCard = mongoose.model('UserCard', cardSchema);

module.exports = UserCard;