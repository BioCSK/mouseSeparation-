const express = require('express');
let url = require('url');
let R = require('r-script');
let bodyParser = require('body-parser');
let out;

const app =  express();
const serverPort = 3000;
app.listen(serverPort,()=>{
    console.log( "nodejs application executed on port " + serverPort  );
})
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static("./public"));
app.set("view engine",'ejs');
app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/html/index.html");
});

app.post("/mouseGroup",function(req,res){
    console.log(req.body.id,req.body.tumorSize);
    out = R("separation.R")
        .data(req.body.id,req.body.tumorSize)
        .callSync();
    console.log(out);
})


