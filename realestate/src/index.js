const express=require("express");
const router=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");

dotenv.config({path: "../src/config.env"});

mongoose.connect(DB_Mongodb).then(()=>{
    console.log("connected!")
}).catch((err)=>{
    console.log(err.message);
});

app.use(express.json())

app.get("/api", async(req, res)=>{
    res.status(200).json({
        status: "success",
        message: "",
        data: ""
    })
});
app.patch("/api", async(req, res)=>{
    res.status(200).json({
        status: "",
        message: "",
        data: ""
    })
})
app.delete("/api", async(req, res)=>{
    // const movies=
    res.status(200).json({
        status: "",
        message: "",
        data: ""
    })
})
app.post("/api", async(req, res)=>{

})
app.listen(3000, "127.0.0.1", ()=>{
    console.log("Connected!")
})