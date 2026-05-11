export {}

let arr: number[] = [10, 22, 23, 44, 15, 86, 17];

// Using for loop
let evenNumber: number[] = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenNumber.push(arr[i]);
    }
}

console.log(evenNumber);

// Using filter()
let newEvenNumber = arr.filter(
    (currentElement: number) => {
        console.log('currentElement', currentElement);
        return currentElement % 2 === 0;
    }
);

console.log('newEvenNumber', newEvenNumber);