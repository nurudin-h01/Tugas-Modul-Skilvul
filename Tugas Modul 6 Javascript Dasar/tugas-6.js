/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// - ada 2, yaitu local scope dan global scope
/// - a) local scope adalah code yang berada didalam block seperti penggunaan pada fungsi, conditional dan looping
///   b) Global scope adalah code yang berada diluar curly bracket {}
/// - a )implementasi local scope:
///      function numbers() {
///          let number = 2
///      }
///   b )implementasi global scope:
///      let word = "skilvull"


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// - output yang ditampilkan adalah "Mariah"
/// - karena name yang ada pada fungction tersebut adalah parameter dan tidak berkaitan langsung dengan global variabel
///   meskipun memiliki kesamaan nama, dan jika ingin menampilkan nama maka harus menggunakan function tersebut dan diikuti dengan parameter


const name = "John Watson";

function printFirstName(name) {
    return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));