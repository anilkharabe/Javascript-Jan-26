

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


async function promiseAny(){
    let response =await Promise.any([promise1(), promise2(), promise3()]);
    console.log('response', response);
    // console.log('res2', res2)
    // console.log('res3', res3)
}

promiseAny();


// first promise that fullfiled(Success)
// Promise.any([promise3(), promise1(), promise2()])
//     .then((res)=>{
//         console.log('res:', res)
//     })
//     .catch((e)=>{
//         console.error('e', e)
//     })