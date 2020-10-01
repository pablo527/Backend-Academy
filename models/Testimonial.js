const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestimonialSchema = new Schema({
    name: {
        type: String ,
        trim: true
    },
    email: {
        type: String ,
        trim: true
    },
    text: {
        type: String ,
        trim: true
    },
    
    
})

module.exports = mongoose.model('Testimonial', TestimonialSchema);