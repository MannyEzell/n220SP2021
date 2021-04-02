//references 
let password = document.getElementById("password");
let passCheck = document.getElementById("passCheck");
let message = document.getElementById("message");

function confirm() {
    let pass1 = String(password.value);
    let pass2 = String(passCheck.value);

if (pass1 == pass2) {
    message.innerHTML= "You're gucci!";
    console.log("gamer");
}
else {
    message.innerHTML= "WRONG!";
    console.log("hi");
    
}}

