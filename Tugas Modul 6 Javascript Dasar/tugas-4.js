/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
let list_number = ""
for (counter = 2; counter <= 100; counter = counter + 1) {
    prima = true;
    for (j = 2; j < counter; j++) {
        if (counter % j === 0) {
            prima = false;
        }
    }
    if (prima) {
        list_number += counter + ", ";
    }
}
list_number = list_number.slice(0, -2)
console.log(list_number)


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE
let y = 2;

while (primeCounter < 50) {
    let prime = true

    for (b = 2; b < y - 1; b++) {
        if (y % b == 0) {
            prime = false
            break
        }
    }

    if (prime) {
        primeCounter += 1
    }

    if (primeCounter == 50) {
        fiftiethPrime = y;
        console.log(fiftiethPrime)
    }
    y++
}


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
let x = 1
do {
    if (x % 2) {
        oddCounter += 1
    }
    if (oddCounter == 50) {
        fiftiethOdd = x;
        console.log(fiftiethOdd)
    }
    x++
} while (oddCounter < 50)