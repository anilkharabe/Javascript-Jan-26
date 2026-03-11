
// custum promise
let custumPromise = new Promise((resolve, reject)=>{

    let success = false;

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

custumPromise
    .then((response)=>{ // resolve state 
        console.log('response', response)
    })
    .catch((e)=>{   // reject state
        console.error(e)
    })

// setTimeout


