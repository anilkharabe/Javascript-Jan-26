console.log('welcome again')
function add(a, b){

    if(b){
        return a + b;
    }

    return function(c){
        return a + c;
    }

}


const result1 =  add(10, 20); // 30 // normal function

// console.log('result 1', result1)

const result2 =  add(10)(20);
// console.log('result2', result2)

// testing
