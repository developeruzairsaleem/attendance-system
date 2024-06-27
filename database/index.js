const {MONGODB_CONNECTION_STRING} = require("../config/index");
const mongoose = require("mongoose");


const connectToDB = ()=>{


    mongoose.connect(MONGODB_CONNECTION_STRING)
    .then((response)=>{
        console.log("database connection established")
    }
    )
    .catch(console.error)

}



module.exports = connectToDB;