// X dan O
function xo(str) {
    var x = 0;
    var o = 0;

    for (i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            x = x + 1;
            console.log('nilai x' + x)
        } else {
            o = o + 1;
        }
    }
    return x === o;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true