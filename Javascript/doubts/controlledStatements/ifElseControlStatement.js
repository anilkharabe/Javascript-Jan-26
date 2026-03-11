// let age = 27;

// if(age > 18){
//     console.log('you are eligible for vote')
// }

// console.log('Thank you for your cooperation')


// let marks = 35;
// if(marks >=40){
//     console.log('Pass');
// }else{
//     console.log('Fail')
// }

// let marks = 75;

// if(marks>= 95){
//     console.log('Grade: A+')
// }else if(marks >= 75){
//     console.log('Grade: A')
// }else if(marks >= 60){
//     console.log('Grade: B')
// }else if(marks >=35){
//     console.log('Grade: C')
// }else{
//     console.log('Grade: Fail')
// }


let dbEmail = 'aniruddha@gmail.com'
let userInput = 'ANIRUDDHA@Gmail.com';

 
let role = 'user';

// if(dbEmail.toLowerCase() === userInput.toLowerCase()){
//     if(role == 'admin'){
//         console.log('Role: admin, access granted')
//     }else{
//         console.log('Role: user, access granted')
//     }
//     console.log('logged In successfully')
// }else{
//     console.log('email  not found')
// }

if(dbEmail.toLowerCase() === userInput.toLowerCase() || role === 'admin'){
    console.log('grant access')
}else{
    console.log('access denied')
}


// role = admin => admin access
// role = not admin => user access

// if will execute only when the condition is returning non-false(truly) value

if(undefined){
    console.log('falsy value examination')
}