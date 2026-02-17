function curryingAdd(a){
    function add(b){
        return function(c){
            return a + b + c
        }
    }

    return add;
}

let addFuncBody = curryingAdd(5)
let addResult = addFuncBody(10)(20);
console.log('addResult', addResult)


// const addFunc = (10)

// console.log('addFunc', addFunc); //  15

// // function curring 
let result = curryingAdd(50)(100)(200);
console.log('result', result)