import express from 'express'
import { data } from './data.js';
import { dbconnection } from './dbconnection.js';
import routes from './routes/userRoutes.js';

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
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})