// 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even numbers). [2, 4, 6, 8, 10 ]. Do this using for loop & array.map() method. Hints: add one to any odd number and it will become an even number.

/* Solution 1: */
const oddArray = [1, 3, 5, 7, 9];
const evenArray = oddArray.map(x => x + 1);
console.log(evenArray);

// 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now return/get all the elements which are divisible by 10 using array.filter() method.

/* Solution 2: */
const givenArray = [33, 50, 79, 78, 90, 101, 30];
const filterArray = givenArray.filter(x => x % 10 == 0);
console.log(filterArray);

// 3) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now return/get the elements which are divisible by 10 using array.find() method.

/* Solution 3: */
const array = [33, 50, 79, 78, 90, 101, 30];
const findArray = array.find(x => x % 10 == 0);
console.log(findArray);

// 4) You have an array [ 1, 9, 17, 22 ]. Add the all elements of this array and give output. Do this using for loop & array.reduce() method.

/* Solution 4: */
const firstArray = [1, 9, 17, 22];
let sum = 0;
for (let element of firstArray) { sum = sum + element };
console.log(sum);

/* OR */
const result = firstArray.reduce((previous, current) => previous + current, 0);
console.log(result);

// 5) Follow bellow array of objects. So, you have 3 objects as array element. Can you find out the total sum from here? 20 + 15 + 22 = 57 . The output will be 57, What are you thinking? Yeah! Do it with for loop. I know you can do it. But! Wait !! Wait !!! Do the same task using array.reduce() method.

/* Solution 5: */
const peoples = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Tina', age: 22 }
];
let age = 0;
for (let people of peoples) { age = people.age + age };
console.log(age);
// OR
const ageTotal = peoples.reduce((previous, current) => previous + current.age, 0);
console.log(ageTotal);

// 6) console the value of age from the below object.
/* Solution 6: */
const student = { name: 'raja', age: 26 };
console.log(student.age);

// 7) Console the value of city from bellow object.
/* Solution 7: */
let data = {
    location: [
        {
            latitude: '34.5,37.8',
            longitude: '98.7,58.7',
            city: 'Dhaka',
            country: 'Bangladesh'
        }
    ]
}
console.log(data.location[0].city);

// 8) console the followings from the bellow object. 
// *Console the value of email
// *Console the value of address
// *Console the value of city
// *Console the value of lat
// *Console the value of company name

/* Solution 8: */
const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

console.log(user.email);
console.log(user.address);
console.log(user.address.city);
console.log(user.address.geo.lat);
console.log(user.company.name);