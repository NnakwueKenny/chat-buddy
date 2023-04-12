const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
require('dotenv').config();

// Database connection
const connectDB = require('./config/dbConnection');
connectDB();

const DB = mongoose.connection;
const app = express();

DB.once('open', () => {
    app.set('port', process.env.PORT || 5002);
    app.listen(app.get('port'), function () {
        console.log('Express started on http://localhost:' +
            app.get('port') + '; press Ctrl-C to terminate.');
    });
});

app.use(cors(corsOptions));
// app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// To access public/static files
app.use('/uploads', express.static(__dirname + 'uploads'));
app.use(express.static(__dirname + '/public'));

const allChats = require('./routes/allChats');

app.use('/', allChats);