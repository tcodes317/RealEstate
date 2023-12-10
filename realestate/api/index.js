import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config({path: "../src/config.env"});

mongoose.connect(process.env.DB_CONN).then((conn)=>{
    console.log("Connected!")
}).catch((err)=>{
    console.log(err);
});

const app=express();

app.use(express.json())
// custom middle ware

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// app.get();
// app.patch();
// app.delete();
// app.post();

app.listen(process.env.DB_PORT, "127.0.0.1", ()=>{
    console.log("Connected")
});
