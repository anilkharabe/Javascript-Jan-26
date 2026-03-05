setTimeout(()=>{
    console.log('this is my settimeout - 0')
})

const myPromise  =  new Promise((resolve, reject)=>{
    resolve('This is coming from promise -1')
});

const myPromise2 =  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('This is coming from promise - 2')
    })
});

setTimeout(()=>{
    Promise.resolve(console.log('this is promise -3'));
})



myPromise.then((response)=>{
    console.log('response 1:', response)
})

myPromise2.then((response)=>{
    console.log('response 2:', response)
})

// promise 1
// 2
// 0