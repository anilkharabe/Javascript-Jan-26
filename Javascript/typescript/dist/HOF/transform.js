let arr = [1, 2, 3, 4, 5, 6, 7];
// Transform => double
const transformArray = (arrNumber) => {
    let newArr = [];
    for (let index = 0; index < arrNumber.length; index++) {
        const element = arrNumber[index];
        newArr.push(element * 2);
    }
    return newArr;
};
console.log(transformArray(arr));
// Generic transform using callback
const transformArrayUsingCallback = (arrNumber, callback) => {
    let newArr = [];
    for (let index = 0; index < arrNumber.length; index++) {
        const element = arrNumber[index];
        newArr.push(callback(element));
    }
    return newArr;
};
const doubleFunction = (num) => num * 2;
console.log(transformArrayUsingCallback(arr, doubleFunction));
export {};
