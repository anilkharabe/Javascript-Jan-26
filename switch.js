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


let marks = 75;

switch(true){
    case marks >= 95: 
        console.log('Grade: A+')
        break;
    
    case marks >= 75:
        console.log('Grade: A')
        break;

    case marks >= 60:
        console.log('Grade: B')
        break;

    case marks >= 35:
        console.log('Grade: C')
        break;
    
    default:
        console.log('Grade: Fail')
}

// switch => alternative to multiple if-else casees

let day = 15;

switch (day) {
  case 1:
    console.log("Monday");
    break; // stop the execution and comes out of this switch block
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log('Invalid day') 
}
