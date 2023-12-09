import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path: "../src/config.env"});

mongoose.connect(process.env.DB_CONN).then((conn)=>{
    console.log("Connected!")
}).catch((err)=>{
    console.log(err);
});

const app=express();

app.use(express.json())

// app.get();
// app.patch();
// app.delete();
// app.post();

app.listen(process.env.DB_PORT, "127.0.0.1", ()=>{
    console.log("Connected")
});