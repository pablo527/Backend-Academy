const express = require('express');
const router = express.Router();

//controladores
const courseController = require('../controllers/courseController');
const testimonialController = require('../controllers/testimonialControllers')

    //obetener los cursos
    router.get('/courses',
        courseController.getCourses
    )

    // agregar nuevo curso
    router.post('/courses',
        courseController.newCourse
    )
    //actualizar un curso
    router.put('/courses/:id',
        courseController.updateCourse
    )
    // obtener un curso por id
    router.get('/courses/:id',
        courseController.getCourse
    )
    // eliminar un curso por id
    router.delete('/courses/:id',
        courseController.deleteCourse
    )

    //Testimoniales
    //obtener testimoniales
    router.get('/testimoniales',
        testimonialController.getTestimonial
    )

    // postear testimonial
    router.post('/testimoniales', 
        testimonialController.postTestimonial
    )

 module.exports = router;