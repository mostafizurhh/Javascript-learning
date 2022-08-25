// only applicable to Array elements

const numbers = [2, 3, 4, 5, 6, 7];
const output = [];
for (const number of numbers) {
    const doubleit = number * 2;
    output.push(doubleit);
}
// console.log(output);
/* 
1. get an array
2. for every elements of the array do something
3. store the value of new array
4. return the new array
*/
function doubleIt(numbers) { //normal function
    const output = [];
    for (const number of numbers) {
        // const doubleit = number * 2;
        const doubleit = doubleItOld(number);
        output.push(doubleit);
    }
    return output;
}

const doubleItOld = num => num * 2; //array function

let result = doubleIt(numbers); //normal process
console.log(result)

const makeDouble = numbers.map(doubleItOld);//map function
console.log(makeDouble);

const fourtimes = numbers.map(num => num * 4);//write function inside map
console.log(fourtimes);

const fiveTimes = [3, 4, 5].map(x => x * 5); //can write an array and function directly with different name
console.log(fiveTimes);




