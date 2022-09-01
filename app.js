
const express = require('express');
const dotenv = require ('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const morgan = require('morgan');
dotenv.config({
    path : './config/config.env'
})
const port = process.env.PORT || 5000
const app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json())
if (process.env.NODE_ENV == "development") {
    app.use(morgan('dev'))
}

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });


connectDB();
//app.set('view engine', 'ejs')
/*app.get('/', (req, res) => {
    res.render('index')
})*/

//app.use('/', require('./routes/index'))
app.use('/equipments', require('./routes/equip'))
app.use('/technicians', require('./routes/technic'))
app.use('/corrective', require('./routes/correctiv'))
app.use('/preventive', require('./routes/prevent'))

//app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Server now runnig in ${process.env.NODE_ENV} on ${port}`)
})