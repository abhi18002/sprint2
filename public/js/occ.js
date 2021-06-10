const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const floor = document.getElementById('movie');
const time = document.getElementById('slot')
const day = document.getElementById('day')
const chart= [[212,213,223,224]];
const occ=[];
const defa = document.getElementById('screen');
const clone = defa.cloneNode(true);


function change(){
var k=0;
  while(k<=20){
    var num=[];

    for(var i =0; i <20; i++){
  num.push(Math.floor(Math.random() * 24) +200);
}
k+=1;
chart.push(num);
}

}

change();



function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.occupied');
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  var x = (selectedSeatsCount/24)*100;
rate.innerText = x.toPrecision(2)+" %";
}
function fun(){

  var value = floor.value.toString()+day.value.toString()+slot.value.toString();

    populateUI(value);
}


function disp(x,value){

for(var j=201;j<224;j++) {
  for(var i =0; i<x.length;i++){
    if (j == x[i]){
      var y= j%200;
var ele= document.getElementById(y);

ele.classList.add("occupied");

    }
  }
}
updateSelectedCount();

}



function populateUI(value) {

  const selectedSeats = document.querySelectorAll('.row .seat.occupied');

for (var i =0; i<selectedSeats.length;i++)
{
  selectedSeats[i].classList.remove("occupied");
}
  var x=Math.floor(Math.random() * 20);
temp=chart[x];

  switch(true){
    case (value>=111 && value <117):
    {
      disp(temp,value);
      
    }
    case (value>=121 && value <127):
      {
        disp(temp,value);
        
      }
    case (value>=141 && value <147):
    {
      disp(temp,value);
      
    }
    case (value>=131 && value <137):
    {
      disp(temp,value);
      
    }
    case (value>=161 && value <167):
    {
      disp(temp,value);
      
    }
    case (value>=151 && value <157):
    {
      disp(temp,value);
      
    }
    case (value>=221 && value <227):
    {
      disp(temp,value);
      
    }
    case (value>=211 && value <217):
    {
      disp(temp,value);
      
    }
    case (value>=241 && value <247):
    {
      disp(temp,value);
      
    }
    case (value>=231 && value <237):
    {
      disp(temp,value);
      
    }
    case (value>=251 && value <257):
    {
      disp(temp,value);
      
    }
    case (value>=261 && value <267):
    {
      disp(temp,value);
      
    }
    case (value>=311 && value <317):
    {
      disp(temp,value);
      
    }
    case (value>=331 && value <337):
    {
      disp(temp,value);
      
    }
    case (value>=341 && value <347):
    {
      disp(temp,value);
      
    }
    case (value>=321 && value <327):
    {
      disp(temp,value);
      
    }
    case (value>=361 && value <367):
    {
      disp(temp,value);
      
    }
    case (value>=351 && value <357):
    {
      disp(temp,value);
      
    }
    case (value>=127 && value <130):
    {
      disp(temp,value);
      
    }
    case (value>=117 && value <120):
    {
      disp(temp,value);
      
    }
    case (value>=137 && value <140):
    {
      disp(temp,value);
      
    }
    case (value>=157 && value <160):
    {
      disp(temp,value);
      
    }
    case (value>=147 && value <150):
    {
      disp(temp,value);
      
    }
    case (value>=167 && value <170):
    {
      disp(temp,value);
      
    }
  }
}
