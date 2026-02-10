let square = function(num: number){
    return num ** 2;
}

let cube = function(num: number){
    return num ** 3;
}


// default paramater
function processNumber(callback: any, param: number = 5){
    
    console.log('processNumber called')
    console.log(callback(param)) ;
}

processNumber((num: number)=>{
    return num ** 2;
}, 9);

processNumber(cube, 15)

