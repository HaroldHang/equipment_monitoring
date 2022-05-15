
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
if (process.env.NODE_ENV == "development") {
    app.use(morgan('dev'))
}
//connectDB()
app.set('view engine', 'ejs')
/*app.get('/', (req, res) => {
    res.render('index')
})*/

app.use('/', require('./routes/index'))

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Server now runnig in ${process.env.NODE_ENV} on ${port}`)
})