function promise1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Promise 1 resolved')
        }, 2000)
    })
}

function promise2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Promise 2 resolved')
        }, 4000)
    })
}

function promise3(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Promise 3 resolved')
        }, 3000)
    })
}


// indepedent promises

promise1()
    .then((res)=>{
        console.log('promise 1=> res 1: ', res);
    })


promise2()
    .then((res)=>{
        console.log('promise 2=> res 2: ', res);
    })


promise3()
    .then((res)=>{
        console.log('promise 3=> res 3: ', res);
    })