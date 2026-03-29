import dotenv from 'dotenv';
import AppError from '../utils/appError.js';
dotenv.config();
// This code imports the dotenv package and calls the config() method to load environment variables from a .env file into process.env. 
// This allows you to access the environment variables defined in the .env file throughout your application using process.env.VARIABLE_NAME.
if (!process.env.PORT) {
    // console.error("Error: PORT environment variable is not defined.");
    throw new AppError("PORT environment variable is not defined.");
    process.exit(1); // Exit the process with an error code
}
if (!process.env.MONGODB_URI) {
    // console.error("Error: MONGODB_URI environment variable is not defined.");
    throw new AppError("MONGODB_URI environment variable is not defined.");
    process.exit(1); // Exit the process with an error code
}
const config = {
    PORT: process.env.PORT || 8000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp'
};

export default config;
