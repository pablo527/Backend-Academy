const Course = require('../models/Course');


//funtion para obtner cursos
exports.getCourses =  async (req,res,next) => {
    try {
        const courses = await Course.find({})
        res.json(courses)
    } catch (error) {
        console.log(error)
        next();
        
    }
  
} 

// funcion para crear nuevo curso
exports.newCourse = async (req, res, next) => {

    const course = new Course(req.body);
    try {
        await course.save();
        res.json({message: 'Curso insertado'})
    } catch (error) {
        console.log(error)
        next();
    }
} 

exports.updateCourse = async (req, res, next) =>{
    try {
        const course = await Course.findByIdAndUpdate({_id : req.params.id}, req.body , {
            next: true
        })
        res.json(course);
        
    } catch (error) {
        console.log(error)
        next()
    }
}

exports.getCourse = async (req,res,next)=> {
    try {
        const course = await Course.findById(req.params.id)
        res.json(course)
    } catch (error) {
        console.log(error)
        next();
    }
}
exports.deleteCourse = async(req,res,next) => {

    try {
        await Course.findByIdAndDelete( {_id:req.params.id })
        res.json({message : 'Curso eliminado correctamente'});
    } catch (error) {
        console.log(error)
        next();
    }
}