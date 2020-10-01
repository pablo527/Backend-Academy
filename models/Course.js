const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String ,
        trim: true
    },
    description: {
        type: String ,
        trim: true
    },
    shedule: {
        type: String ,
        trim: true
    },
    teacher: {
        type: String ,
        trim: true
    },
    price: {
        type: Number ,
        trim: true
    },
    
})

module.exports = mongoose.model('Course', CourseSchema);