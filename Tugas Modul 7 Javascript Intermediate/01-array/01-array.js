//1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(arr) {
    const result = [];
    arr.forEach(function(value) {
        result.unshift(value);
    })
    return result;
};

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr); //[1, 2, 3], [3, 2, 1]
console.log(arr2, newArr2); //[8, 1, 5, 7], [7, 5, 1, 8]