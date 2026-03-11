let arr = [7,9,3,20,1]

function bubbleSort(arr){

    for(let i = 0; i< arr.length - 1; i++){
        
        for(let j = 0; j < arr.length -1 -i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        console.log(console.log('arr',arr))
    }

}

bubbleSort(arr);
