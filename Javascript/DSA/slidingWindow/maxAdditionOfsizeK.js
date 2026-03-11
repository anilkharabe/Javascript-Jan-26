function maxSumOfSubarray(arr, k){
    let windowSum = 0;
    let maxSum = 0;

    for(let i=0; i< k; i++){
        windowSum +=arr[i]
    }
    maxSum = windowSum;

    for(let i=k; i< arr.length; i++){
        windowSum = windowSum + arr[i] - arr[i-k]; // i=4, k=3
        maxSum = Math.max(maxSum, windowSum)
    }

    
    console.log('maxSum', maxSum)
}

maxSumOfSubarray([2, 1, 3, 5, 7, 8, 1, 4, 9, 9], 3)