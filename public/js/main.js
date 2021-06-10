function validate()
{ console.log("h1");

users.forEach( o => {
  if( (o.username === document.getElementById('username').value) &&  (o.pwd === document.getElementById('pwd').value))
    { console.log(o.username);
location.href="/dash";
}
    else
    {
 document.getElementById("form").reset();
setTimeout(function(){
   console.log(o.username);
   document.getElementById("wrong").removeAttribute("hidden");

});
    }
}
);

}
// try {
//   module.exports = validate;
// } catch (error) {
//   console.log('we caught an error');
// }
