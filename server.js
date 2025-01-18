import express from 'express'
import { data } from './data.js';
import routes from './routes/userRoutes.js';
import { dbconnection } from './config/dbconnection.js';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.get('/api',(req,res)=>{
    res.json({
        message: "Hello Rizwan",
        Data: data,
        timestamp: new Date().toISOString()
    });
})

app.use(express.json());
app.use('/api',routes);
dbconnection();

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server is running on port 3000");
})