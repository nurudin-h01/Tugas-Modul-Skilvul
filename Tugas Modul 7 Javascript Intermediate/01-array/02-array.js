// 2
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(x) {
    let total = 0;
    let rata = 0;
    let bil = 0;

    for (let i = 0; i < x.length; i++) {
        total = total + x[i];
    }
    rata = total / x.length;
    for (let j = 0; j < x.length; j++) {
        if (x[j] > rata) {
            bil = bil + 1;
        } else {
            bil = bil + 0;
        }
    }
    return bil
}
console.log(getAverage(arr1)) //Ada 2 bilangan yang melebihi nilai rata-rata yaitu 4 & 8
console.log(getAverage(arr2)) // Ada 3 bilangan yang melebihi nilai rata-rata yaitu 6, 7, dan 8