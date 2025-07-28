var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var GmailId = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( GmailId == "anirudh123@gmail.com" && password == "12345" ||  GmailId == "sahith123@gmail.com" && password == "sahith12"){
alert ("Login successfully");
window.open('catogery.html'); // Redirecting to other page.
return false;
}
// if ( GmailId == "hariharan123@gmail.com" && password == "hariharan123")
//     alert ("Login successfully");   
    
// if ( GmailId == "hemanth123@gmail.com" && password == "hemanth123")
//      alert ("Login successfully");   
else{
attempt --;// Decrementing by one.
alert(" incorrect password You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}