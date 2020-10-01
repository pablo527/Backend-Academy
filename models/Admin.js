const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    user: {
        type: String ,
        trim: true
    },
    password: {
        type: String ,
        trim: true
    },
    email: {
        type: String ,
        trim: true
    },
    
})

module.exports = mongoose.model('Admin', AdminSchema);