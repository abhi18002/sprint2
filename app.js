//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ejs = require("ejs");
app.set('view engine', 'ejs');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1:27017/FacultyDB';
var tempfac;
const Vonage = require('@vonage/server-sdk')



var reserve = [{ name: "D Venkataraman", type: "Lab",slot:5,cap:67,date: 2021, status: "Pending"},{name : "C Arun Kumar", type : "Cabin", slot : 3, cap : 46, date : 2000, status : "Pending"}];
var clist = [{name: "C Arun Kumar", request : "CHANGE MY SECOND PERIOD TO THE 5th PERIOD"},{ name: "D Venkataraman",request:"Change my 5th period to 2nd period "}];
var cancel = [{name : "C Arun Kumar ", request : "Cancel Slot num  2  On 2", slot : 2, day : 2 },{name : "D Venkataraman", request : "Cancel Slot num  2  On 1", slot : 2,day : 1}]

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db=mongoose.connection;

var rooms =   db.collection("rooms");
var request = db.collection("requests");
var free = db.collection("freeslots");
var faculty = db.collection("faculty");
//
// const clist = db.collection("clist");
// const cancel = db.collection("cancel");
// const reserve = db.collection("reserve");

var room = [];

var fr = [];

const adm= [{username:'adm1',pwd:'log'},{username:'adm2',pwd:'log0'}]

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

function freeS(){
rooms.find().forEach((room) => {
  for (var i =0; i<6;i++){
    var y = room.availability[i];
    for (var j = 0; j<y.length;j++){
      if( y[j] == 0 ){
        var o = {  room: room.roomid,
                cap : room.capacity,
                type: room.roomtype,
                day: i,
                slot: j,
                tempfac:tempfac
        }
      free.insertOne(o);
      fr.push(o);
      }
    }
  }
} );
console.log(free);
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


app.get("/oc",function(req,res){
  var day = req.body.day;
  var slot = req.body.slot;
  var floor = req.body.floor;

  res.render("oc",{day:day,slot:slot,floor:floor});
});

app.get("/occ",function(req,res){
  rooms.find(function(err, facs){
    facs.forEach(function(fac){
room.push(fac);    });
    });
res.render("occ",{rooms:room});
});


app.get("/fg",function(req,res){

  const vonage = new Vonage({
    apiKey: "fb760860",
    apiSecret: "PDekdvX9NcNTMsrM"
  })

  const from = "AMRITA CLASS BOOKING"
  const to = "917550398440"
  const text = 'You have requested to change password'
  vonage.message.sendSms(from, to, text, (err, responseData) => {
      if (err) {
          console.log(err);
      } else {
          if(responseData.messages[0]['status'] === "0") {
              console.log("Message sent successfully.");
          } else {
              console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
          }
      }
  })
  res.redirect("log");
});


app.get("/reserve",function(req,res){
res.render("reserve");
});


function val(res,o){
  tempfac = o;
 freeS();
res.render("adm",{adm:o,clist:clist,reserve:reserve,cancel:cancel,free:fr});
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
res.render("noti", {reserve:reserve});
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

res.render("noti",{reserve:reserve});
});


app.get("/set",function(req,res){
res.render("set",{tempfac:tempfac});
});


app.post("/sub",function(req,res){
var x = req.body.changes;
x = x.replace(/(\r\n|\n|\r)/gm," ");
var y = {
  name: tempfac.name,
  request: x
}

db.collection ("clist").insertOne(y);

res.render("time",{tempfac:tempfac});
});

app.get("/cpass",function(req,res){
  var i = req.body.notif;
res.render("cpass");
});

app.get("/about",function(req,res){
  res.render("about");
});

app.get("/help",function(req,res){
  res.sendFile(__dirname + "/help.html");
});

app.get("/reqC",function(req,res){

res.render("reqC");
});
