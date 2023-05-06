const mongoose = require("mongoose")


export const connectDb = async() => {
 try {

     await mongoose
       .connect(
        process.env.MONGO_URI,
         {
           useCreateIndex: true,
           useNewUrlParser: true,
           useFindAndModify: true,
           useUnifiedTopology: true,
         }
       )
       .then((res) => console.log("Connected to DB"));
 } catch (error) {
     console.log("Failed to connect to mongodb")
 } 
}