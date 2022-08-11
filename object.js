// 'myComputer' is the name of an object and informations inside it are its properties. These properties are called keys. Keys should be in pair and every key should be seperated by a comma. All properties must be inside a 2nd bracket.

// var myComputer = {
//     brand: 'Apple',
//     category: 'iMac',
//     price: 50000,
//     processor: 'i7',
//     storage: '1TB',
//     color: 'Silver'
// }

// console.log(myComputer);

// to get all the keys/values of an object ---> Object.keys/values(objectname) and can be kept in a variable.

// console.log(Object.keys(myComputer));
// console.log(Object.values(myComputer));
// var keys = Object.keys(myComputer);
// console.log(keys);
// var values = Object.values(myComputer);
// console.log(values);

// to get a known key/value from an object --> objectname.keyname or objectname['keyname'] or {objectname['variablename'] --> key name can be stored in a variable}

// console.log(myComputer.brand);
// console.log(myComputer['color']);
// var computerStorage = 'storage';
// console.log(myComputer[computerStorage]);

// to change a key's value ----> objectname.keyname = new value or objectname[keyname] = new value or {objectname[variablename] = new value} --> key name can be stored in a variable

// myComputer.category = 'macbook';
// myComputer['storage'] = '2TB';
// var processorName = 'processor'
// myComputer[processorName] = 'i9'
// console.log(myComputer); 

// looping through object

// var myComputer = {
//     brand: 'Apple',
//     category: 'iMac',
//     price: 50000,
//     processor: 'i7',
//     storage: '1TB',
//     color: 'Silver'
// }

// var keys = Object.keys(myComputer);
// // console.log(keys);
// var values = Object.values(myComputer);
// console.log(values);
// var keys = [ 'brand', 'category', 'price', 'processor', 'storage', 'color' ]
// var values = [ 'Apple', 'iMac', 50000, 'i7', '1TB', 'Silver' ]

/* for loop */
// for (var i = 0; i < keys.length; i++) {
//     // console.log(keys[i]); 
//     var propertyName = keys[i];
//     var propertyValues = myComputer[propertyName];
//     console.log(propertyName, propertyValues);
// }

// for in loop

// for (var propertyName in myComputer) {
//     var propertyValues = myComputer[propertyName];
//     console.log(propertyName, propertyValues);
// }
// console.log(Object.entries(myComputer));

// var smartphone = { brand: "iPhone", model: "13" };
// console.log(smartphone["brand"]);

