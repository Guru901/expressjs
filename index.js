import dotenv from "dotenv";
dotenv.config()
import express from "express";
import cors from "cors";
import router from "./router/route.js"
import connectToDB from "./db/db.js"

connectToDB();

const port = 3000;

const app = express();

app.use(cors())
app.use(express.json());
app.use('/', router);


app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})