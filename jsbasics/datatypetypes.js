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



