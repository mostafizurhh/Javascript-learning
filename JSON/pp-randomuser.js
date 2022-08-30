const showRandomUser = () => {
    const url = `https://randomuser.me/api/?gender=male`
    fetch(url)
        .then(res => res.json())
        .then(data => displayUser(data.results))
}

const displayUser = (users) => {
    console.log(users);
    const displayContainer = document.getElementById('displayUser')
    users.forEach(user => {
        const userDiv = document.createElement('div')
        userDiv.innerHTML = `
    <div class="userBg" onclick="showUser('${user.cell}')">
        <h3> User Name: ${user.name.first} ${user.name.last}, <br>
        Location:
        ${user.location.street.name} ${user.location.street.number}, <br>
        ${user.location.postcode} ${user.location.city}, ${user.location.state} <br>
        ${user.location.country} <br>
        ${user.email}
        </h3>
        <img src=${user.picture.medium}>
    </div>
    `
        displayContainer.appendChild(userDiv);
    });
}

const showUser = (cell) => {
    console.log(cell);
    const url = `https://randomuser.me/api/?gender=male/cell=${cell}`
    fetch(url)
        .then(res => res.json())
        .then(data => singleUser(data.results[0]))
}
const singleUser = (user) => {
    console.log(user)
    const userContainer = document.getElementById('individual')
    userContainer.innerHTML = `
    <h3>${user.cell}</h3>
    `
}
showRandomUser()