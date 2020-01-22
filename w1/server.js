const express=require("express");
const app = express();
const cors=require("cors");
const bodyParser = require("body-parser");

const HTTP_PORT = process.env.PORT || 8080;

let names = [{Name:"pat",lName:"C"},{Name:"john",lName:"smith"}]

app.use(bodyParser.json());

//CRUD OPERATIONS

app.post("/api/names",(req,res)=>{
    names.push(req.body);
    res.json({message:"name added!!"});
})

// READ
app.get("/api/names",(req,res)=>{
    res.json(names);
});

app.get("/api/names/:index",(req,res)=>{
    res.json(names[req.params.index]);
})


// Update
app.put("/api/names/:index",(req,res)=>{
    names[req.params.index]=req.body
    res.json({message:"name Updated!!"});
})

//Delete

app.delete("/api/names/:index",(req,res)=>{
    names.splice(req.params.index,1);
})


app.listen(HTTP_PORT,()=>{
    console.log(`serverlog ${HTTP_PORT}`);
});