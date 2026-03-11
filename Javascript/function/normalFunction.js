

console.log('studentName', studentName) // undefined 

var studentName = "Anand"; // global;
console.log(window.studentName) // Anand

showMe()

function showMe(){
    let city = 'Mumbai';
    var address = 'Andheri West';
    console.log('address', address) // Andheri West
    console.log('city', city)
    console.log('hello there')
}

console.log('address -2', address); // undefined
// block
{
    let country = 'India';
    console.log('country', country)
}

// block level scope
if(true){
    var country2 = 'USA';
    console.log('country', country2)
}

console.log(country2)
