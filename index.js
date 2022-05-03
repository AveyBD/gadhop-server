const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// Root API
app.get("/", (req, res) => {
  res.send(`App is working. Last Reporting Time: ${Date()}`);
});
app.listen(port,()=>{
    console.log(`App Listening to port: ${port}`);
});
