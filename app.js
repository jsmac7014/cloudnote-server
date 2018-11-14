var express = require('express')
var app = express()
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var mongoose = require('mongoose');
const port = 3000;

app.use(bodyParser.json());


mongoose.connect("mongodb://cloudAdmin:helloworld1@ds053459.mlab.com:53459/cloudnote")
var db = mongoose.connection;

app.listen(port, function () {
    console.log("Running on port " + port);
});

app.get("/notes", function(req, res) {
    db.collection("notes").find({},{sort: {$natural : -1}}).toArray((err,result)=>{
        res.send(result)
        if(err){
            console.log(err)
        }
    })
});
  