let arr = [0,1,0,0,1,1,0,0,1,0,1,1]
function segregate(arr){

    let left = 0;
    let right = arr.length -1;

    while(left < right){
        if(arr[left] == 0 ){
            left++
        }else if(arr[right] == 1 ){
            right--;
        }else{
            // swap using array destructuring
            [arr[right], arr[left]] = [arr[left], arr[right]];
        }
    }
    return arr;
}

console.log(segregate(arr));