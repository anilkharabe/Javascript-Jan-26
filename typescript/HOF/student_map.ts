const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    age: 20,
    grade: "A",
    course: "Computer Science",
    isActive: true
  },
  {
    id: 2,
    name: "Priya Patel",
    age: 22,
    grade: "B+",
    course: "Information Technology",
    isActive: true
  },
  {
    id: 3,
    name: "Rohan Mehta",
    age: 19,
    grade: "A-",
    course: "Electronics",
    isActive: false
  },
  {
    id: 4,
    name: "Sneha Verma",
    age: 21,
    grade: "B",
    course: "Mechanical Engineering",
    isActive: true
  }
];

const newListOfStudent = students.map((currentStudent)=>{
    currentStudent.name = currentStudent.name.toUpperCase();
    return currentStudent;
});


const filteredStudent = students.filter((currentStudent)=>{
    return currentStudent.age > 20
})

console.log('filteredStudent', filteredStudent)

console.log(newListOfStudent)
