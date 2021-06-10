//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ejs = require("ejs");
app.set('view engine', 'ejs');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1:27017/FacultyDB';
var tempfac;

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db=mongoose.connection;
// db.createCollection("freeslots");
// db.createCollection("clist");
// db.createCollection("cancel");
// db.createCollection("reserve");

var rooms =   db.collection("rooms");
var request = db.collection("requests");
var free = db.collection("freeslots");
var faculty = db.collection("faculty");

const clist = db.collection("clist");
const cancel = db.collection("cancel");
const reserve = db.collection("reserve");



const adm= [{username:'adm1',pwd:'log'},{username:'adm2',pwd:'log0'}]

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

function freeS(){
db.rooms.find().forEach((room) => {
  for (var i =0; i<6;i++){
    var y = room.availability[i];
    for (var j = 0; j<y.length;j++){
      if( y[j] == 0 ){
        var o = {  room: room.roomid,
                cap : room.capacity,
                type: room.roomtype,
                day: i,
                slot: j
        }
        db.free.insertOne(o);
      }
    }
  }
});

}

app.listen(3000,function(req,res){
console.log("Port is running");
});



app.get("/",function(req,res){
res.render("home");
});



app.get("/time",function(req,res){

res.render( "time",{tempfac:tempfac});
});



app.get("/log",function(req,res){
res.render("log");
//res.sendFile("log.html")
});



app.get("/occ",function(req,res){
res.render("occ",{rooms:rooms});
});



app.get("/reserve",function(req,res){
res.render("reserve");
});


function val(res,o){

res.render("admin",{adm:o,clist:clist,reserve:reserve,cancel:cancel});
}

function temp(res,o){
  tempfac = o;
  res.render("dash",{tempfac:o});
  }


app.post("/dash",function(req,res){
username = req.body.name;
pwd = req.body.pwd;
adm.forEach(o => {
if (o.username === username && o.pwd == pwd){
val(res,o);
}
});

faculty.find(function(err, facs){
  facs.forEach(function(fac){
    if (fac.username === username && fac.password == pwd){
      temp(res,fac);
      }
  });
  });

});

app.get("/noti",function(req,res){
res.render("noti", {requests:request});
});

app.get("/cancel",function(req,res){
res.render("cancel");
});

app.post("/cancel",function(req,res){

  var y = {
    name:  tempfac.name,
    request: "Cancel Slot num  "+ req.body.slot+"  On "+req.body.day,
    slot: req.body.slot,
    day: req.body.day
  }
db.collection ("cancel").insertOne(y);
  res.redirect("/time");
});



app.post("/noti",function(req,res){

var reqs = {
  name: tempfac.name,
   type : req.body.first,
slot : req.body.second,
cap : req.body.cap,
date : req.body.date,
status: "Pending"}

db.collection("reserve").insertOne(reqs);

res.render("noti",{requests:s});
});


app.get("/set",function(req,res){
res.render("set");
});


app.post("/sub",function(req,res){
var x = req.body.changes;
x = x.replace(/(\r\n|\n|\r)/gm," ");
var y = {
  name: tempfac.name,
  request: x
}

db.collection ("clist").insertOne(y);

res.render("/time",{tempfac:tempfac});
});

app.get("/cpass",function(req,res){
res.render("cpass");
});


app.get("/reqC",function(req,res){

res.render("reqC");
});
