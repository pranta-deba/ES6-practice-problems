let names = ["John", "Mary", "Michael", "Elizabeth", "David"];

const findEvenLength = arr => arr.filter((a) => a.length % 2 === 0);
const res = findEvenLength(names);
console.log(res);
