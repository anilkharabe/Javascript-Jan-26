

console.log('address',address)
let address = 'Mumbai'
console.log('studentName', studentName) // Anand 

var studentName = "Anand"; // global;
console.log(window.studentName)

showMe()

function showMe(){
    let city = 'Mumbai';
    console.log('city', city)
    console.log('hello there')
}

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
