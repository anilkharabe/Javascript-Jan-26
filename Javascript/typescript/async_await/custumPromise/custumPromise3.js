// array of numbers => double => [1, 2 ,3] => [2, 4 , 6] resolve
// 'a' => rejected 


function doubleArray(arr){
    return new Promise((resolve, reject)=>{

        const newArray =  arr.map((element)=>{
            if(typeof element != 'number'){
                reject('promise rejected');
            }
            return element * 2;
        })

        resolve(newArray)
    })
}

const arr = [1, 2, 3];

async function consumePromise(arr) {
    try {
        const response = await doubleArray(arr);
        console.log('response', response)
    } catch (error) {
        console.log('error', error)
    }
}

consumePromise(arr)


// doubleArray(arr)
//     .then((response)=>{ // resolve state 
//         console.log('response', response)
//     })
//     .catch((e)=>{   // reject state
//         console.error(e)
//     })

