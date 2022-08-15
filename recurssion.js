// SUM NUMBER UP TO 5
function recurssion(number) {
    if (number == 1) { return 1; }

    return number + recurssion(number - 1);
}

let Recurssion = recurssion(5)
console.log(Recurssion);

/* FACTORIAL UP TO 5 */
function recursive(number) {
    if (number == 1) { return 1; }

    return number * recursive(number - 1);
}

let Recurssive = recursive(5);
console.log(Recurssive);

function compare(a, b) {
    if (a == b) {
        return true;
    } else {
        return false;
    }
}
const result = compare(15, "15");
console.log(result);

function compare(a, b) {
    if (a.toString() === b) {
        return true;
    } else {
        return false;
    }
}
const Result = compare(25, 25);
console.log(Result);

let a = 'hi'
let b = 'there'
console.log(a + b);

console.log("123" + 123);

