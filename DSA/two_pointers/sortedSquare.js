function sortedSquare(nums){
    let left = 0;
    let right = nums.length - 1;
    let newArr = []

    while(left <= right){
        let leftSquare = nums[left] ** 2;
        let rightSquare = nums[right] ** 2;

        if(leftSquare > rightSquare){
            newArr.unshift(leftSquare);
            left++;
        }else{
            newArr.unshift(rightSquare);
            right--;
        }

        console.log('newArr', newArr)
    }
}

let nums = [-4,-1,0,3,10];

sortedSquare(nums)