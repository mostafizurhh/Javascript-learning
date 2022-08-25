/* create an object from a Class Name */

class Instructor { //class name must be start with capital letter
    name;
    designation = 'instructor' //need to use '=' sign, no ',' ';' ':'
    team = 'web'
    location;
    constructor(name, location) { //must use 'constructor' keyword for missing info
        this.name = name; //must use 'this' keyword with the variable name
        this.location = location;
    }
    makeQuiz(moduleNo) { //function is called method 
        console.log(`please make a quiz for module no ${moduleNo}`) //can use dynamic value by using backtik(``).
    }
}

// const raj = new Instructor;

const raj = new Instructor('raj', 'khulna'); //create new object with class name. must use 'new' keyword to create new object.
raj.makeQuiz('20'); //call function from class
console.log(raj);

