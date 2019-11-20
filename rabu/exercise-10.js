//1. Menyusun Barisan Bintang
console.log("1. Menyusun Barisan Bintang");
var rows1=5;
for(i=1;i<=rows1;i++){
    console.log('*');
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
console.log("2. Menyusun Barisan Bintang Dengan Nested Looping");
var rows2=5;
var star2='';
for(i=1;i<=rows2;i++){
    for(j=rows2;j>=1;j--) {
        star2 += '*';
    }
    star2+='\n'
}
console.log(star2);

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log("3. Menyusun Barisan Tangga Bintang Dengan Nested Looping");
var rows3=5;
var star3='';
for(i=1;i<=5;i++){
    for(j=1;j<=i;j++) {
        star3 += '*';
    }
    star3+='\n';

}
console.log(star3);
