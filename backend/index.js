// Creating The Express App
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.DB_HOST;
const morgan = require("morgan");
const authRoutes = require("./routes/auth");

import mongoose from "mongoose";
const db = require("mongodb");

app.use(express.json({ limit: "500" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:8080"],
  })
);
app.use(morgan("dev"));

const uri =
  "mongodb+srv://new-user-03018765:03018765@cluster0.vtwtx.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));

app.use("/api", authRoutes);

app.post("/api/register", (req, res) => {
  console.log(req.body);
});

app.listen(port, (req, res) => {
  console.log(`listening on port ${port}`);
});
