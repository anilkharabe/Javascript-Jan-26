let arr: number[] = [7, 8, 63, 20, 65, 21, 983];
// let number: number = 7;

// index / -1
// indexof

// normal function

// function body // function declaration
function linearSearch(arr: number[], searchNumber: number): number{ // arr, searchNumber => parameters
    let index = -1;
    for(let i=0; i< arr.length; i++){
        if(arr[i] === searchNumber){
            index = i;
            break;
        }
    }
    console.log('index', index);
    return index;
}

// function calling

const indexOf = linearSearch(arr, 200);


console.log('indexOf', indexOf)


