function greetMe(){
    
    return function(){
        console.log('hello there')
        console.log('from inner function')
        return function(){
            console.log('from grand child')
        }
    }
    return 10;
}

// let returnedFunction = greetMe()()();
// returnedFunction()
// console.log('returnedFunction', returnedFunction)


// ex : 2

function outerFunction(){
    let count = 0;
    
    function innerFunction(){
        // console.log('before count from parent', count)
        count++;
        console.log( 'after count from parent', count)
        let innerCount = 0;
        innerCount++;
        console.log('innerCount', innerCount)
    }

    return innerFunction;
    
}

const innerFunctionBody =  outerFunction();
// outerFunction

innerFunctionBody()
innerFunctionBody()
innerFunctionBody()
innerFunctionBody() // count = 4, innerCount=1
// console.log('innerFunctionBody', innerFunctionBody)



