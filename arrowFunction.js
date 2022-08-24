// ******* Function Declaration *********
function add(num1, num2) {
    const total = num1 + num2;
    return total;
}

// ********** Function Expression ********
const add1 = function add(num1, num2) {
    const total = num1 + num2;
    return total;
}
// ********** Function Expression With Annonymous ********
const add2 = function (num1, num2) {
    const total = num1 + num2;
    return total;
}

const add3 = function (num1, num2) {
    return num1 + num2;
}

// ********** Arrow Function ********
const add4 = (num1, num2) => num1 + num2; // nedd to declare a variable name for the function 

// ********** Single Line Arrow Function ********
const add5 = num => num * 4;
const getPie = () => 3.14; //no parameter
const add6 = (a, s, d, f) => (a + s + d + f); //multiple parameter

// ********** Multi Line Arrow Function ********
const multiLine = (a, s, d) => {
    const adding = a + s;
    const multiplying = s * d;
    const total = adding + multiplying;
    return total; //must write return if you want to return something from the function.
}


const sum = add4(12, 13);
console.log(sum);