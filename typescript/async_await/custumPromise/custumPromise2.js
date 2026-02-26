
// custum promise
function custumPromise(success){
    return new Promise((resolve, reject)=>{

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
}

let success = false;

async function consumePromise(){
    try {
        const response = await custumPromise(success);
        console.log('response', response);  
    } catch (error) {
        console.log('error', error)
    }
}

consumePromise()

// custumPromise(success)
//     .then((response)=>{ // resolve state 
//         console.log('response', response)
//     })
//     .catch((e)=>{   // reject state
//         console.error(e)
//     })

// setTimeout


