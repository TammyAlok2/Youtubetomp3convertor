// required packagages 
const express = require ("express");
const fetch = require ("node-fetch");
require("dotenv").config();
const port =3000;

// create  web servor 
const app = express ();
 
// servor port number 


//app set template engine
app.set("view engine","ejs");
app.use(express.static("public"));
//needed to parse the html data for post request
app.use(express.urlencoded(
    {
        extended :true
    }
))
//app.use(express,json());
app.get("/home",(req,res) =>
{
res.send("hello world")
})


// start the servor 
app.listen(port , () => {
    console.log("servor started on the port ${port}");
})