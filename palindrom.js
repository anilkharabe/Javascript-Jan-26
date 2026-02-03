let str = "madam";
let isPalindrom = true;
console.log("str", str)

for (let i = 0, j = str.length - 1; i <  j; i++, j--) {

  console.log(`i at ${i}: ${str[i]} || j at {${j}}:${str[j]}` )
  
  if (str[i] == str[j]) {
    continue;
  } else {
    console.log("string is not Palindrom:", str);
    isPalindrom = false;
    break;
  }
}

if (isPalindrom) {
  console.log("string is palindrom:", str);
}
