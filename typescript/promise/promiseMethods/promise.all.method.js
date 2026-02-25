function promise1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Promise 1 rejected')
        }, 5000)
    })
}

function promise2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Promise 2 resolved')
        }, 1000)
    })
}

function promise3(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Promise 3 resolved')
        }, 3000)
    })
}


// 
Promise.all([promise3(), promise1(), promise2()])
    .then((res)=>{
        console.log('res', res)
    })
    .catch((e)=>{
        console.error('e', e)
    })