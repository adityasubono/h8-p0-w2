//konversi menit
function konversiMenit(menit) {
    let jam = parseInt(menit / 60);
    let konversiMenit = menit % 60;
    let hasilMenit = '';
    if(konversiMenit<10) {
        hasilMenit = '0'+konversiMenit;
    } else {
        hasilMenit = konversiMenit;
    }
    return jam+ ':'+hasilMenit;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00