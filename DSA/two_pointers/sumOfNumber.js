let arr = [1, 5, 8, 9 ,11, 12];

let result = 14;


for(let i = 0,  j = arr.length - 1; i<j ; ){
    if(arr[i] + arr[j] === result){
            console.log(arr[i], arr[j]);
            break;
    }
    if(arr[i] + arr[j] > result){
        j--;
    }

    if(arr[i] + arr[j] < result){
        i++;
    }
}
