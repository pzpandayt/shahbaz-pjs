// conditional statement

let age = 21;

if(age>=20){
    console.log("you can cast your vote");
}

if(age<=20){
    console.log("you can not cast your vote");
}

if(age>=20){
    console.log("you can cast your vote");
}
else{
    console.log("you can not cast your vote");
}

let userName = prompt("enter your name");
console.log(userName);

let mode = prompt(`enter your mode
1) dark
2)light`);
let color ;

if(mode === "dark"){
    color = "black";
}

if(mode === "light"){
    color = "white";
}

console.log(color);