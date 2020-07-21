import mongoose from 'mongoose';

export const mongooseConnection = (URI: any) => {    
    mongoose.Promise = global.Promise;
    mongoose.connection.openUri(URI,{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => {
        console.log(`Connected to db: ${URI} successfully via MONGOOSE`);
    }).catch(err => {
        console.log(`MongoDB connection error. Please make sure MongoDB is running. Error: ${err}`);
        process.exit(1);
    });
};