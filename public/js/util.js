const users = [{

  username: "user1",
  pwd: "login1",
  name: "Kishore",
  dept:"CSE",
  phone: 8825897100,
  email:"kishoreak2000@gmail.com"
}, {
  username: "user2",
  pwd: "login2",
  name:"Nitheese",
  dept:"CSE",
  phone:7094971371,
  email:"nitheese456@gmail.com"
}];

const adm = [{username:'adm',pwd:'admin1'}]

function validate(user,pwd)
{
    if(  users.find( o =>(o.username === user) &&  (o.pwd === pwd)  ))
    {
return true;   }
    else
    {
 return false;
    }
}

try {
  module.exports = validate;
} catch (error) {
  console.log('we caught an error');
}
