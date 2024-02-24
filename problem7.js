const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];

const sum = people.reduce((p, c) => p + c.age, 0);
console.log(sum);
