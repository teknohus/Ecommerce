const dotenv = require('dotenv')
const mongoose = require('mongoose');


dotenv.config()
const MONGO_URI = process.env.MONGO_URI;


const connectDatabase = () => {
    mongoose.set('strictQuery', false);
// console.log(MONGO_URI)
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        })
        .catch((error) => {
            console.log(`Mongoose Is Not Connected`);
        })
}

module.exports = connectDatabase;