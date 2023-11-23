const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb+srv://admin:admin23@cluster0.iwsyzhw.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        });

        console.log(`MongoDB Connected: ${connection.connection.host}`);
        
    } catch (error) {
            console.error(`Error connecting to MongoDB: ${error.message}`);
            process.exit(1); // Salir del proceso si hay un error
    }
        };

module.exports = connectDB;