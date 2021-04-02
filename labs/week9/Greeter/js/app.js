let textName = document.getElementById("text");
let name = document.getElementById("name");  
// display nameText (user input)
function submit() {
    show(textName.value);
}
//display user input with "Hello " + textName
function show(textName) {
    console.log("hello");
    name.innerHTML= ("Hello " + textName);
}