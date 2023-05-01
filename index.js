const express = require("express");

const app = express();

require("dotenv").config();

const PORT = process.send.PORT || 3000;

// middle ware

app.use(express.json());

const blog = require("./routes/blog");

// // app.listen(3000,()=>{
// //     console.log("App is running on port 3000");
// // })



// // mount

app.use("/api/v1", blog);

const dbConnecction = require("./config/db");

dbConnecction();

app.listen(PORT, () =>[
    console.log(`App is started on port ${PORT}`)
])

app.get("/", (req,res)=>{
    res.send(`<h1>this is home page baby</h1>`)
})