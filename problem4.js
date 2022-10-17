let username= "haseeb";
let password = 12345;
let given_username="haseeb";
let given_password=1234;
if(username==given_username){
  if (given_password==password){
    console.log("login");
  }else {
    console.log("wrong password");
  }
}else {
  console.log("wrong username");
}