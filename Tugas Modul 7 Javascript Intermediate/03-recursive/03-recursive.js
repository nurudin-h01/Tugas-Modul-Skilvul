/// 3
const arr = [1, 2, 3, 4, 5];

function searchInArray(arr, number) {
    if (arr[arr.length - 1] === number) {
        console.log(`Angka ditemukan pada index : ${arr.length -1}`);
        return null
    }
    if (arr.length === 1) {
        console.log('Angka tidak ditemukan')
        return null
    }
    const arr_1 = arr.slice()
    arr_1.pop()
    return searchInArray(arr_1, number)
}
searchInArray(arr, 6); // "angka tidak ditemukan"
searchInArray(arr, 1); // "angka ditemukan pada index: 0"
searchInArray(arr, 8); // "angka tidak ditemukan"


