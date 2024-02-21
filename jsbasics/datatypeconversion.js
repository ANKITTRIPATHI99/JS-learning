//1. Number conversion:-

let score = 100

console.log(typeof score)
console.log(typeof (score))

//2.

let scores = "100"

console.log(typeof scores)
console.log(typeof (scores))

let value = Number(scores)
console.log(typeof value)

//3.

let scor = "100abc"

console.log(typeof scor)

let val = Number(scor)
console.log(typeof val)        // datatype will be no by conversion
console.log(val)               //NaN means Not any Number

//4.

let input = null

console.log(typeof input)

let val1 = Number(input)
console.log(typeof val1) 
console.log(val1) 

//5.

let input2 = undefined

console.log(typeof input2)

let val2 = Number(input2)
console.log(typeof val2) 
console.log(val2)

//6.

let input3 = true

console.log(typeof input3)

let val3 = Number(input3)
console.log(typeof val3) 
console.log(val3)

//7.

let input4 = "Ankit"

console.log(typeof input4)

let val4 = Number(input4)
console.log(typeof val4) 
console.log(val4)

// "100" => 100 gives as no.
// "100abs" => NaN will be output
// true => 1

//8. Boolean Conversion:-

let isloggedin = 1
let booleanloggedin = Boolean(isloggedin)

console.log(booleanloggedin)

let isloggedin1 = ""
let booleanloggedin1 = Boolean(isloggedin1)

console.log(booleanloggedin1)

// 1 => true , 0 => false
// "" => false , "Ankit" => true


//9. String Conversion

let somenumber = 80
let somestring = String(somenumber)
console.log(typeof somestring)
console.log(somestring)