export {}

let arr: Number[] = [10, 22, 23, 44, 15, 86, 17];

// even numbers

let evenNumber = []
for(let i = 0; i< arr.length; i++){
    if(arr[i] % 2 == 0){
        evenNumber.push(arr[i])
    }
}

console.log(evenNumber)

let newEvenNumber =  arr.filter((currentElement: number, idx, arr)=>{
    console.log('currentElement', currentElement)
    return currentElement % 2 == 0;
})

console.log('newEvenNumber', newEvenNumber)
