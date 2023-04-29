const mongoose = require("mongoose")

require("dotenv").config()


const connectWithDB = () =>{

    mongoose.connect(process.env.DATABASE_URL,{
       useNewUrlParser : true,
       useUnifiedTopology : true,

    }).then(
        console.log("DB connnected SUccessFulluy")
    ).catch((error)=>{
        console.log("COnnection failed");
        console.log(error);

        process.exit(1);

    })
}


module.exports = connectWithDB;