let str = 'Hello there, how are you?'
let reverseStrin='';

for(let i=str.length-1; i>=0; i--){
    reverseStrin += str[i]
}

console.log('reverseString', reverseStrin)