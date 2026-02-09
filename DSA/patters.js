// pattern 1
/*

* * * * * 
* * * * * 
* * * * * 
* * * * * 
* * * * *

*/

function pattern1(){
    for(i=0; i< 5; i++){
        let str = '';
        for(j=0; j< 5; j++){
            str += '* '
        }
        console.log(str)
    }
}

// pattern1()

// pattern 2
/*

*  
* * 
* * * 
* * * * 
* * * * *

*/

function pattern2(){
    for(i=0; i< 5; i++){
        let str = '';
        for(j=0; j <= i; j++){
            str += '* '
        }
        console.log(str)
    }
}

// pattern2()

/* pattern 3

1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5
*/

function pattern3(){
    for(i=1; i <= 5; i++){
        let str = '';
        for(j=1; j <= i; j++){
            str += `${j} `
        }
        console.log(str)
    }
}

// pattern3()


// pattern4
/**

1 
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5 

*/

function pattern4(len){
    for(i=1; i <= len; i++){
        let str = '';
        for(j=1; j <= i; j++){
            str += `${i} `
        }
        console.log(str)
    }
}

// pattern4(9)



/** pattern 5

* * * * * 
* * * * 
* * * 
* * 
* 

*/

function pattern5(len){
    for(i=0; i < len; i++){
        let str = '';
        for(j=0; j < len-i; j++){
            str += `* `
        }
        console.log(str)
    }
}

// pattern5(15)

/** pattern 6
/**

1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 

 */

function pattern6(len){
    for(i=0; i < len; i++){
        let str = '';
        for(j=0; j < len-i; j++){
            str += `${j+1} `
        }
        console.log(str)
    }
}

// pattern6(15)

// pattern 7

/**
        *  
      * * 
    * * * 
  * * * * 
* * * * *

 */

function pattern7(){
    for(i=0; i< 5; i++){
        let str = '';
        // space
        for(s=0; s <= 5-(i +1); s++){
            str += '  '
        }
        
        //stars
        for(j=0; j <= i; j++){
            str += '* '
        }
        console.log(str)
    }
}

// pattern7()


// pattern 8

/**
        1  
      2 3 
    4 5 6 
  7 8 9 10 

 */

  function pattern8(){
    let number = 1;
    for(i=0; i< 4; i++){
        let str = '';
        // space
        for(s=0; s <= 4-(i +1); s++){
            str += '  '
        }
        
        //stars
        for(j=0; j <= i; j++){
            str += `${number++} `
        }
        console.log(str)
    }
}

pattern8()
