import mongoose from "mongoose"

export const dbconnection = async()=>{
   try {
    const res = await mongoose.connect(process.env.DB_connection)
    console.log("db connection sucessfully established.",res.connection.port)
   } catch (error) {
    console.error("Error connecting to the database",error)
   }
}