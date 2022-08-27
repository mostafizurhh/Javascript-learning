function userData() { //1. this function should be used in html file
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => loadUserData(data)) //2. to call a function to see the data
}

function loadUserData(data) { //3. create the same function that is called above
    const ul = document.getElementById('listItem'); //3.a) create blank 'ul' inside html and get that 'ul' here
    for (const user of data) { //3.b) running for loop to get all the elements from the original data
        const li = document.createElement('li'); //3.c) create a 'li' to show each element
        li.innerText = user.address.city; //3.d) set the li's innertext to whatever data we want to get from the original data with the help of dot notation
        ul.appendChild(li); //3.e) append each 'li' inside 'ul' to display as output
    }
}