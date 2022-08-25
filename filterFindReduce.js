// filter will give all matching elements as an array based on a condition
const friends = ['ami', 'tumi', 'shihan'].filter(x => (x.length) % 2 == 0);
console.log(friends);

// find will give only the first matching element based on a condition 
const friends1 = ['ami', 'tumi', 'shihan'].find(x => (x.length) % 2 == 0);
console.log(friends1);

// reduce will give only one result based on condition
const number = [3, 4, 5, 6, 7].reduce((previous, current) => previous * current, 1);
console.log(number);