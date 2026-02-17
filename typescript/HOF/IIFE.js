(function name(studentName){
    console.log('Hello ther', studentName)
})('Anand');

// private variable
const counter = (function(){
    let count = 0;
    return {
        increment: function(){
            count++;
            return count;
        },
        decrement: function(){
            count--;
            return count;
        }
    }
})();

console.log('counter', counter);
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())

// console.log('count', count)

// console.log() 
