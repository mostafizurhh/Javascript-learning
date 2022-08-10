// 'myComputer' is the name of an object and informations inside it are its properties. These properties are called keys. Keys should be in pair and every key should be seperated by a comma. All properties must be inside a 2nd bracket. 

var myComputer = {
    brand: 'Apple',
    category: 'iMac',
    price: 50000,
    processor: 'i7',
    storage: '1TB',
    color: 'Silver'
}

// console.log(myComputer);

// to get all the keys/values of an object ---> Object.keys/values(objectname)
console.log(Object.keys(myComputer));
console.log(Object.values(myComputer));

// to get only a key from an object --> objectname.keyname
console.log(myComputer.brand);

// to change a key's value ----> objectname.keyname = new value
myComputer.category = 'macbook';
console.log(myComputer);