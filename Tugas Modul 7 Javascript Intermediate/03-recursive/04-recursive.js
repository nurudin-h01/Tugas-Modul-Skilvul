
///4
function trianglePattern(j, k) {
    if (j === 0) {
        return;
    }
    let blank_space = "";
    for (let i = 0; i < k; i++) {
        if (i < j - 1) {
            blank_space += " "
        } else {
            blank_space += String.fromCharCode(64 + (k - j + (i - j) + 2))
        }
    }
    console.log(blank_space);
    trianglePattern(j - 1, k)
}

trianglePattern(5, 5);
