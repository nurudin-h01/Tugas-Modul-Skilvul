for (var i = 1; i <= 5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    fungsi(i)
}

function myFunction(index) {
    setTimeout(() => console.log("second log: ", index), 100);
}

function fungsi(ind) {
    myFunction(ind)
}