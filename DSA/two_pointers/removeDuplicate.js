function removeDuplicates(arr){
    let slow = 0;

    for(let fast = 1; fast < arr.length; fast++){
        if(arr[slow] == arr[fast]){
            continue;
        }
        else if(arr[slow] != arr[fast]){
            slow++;
            arr[slow] = arr[fast]
        }
    }
    arr.length = slow + 1;
    console.log('arr',arr)
}

let arr = [1,1,2,3,3,4,5,5,5,5,7,9,9];
removeDuplicates(arr)