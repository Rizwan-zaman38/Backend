import mongoose from "mongoose"

export const dbconnection = async()=>{
   try {
    const res = await mongoose.connect('mongodb+srv://rizwanzaman38:B17f2NhfZfIJFUOP@cluster0.mfwqz.mongodb.net/')
    console.log("db connection sucessfully established.",res.connection.port)
   } catch (error) {
    console.error("Error connecting to the database",error)
   }
}