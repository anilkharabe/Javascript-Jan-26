
// custum promise
let custumPromise = new Promise((resolve, reject)=>{

    let success = true;

    if(success){
        setTimeout(()=>{
            resolve('Promise is resolved')
        }, 3000);
    }else{
    setTimeout(()=>{
            reject('Promise is rejected')
        }, 3000)
    }
})


async function consumePromise(){
    try {
        const result = await custumPromise;
        console.log('result', result)
    } catch (error) {
        console.log('error',error)
    }
}

consumePromise()


// custumPromise
//     .then((response)=>{ // resolve state 
//         console.log('response', response)
//     })
//     .catch((e)=>{   // reject state
//         console.error(e)
//     })

// setTimeout


