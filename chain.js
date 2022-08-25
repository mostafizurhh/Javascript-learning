const object = ['hi', 'hello', { name: 'Atom', id: 1234, phone: 'iphone' }, { color: 'red', size: 13, height: '6ft' }];

let array = object[3].height;
// console.log(array);

const object1 = {
    count: 500,
    data: [
        { id: 1, name: 'abul', age: 54 },
        { id: 2, name: 'babul', age: 45 },
        [23, 456, 676, 57]
    ]
}
console.log(object1.data[2][2]);
console.log(object1.data[1].name);
console.log(object1.data[0]?.ge);