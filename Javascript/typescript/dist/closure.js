function greetMe() {
    return function () {
        console.log('hello there');
        console.log('from inner function');
    };
    return 10;
}
let returnedFunction = greetMe()();
// returnedFunction()
// console.log('returnedFunction', returnedFunction)
