const express = require("express");
const mongoose = require("mongoose"); // Corrected spelling
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
dotenv.config();


const username = process.env.MONGODB_USERNAME;
const password  = process.env.MONGODB_PASSWORD;
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.xzwoywt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,{
    useNewUrlParser : true,
    useUnifiedTopology:true,
    
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/pages/index.html")
})

app.post("/register",(req,res)=>{
    try {
        const{name,email,password} = req.body;
    } catch (error) {
        
    }
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
