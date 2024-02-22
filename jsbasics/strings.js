const name= "ankit"
const age= 23

// console.log(name + age + " hello"); old method

console.log(`Hello my name is ${name} and my age is ${age}`);

const gamename = new String('Ankit-tripathi-job-milega')
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));

const newString = gamename.substring(0, 4)

console.log(newString);

const anotherString = gamename.slice(-5, 3)

console.log(anotherString);

const neestring = "    Ankit   "
console.log(neestring);
console.log(neestring.trim());

const url = 'https://anndlnlalkmm%20aaass@gmail.com'
console.log(url.replace('%20', '#'))

console.log(url.includes('heloo'))

console.log(gamename.split('-'))

