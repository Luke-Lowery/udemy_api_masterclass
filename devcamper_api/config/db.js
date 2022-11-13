const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        //userNewUrlParser: true,
        //useCreateIndex: true,
        //useFindAndModify: false,
        //options are deprecated, from old version of tutorial
        useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);

}

module.exports = connectDB;