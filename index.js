const express= require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const flash = require('flash');



//creamos servidor
const app = express();
require('./config/passport');

//habilitar cors
app.use(cors());

// conexion a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Academy', {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useFindAndModify : false
})

//habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Middelwares
app.use(express.urlencoded({ extended:false }));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Global variables
app.use((req,res,next)=> {
    res.locals.succes_msg = req.flash('succes_msg');

    res.locals.error = req.flash('error');
    next();
})

//acedemos a las rutas
app.use(require('./routes/index'));
app.use(require('./routes/user'))







// le asignamos puerto 
app.listen(4000, ()=> {
    console.log('Servidor funcionando')
})
