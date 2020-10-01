const Testimonial = require('../models/Testimonial');


exports.getTestimonial = async(req,res,next) => {

    try {
        const testimoniales = await Testimonial.find({});
        res.json(testimoniales)
    } catch (error) {
        console.log(error)
        next();
        
    }


}

//funcion para crear testimonial
exports.postTestimonial = async(req,res,next) => {

    const testimonial = new Testimonial(req.body)
    try {
        await testimonial.save();
        res.json({messahe : 'Testimonial incertado '});
        

    } catch (error) {
        console.log(error)
        next();
        
    }
}