const express = require("express")
const mongoos  = require("mongoos")
const bodyParser = require("body-parser")
const dotenv =  require(dotenv)

const app = express();
dotenv.config();