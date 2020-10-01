const mongoose = require('mongoose')
const bcrypt = require ('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email :{
        type: String ,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    date : {
        type: Date ,
        default: Date.now
    }
})
UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt (10);
    const hash = bcrypt.hash(password, salt);
    return hash;
}

UserSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password , this.password);
}

module.exports = mongoose.model('Users', UserSchema);