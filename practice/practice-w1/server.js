const express =require("express");
const path=require("path");
const bodyParser = require("body-parser");
const app=express();
const HTTP_PORT = process.env.PORT ||8080;

app.use(bodyParser.json());

var colours = [ 'Red', 'Green', 'Blue', 'Yellow', 'Aqua', 'Fuschia' ];

app.get("/api/items",(req,res)=>{
    res.status(201).json(colours);
})

app.get("/api/items/:id",(req,res)=>{
    
    let index=colours.findIndex(i=>i.toLocaleLowerCase()==req.params.id.toLocaleLowerCase())

    if(index>-1)
    {
        res.json(colours[index]);
    }
    else{
        res.status(404).json({message:"can't find"})
    }

});

app.post("/api/items",(req,res)=>{
    let index = colours.push(req.body.firsName)-1;
    res.json(colours[index]);
})

app.put("/api/items/:id",(req,res)=>{
    if(req.params.id>colours.length-1)
    {
        res.status(404).json({message:"can't find"});
    }
    else
    {
        colours[req.params.id]=req.body.firsName;
        res.json(colours[req.params.id]);
    }
})

app.delete("/api/items/:id",(req,res)=>{
    if(req.params.id>colours.length-1)
    {
        res.status(404).json({message:"can't find"});
    }
    else
    {
        res.splice(req.params.id,1);
    }
})




app.listen(HTTP_PORT,()=>{
    console.log(`serverlog ${HTTP_PORT}`);
})




