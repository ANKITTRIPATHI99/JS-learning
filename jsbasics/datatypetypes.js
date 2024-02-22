// Primitive Datatypes -

// 7 types - String, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3
const isloggedin = true
const outtemperature = null
let user;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid);



// Reference type/ non-primitive type -

// Types - Array, Objects and Functions

const heros = ["Virat", "Dhoni", "Yashasvi", "Pant"]

let myobject = {
    name : "Ankit",
    age : 24,
}

const myfunction = function(){
    console.log("Hello World");
}

// Javascript is dynamically typed language.

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function (object function)
//        Object  =>  object


// ********************************************************************************************************

// Two types of Memory - 
// 1. Stack(Primitive) - Here we get copy of variable
// 2. Heap (non-primitive) - here we get reference variable/original var.

let myname = "Ankit"
anothername = myname
anothername = "Tripathi"

console.log(myname)
console.log(anothername)

let user1 = {
    email : "ankittripathi@google.com",
    password : "ank123"
}

let user2 = user1

user2.email= "hello@google.com"

console.log(user1.email);
console.log(user2.email);



