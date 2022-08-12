function reverseString(string) {
    let reversed = '';
    for (i = string.length - 1; i >= 0; i--) {
        let element = string[i];
        reversed = reversed + element;
    }
    return reversed;
}

let str = 'I am reading';
let String = reverseString(str);
console.log(String);
