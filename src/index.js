const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const collection = require("./config")


const app = express();
//convert data into json formate
app.use(express.json());

app.use(express.urlencoded({extended:false}));


//use EJS as the view engine
app.set('view engine','ejs');
//static file
app.use(express.static("public"));

app.get("/",(req,res) => {
    res.render("login");
});

app.get("/signup",(req,res) => {
    res.render("signup");
});

//register user
app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password  // Corrected typo: changed passwod to password
    }

    try {
        const result = await collection.insertOne(data);
        console.log(result);  // Log the result of insertion if needed
        res.send("User registered successfully");
    } catch (err) {
        console.error("Error inserting user data:", err);
        res.status(500).send("Failed to register user");
    }
});

const port = 5000;
app.listen(port, ()=> {
    console.log('Server running on Port: ${port}');
})