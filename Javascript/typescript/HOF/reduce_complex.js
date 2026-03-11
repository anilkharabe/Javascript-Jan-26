let employeeData = [
  {
    id: 1,
    place: "Banglore",
    name: "Rahul",
  },
  {
    id: 2,
    place: "Pune",
    name: "Rohit",
  },
  {
    id: 3,
    place: "Pune",
    name: "Ronit",
  },
  {
    id: 4,
    place: "Banglore",
    name: "Jagdish",
  },
];

let desiredOutput = employeeData.reduce((acc, currentElement) => {
  acc[currentElement.place]
    ? acc[currentElement.place].push({
        id: currentElement.id,
        name: currentElement.name,
      })
    : (acc[currentElement.place] = [
        { id: currentElement.id, name: currentElement.name },
      ]);

  return acc;
}, {});

console.log("desiredOutput", desiredOutput);

//desiredOutput

let output = {
  Banglore: [
    {
      id: 1,
      name: "Rahul",
    },
    {
      id: 4,
      name: "Jagdish",
    },
  ],
  Pune: [
    {
      id: 2,
      name: "Rohit",
    },
    {
      id: 3,
      name: "Ronit",
    },
  ],
};
