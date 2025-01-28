console.log("hello world")
console.log(document)
//let username = window.prompt("enter your name");
//console.log(`hello ${username}`);

var a=10;
let b=20;
//const c= 30;

if(true){
    var a= 40;
    let b =50;

}
console.log(a);
console.log(b);

/**let name = "alice";
let age= 25;
let isstudent=true;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isstudent);
console.log("")
let y = "21";
console.log(typeof y);
let x =Number(y);
console.log(typeof x);**/


let age = 20;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

let grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  default:
    console.log("Needs Improvement");
}

let result = age >= 18 ? "Adult" : "Minor";
console.log(result);


//let text = "The rain in Spain falls mainly";
//let pattern = /rain/;
//console.log(pattern.test(text));
//console.log(text.match(pattern));

let text = "The in Spain falls mainly in the plain";

let pattern=/^[a-z0-9]+@[a-z]+\.com$/;


const email = document.getElementById("email");
console.log(email);
console.log(email.value);

const submit = document.getElementById("validate");
submit.addEventListener("click", function(){
    const result = document.createElement("p");
    if(email.value.match(pattern)){ 
        console.log("Email is valid");

       
        result.innerText="Email is valid";
        result.style.backgroundColor="green";
        result.style.color="white";
        document.body.appendChild(result);
        

    }
    else{
        console.log("Email is not valid");
    }
})

//document.querySelectorAll("p")


const listElements = document.querySelectorAll("li");

for (let element of listElements){
    element.style.backgroundColor = "blue";
}