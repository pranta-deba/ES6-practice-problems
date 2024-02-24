const squareSumAvg = (arr) => {
  const square = arr.map((i) => i * i);
  const sum = square.reduce((a, c) => a + c, 0);
  return sum / arr.length;
};

let numbers = [2, 4, 6, 8, 10, 12, 14];
const res = squareSumAvg(numbers);
console.log(res);
