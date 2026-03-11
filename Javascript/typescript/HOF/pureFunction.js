// pure function

// does not mutate/change external state or data

let user = {
    name: 'Anand',
    age: 20
}


// non-pure function
function updateData(newAge){
    user.age = newAge;
}

updateData(25)
console.log('user', user)


// pure function
function doubleArray(arr){

    // return new array
    return arr.map((element)=>{
        return element * 2
    })
}
let arr = [1, 2, 3]
console.log(doubleArray(arr));
console.log('arr', arr)

