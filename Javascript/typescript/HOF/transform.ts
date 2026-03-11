export {}
let arr: Number[] = [1, 2, 3, 4, 5, 6, 7];
// trasform => double => [2,4,6,8,10, 12, 14]
// trasform => triple => [3,6,9,12, 15, 18, 21]

const trasformArray = (arrNumber: number[])=>{
    let newArr = []
    for (let index = 0; index < arrNumber.length; index++) {
        const element = arrNumber[index];
        newArr.push(element * 2)
    }
    return newArr
}

console.log(trasformArray(arr)) ;


const transformArrayUsingCallback = (arrNumber: number[], callback: any)=>{
    let newArr = []
    for (let index = 0; index < arrNumber.length; index++) {
        const element = arrNumber[index];
        newArr.push(callback(element))
    }
    return newArr;
}

const doubleFunction = (num: number)=> num * 2;

console.log(transformArrayUsingCallback(arr, doubleFunction)) ;



