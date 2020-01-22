const express =require("express");
const path=require("path");
const bodyParser = require("body-parser");
const app=express();
const HTTP_PORT = process.env.PORT ||8080;

app.use(bodyParser.json());

let names =[{Name:"Jinpyo",lName:"Ju"},{Name:"Jieun",lName:"Kim"}];


app.post("/api/names",(req,res)=>{
    names.push(req.body);
    res.json({message:"name added!!"});
})

app.get("/api/names",(req,res)=>{
    res.json(names);
})

app.get("/api/names/:id",(req,res)=>{
    res.json(names[req.params.id]);
})

app.put("/api/names/:id",(req,res)=>{
    names[req.params.id]=req.body
    res.json({message:"name updated!"});
})

app.delete("/api/names/:id",(req,res)=>{
    names.splice(req.params.id,1);
    res.json({message:"name deleted"});
})

app.listen(HTTP_PORT,()=>{
    console.log(`serverlog ${HTTP_PORT}`);
})