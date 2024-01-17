console.log("welcome to pjs");
console.log("hello world");

// data types

// string
name = "PandaYt"; 

// number
num = 50; 

// undefined
x = undefined;

// null
y = null;

// true,false
boolean = true

console.table(name , num , x, y ,boolean);

// we have two kinds of data types

// 1)Primitive data types STRING NUM BOOLEAN INT ETC
// 2)Non Primitive data types Array, Objects, functions etc

let obj ={
    name : "asad",
    age : 15 ,
    grade : "A",
    phone : 45678,
    city : "karachi"
}

// first method to getting values of an object
console.log(obj["name"]);
console.log(obj["phone"]);

// second method to getting values of an object

console.log(obj.city);

// for in loop
for(let i in obj){
    console.log(i, obj[i])
}
