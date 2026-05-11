export {}

let arr: number[] = [1, 2, 3, 4, 5, 6, 7];

// Transform => double
const transformArray = (arrNumber: number[]): number[] => {
    let newArr: number[] = [];

    for (let index = 0; index < arrNumber.length; index++) {
        const element = arrNumber[index];
        newArr.push(element * 2);
    }

    return newArr;
};

console.log(transformArray(arr));


// Generic transform using callback
const transformArrayUsingCallback = (
    arrNumber: number[],
    callback: (num: number) => number
): number[] => {

    let newArr: number[] = [];

    for (let index = 0; index < arrNumber.length; index++) {
        const element = arrNumber[index];
        newArr.push(callback(element));
    }

    return newArr;
};

const doubleFunction = (num: number) => num * 2;

console.log(transformArrayUsingCallback(arr, doubleFunction));