const express = require("express");
const mongoose = require("mongoose"); // Corrected spelling
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
dotenv.config();


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
