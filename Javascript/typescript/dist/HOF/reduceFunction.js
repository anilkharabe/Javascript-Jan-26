let arr = [10, 20, 30, 40, 10, 28];
let sum = 0; // returning single value
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log("sum", sum);
let total = arr.reduce((acc, currentElement) => {
    console.log('acc', acc);
    return acc + currentElement;
}, 0);
console.log('total', total);
export {};
