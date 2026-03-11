const employees = [
 { name:"A", dept:"IT" },
 { name:"B", dept:"HR" },
 { name:"C", dept:"IT" },
 { name:"D", dept:"Finance" },
 { name:"E", dept:"HR" }
];

const output  = employees.reduce((acc, currentElement)=>{
    if(acc[currentElement.dept]){
        acc.count  += 1;
        acc[currentElement.dept].employees.push(currentElement.name);
    }else{
        acc[currentElement.dept] = { count:1, employees:[currentElement.name] }
    }
    return acc;
}, {})

console.log('output', output)

/**
 * 
 * {
 IT: { count:2, employees:["A","C"] },
 HR: { count:2, employees:["B","E"] },
 Finance: { count:1, employees:["D"] }
}

 */