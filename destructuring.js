/* Array Destructuring */

const num = [2, 3, 4, 5, 6];
const [ami, tumi] = num; //could be any variable name and will store the value orderly
console.log(tumi);

function family() { return ['Abba', 'Chacha'] };
const [dad, uncle] = family();
console.log(uncle, dad);

/* Object Destructuring */
const phone = {
    name: 'iPhone',
    model: 13,
    camera: '13MP',
    price: 40000,
    memory: '256GB'
}
const { memory, model, camera } = phone; //variable name must be same as object property
console.log(memory);

const division = num1, num2 => console.log(num1 / num2);
console.log(division(4, 2));