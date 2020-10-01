const express = require('express');
const router = express.Router();

const User = require('../models/User');
const passport = require('passport');

    // users prueba de registro
    router.get('/users/signin', (req, res) => {
        res.render('users/signin')
    });
    router.post('/users/signin', passport.authenticate('local',{
        successRedirect : '/courses',
        failureMessage : "error"

    }))
    router.get('/users/signup', (req,res) => {
        res.render('users/signup');
    })
    
    router.post('/users/signup',  async (req,res) => {
        const {name, email,password, confirm_password} = req.body;
        const errors =  [];
        if(name <= 0){
            errors.push({text : 'por favor, incerte  el nombre'})
        }
        if(email <= 0){
            errors.push({text : 'por favor, incerte  el email'})
        }
        if(password <= 0){
            errors.push({text : 'por favor, incerte  la contraseña'})
        }
        if(password != confirm_password){
            errors.push({text : 'las contraseñas no coiciden'})
        }
        if(name.length < 4){
            errors.push({text : 'las contraseña debe de tener almenos 4 caracteres'}) 
        }
        if(errors.length > 0){
            res.render('/users/signup', {errors,name,email,password,confirm_password})
            console.log("Errors...")
        } else {
            const emailUser = await User.findOne({email: email});
            if(emailUser){
                res.send('el email ya existe')
                res.redirect('/users/signup');
            } else{
                const newUser = await new User ({name,email,password});
                newUser.password = await newUser.encryptPassword(password);
                await newUser.save();
                res.send('registrado')
                res.redirect('/users/signin')
            }
        }   
    });
 
module.exports = router;