// Creating The Express App
require('dotenv').config()
const express = require("express") ;
const cors = require("cors")
const app = express() ;
const port = process.env.DB_HOST ;
const morgan = require("morgan") ;
const authRoutes = require("./routes/auth")
//const { MongoClient } = require('mongodb');
import mongoose from "mongoose" ;
const db = require("mongodb") ;
app.use(cors()) ;
app.use(morgan("dev")) ;




const uri = "mongodb+srv://new-user-03018765:03018765@cluster0.vtwtx.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err))



app.use("/api" , authRoutes) ;




app.listen(port , (req , res) => {
  console.log(`listening on port ${port}`) ;
});
