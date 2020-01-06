const express=require("express");
const app = express();
const cors=require("cors");
const bodyParser = require("body-parser");

const HTTP_PORT = process.env.PORT || 8080;

let names = [{Name:"pat",lName:"C"},{Name:"john",lName:"smith"}]

//CRUD OPERATIONS

// 

app.get("/api/names",(req,res)=>{
    res.json(names);
});

app.listen(HTTP_PORT,()=>{
    console.log(`serverlog ${HTTP_PORT}`);
});