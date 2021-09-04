// Creating The Express App
require('dotenv').config()
const express = require("express") ;
const cors = require("cors")
const app = express() ;
const port = process.env.DB_HOST ;



app.use(cors()) ;


app.get("/api" , (req , res) => {
  res.json({
    user : {
      signedIn : true ,
      name: "tony kosseify"
    }
  }) ;
}) ;


app.post("/user" , (req , res) => {
  console.log(req.body);
})


app.get("/" , (req , res) => {
  res.send("This is the Main Page") ;
})

app.listen(port , (req , res) => {
  console.log(`listening on port ${port}`) ;
});
