/*************MultiLine String Old Method***************/
const paragraph = 'I am learning \n' + 'webdevelopment \n' + 'with Jhankar mahabub.\n' + 'Its really a nice experience';
// console.log(paragraph);

/*************MultiLine String New Method using (``) backtik***************/
const paragraph1 = `I am learning webdevelopment 
with Jhankar Mahabub.
It's really a nice experience.`;
// console.log(paragraph1);

const a = 12;
const b = 13;
// const summary = 'sum of ' + a + ' and ' + b + ' is: ' + (a + b);
const summary = `Sum of ${a} and ${b} is ${a + b}`; //we can write any JS expression or function inside ${}.
console.log(summary);