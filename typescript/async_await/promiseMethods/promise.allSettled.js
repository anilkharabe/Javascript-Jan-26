

function promise1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Promise 1 resolved')
        }, 5000)
    })
}

function promise2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Promise 2 resolve')
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


// 
Promise.allSettled([promise3(), promise1(), promise2()])
    .then((res)=>{
        console.log('res', res)
    })
    .catch((e)=>{
        console.error('e', e)
    })