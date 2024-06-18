const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// Ensure you have the correct environment variables set
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const dbName = "registrationFormDB";  // Add the DB name variable if needed

// Connect to MongoDB
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.xzwoywt.mongodb.net/${dbName}`)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Error connecting to MongoDB:", error));

// Define the registration schema
const registrationSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// Model for registration schema
const Registration = mongoose.model("Registration", registrationSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve the registration form
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/index.html");
});

// Handle registration form submissions
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await Registration.findOne({ email: email });

        if (!existingUser) {
            const registrationData = new Registration({ 
                name, 
                email, 
                password 
            });

            await registrationData.save();
            res.redirect("/success");
        } else {
            console.log("User already exists...");
            res.redirect("/error");
        }
    } catch (error) {
        console.error("Error during registration:", error);
        res.redirect("/error");
    }
});

// Serve success page
app.get("/success", (req, res) => {
    res.sendFile(__dirname + "/pages/success.html");
});

// Serve error page
app.get("/error", (req, res) => {
    res.sendFile(__dirname + "/pages/error.html");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
