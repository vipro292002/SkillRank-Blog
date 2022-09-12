import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import postRouter from './routes/post';
import categoryRouter from './routes/category';


const app = express()

app.use(morgan("dev"));
app.use(express.json());
app.use(cors())

app.use("/api", postRouter )
app.use("/api", categoryRouter )


const port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log("Server running on port 8000");
})
