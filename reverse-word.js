function reverseWordString(string) {
    let Split = string.split(' ');
    // console.log(Split);
    // [ 'I', 'am', 'reading' ]
    let reverse = '';
    for (i = Split.length - 1; i >= 0; i--) {
        let element = Split[i];
        reverse = reverse + ' ' + element;
    }
    return reverse;
}

let str = 'I am reading';
let reversed = reverseWordString(str);
console.log(reversed);