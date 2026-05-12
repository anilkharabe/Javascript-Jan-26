let numArray: number[] = [1,2,3,4,5];
let nameArr: string[] = ["Nikita", "Priyanka", "Pravin", "Shubham", "BHagyashri", "Harshada", "Shital", "Rohit"];

function getNumber(arr: number[]): number{
    return arr[0];
}

function getName(arr: string[]): string{
    return arr[0];
}

function genericFunction<T>(arr: T[]): T{
    return arr[0];
}

console.log(getNumber(numArray));
console.log(getName(nameArr));

// generics function
console.log(genericFunction(numArray));
console.log(genericFunction(nameArr));