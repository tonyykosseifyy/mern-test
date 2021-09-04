// Creating The Express App
require('dotenv').config()
const express = require("express") ;
const cors = require("cors")
const app = express() ;
const port = process.env.DB_HOST ;
const morgan = require("morgan") ;
const authRoutes = require("./routes/auth")

app.use(cors()) ;
app.use(morgan("dev")) ;



app.use("/api" , authRoutes) ;




app.listen(port , (req , res) => {
  console.log(`listening on port ${port}`) ;
});
