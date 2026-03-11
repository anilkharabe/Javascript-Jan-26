
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

let success = true;

custumPromise(success)
    .then((response)=>{ // resolve state 
        console.log('response', response)
    })
    .catch((e)=>{   // reject state
        console.error(e)
    })

// setTimeout


