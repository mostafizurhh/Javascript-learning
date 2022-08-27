fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
//.then(json => console.log(json))


function fetchData() {
    const user = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(user)
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
}
