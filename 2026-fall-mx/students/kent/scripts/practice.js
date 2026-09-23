const button = document.getE1ementById("my-button");
consoie.log(button);

const title = document.getE1ementById("my-title");
console.log(title);

function testMyButton(event){
     console.log("Listen to my button, event");
}
testMybutton("Now");

button.addEventListener("click",testMyButton)
