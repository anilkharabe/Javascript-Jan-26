

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


async function promiseAllSettled(){
    let [res1, res2, res3] =await Promise.allSettled([promise1(), promise2(), promise3()]);
    console.log('response', res1);
    console.log('res2', res2)
    console.log('res3', res3)
}

promiseAllSettled();

// 
// Promise.allSettled([promise3(), promise1(), promise2()])
//     .then((res)=>{
//         console.log('res', res)
//     })
//     .catch((e)=>{
//         console.error('e', e)
//     })