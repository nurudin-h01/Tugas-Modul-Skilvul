//3
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
];

function searchInArray(x, s) {
    let value = true
    let temp = 0
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x[i].length; j++) {
            temp += 1
            if (x[i][j] === s) {
                return temp - 1
                value = false
                break
            }
        }
    }
    if (value) {
        return null
    }
}

console.log(searchInArray(arr, 3)); // null
console.log(searchInArray(arr, 2)); // 4
console.log(searchInArray(arr, 4)); // null
console.log(searchInArray(arr, 8)); // 5