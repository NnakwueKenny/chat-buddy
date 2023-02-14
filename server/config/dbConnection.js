const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('DB CONNECTED');
    })
    .catch(err => {
        console.log(`DB CONNECTION ERROR`, err)
    });
    // mongoose.set('strictQuery', true);
}

module.exports = connectDB;