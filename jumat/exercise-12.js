//konversi menit
function konversiMenit(menit) {
    var jam = parseInt (menit/60);
    var menit1 = menit%60;
    var menit2 = '';
    if(menit1<10) {
        menit2 = '0'+menit1;
    } else {
        menit2 = menit1;
    }
    return jam+ ':'+menit2;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00