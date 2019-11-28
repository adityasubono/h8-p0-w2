// Soal 1 Melakukan Looping Menggunakan While
//Menggunakan While
let i = 1;
console.log('Looping Pertama (WHILE)\n')
while (i <= 20) {
    console.log(i + ' - I Love Coding')
    i++
}
let n = 20
console.log('Looping Kedua (WHILE) \n')
while (n >= 1) {
    console.log(n + ' - I Love Coding')
    n--
}

//Soal 2 Melakukan Looping Menggunakan For
console.log('Looping Pertama (FOR) \n')
for (i = 1; i <= 20; i++) {
    console.log(i + ' - I will become fullstack developer')
}
console.log('\n Looping Kedua (FOR) \n')
for (t = 20; t >= 1; t--) {
    console.log(t + ' - I will become fullstack developer')
}

//Soal 3 
//Angka Ganjil dan Genap
console.log('\n');
let m = 1;
while (m <= 100) {
    if (m % 2 === 0) {
        console.log('Counter Anda Nomer ' + m + ' Genap');
    } else {
        console.log('Counter Anda Nomer ' + m + ' Ganjil');
    }
    m++;
}

//pertambahan counter 2
console.log("\nPertambahan counter 2 kelipatan 3")
for (counter = 1; counter <= 100; counter = counter + 2) {
    if (counter % 3 === 0) {
        console.log(counter + " kelipatan 3");
    } else console.log("\"\"");
}

//pertambahan counter 5
console.log("\nPertambahan counter 5 kelipatan 6")
for (counter = 1; counter <= 100; counter = counter + 5) {
    if (counter % 6 === 0) {
        console.log(counter + " kelipatan 6");
    } else console.log("\"\"");
}

//pertambahan counter 5
console.log("\nPertambahan counter 9 kelipatan 10")
for (counter = 1; counter <= 100; counter = counter + 9) {
    if (counter % 10 === 0) {
        console.log(counter + " kelipatan 10");
    } else console.log("\"\"");
}