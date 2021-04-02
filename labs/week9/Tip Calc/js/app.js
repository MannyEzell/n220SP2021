//references
let billAmount = document.getElementById("Bill");
let tipAmount = document.getElementById("Tip");
let totalAmount = document.getElementById("Total");


function calculate(){
    let amount = Number(billAmount.value);
    let tip = (amount/100)*20;
    let total = (amount + tip);

    Tip.innerHTML= ("Tip: " + tip);
    Total.innerHTML= ("Total: " + total);

}