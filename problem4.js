const fineMaxMinNumber = (a, b) => {
    const newArr = [...a,...b];
    const res = `Max no : ${Math.max(...newArr)} and min no : ${Math.min(...newArr)}`;
    return res;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = [4, 5, 6, 7, 66, 44, 11, 34, 21];
const res = fineMaxMinNumber(arr1, arr2);
console.log(res);