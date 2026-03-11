

function promise1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject('Promise 1 rejected')
        }, 5000)
    })
}

function promise2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject('Promise 2 rejected')
        }, 1000)
    })
}

function promise3(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject('Promise 3 rejected')
        }, 3000)
    })
}


// first promise that fullfiled(Success)
Promise.any([promise3(), promise1(), promise2()])
    .then((res)=>{
        console.log('res:', res)
    })
    .catch((e)=>{
        console.error('e', e)
    })