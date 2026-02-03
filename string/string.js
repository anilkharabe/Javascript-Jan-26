let str = 'Good Morning. How are YOU???'

// case conversion
let uppercase = str.toUpperCase();
let lowercase = str.toLowerCase();

console.log('uppercase:', uppercase);
console.log('lowercase:', lowercase);

let dbEmail = 'aniruddha@gmail.com'
let userInput = 'ANIRUDDHA@Gmail.com';

let checkEamil =  dbEmail.toLowerCase() === userInput.toLowerCase()
console.log('checkEamil', checkEamil)

// trim
// used in form validation

let input = '   hello   ';
console.log('input', input)
let saveInput = input.trim();
console.log('saveInput', saveInput)

// Replace

let newStr = str.replace('Morning', 'Evening');
console.log('newStr', newStr)
