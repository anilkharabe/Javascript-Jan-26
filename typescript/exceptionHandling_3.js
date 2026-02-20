try {
    x = y + 10;
    console.log('i am in try block')
    throw new Error('throwing new error')
    // console.log('I am in try block again');
} catch (error) {
    console.log(error.message, ' i am in catch block')
}finally{
    // alwary run
    console.log('i am in finally block')
}

let x;
try {
    // x = y + 10;
    throw new Error('throwing new error')
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}

console.log('x', x)
