const loadUserData = () => {
    fetch('https://randomuser.me/api/?results=15')
        .then(res => res.json())
        .then(data => loadUser(data.results))
}

const loadUser = users => {
    const usersDiv = document.getElementById('userDiv');
    for (const user of users) {
        const newDiv = document.createElement('div');
        newDiv.style.backgroundColor = 'lightcoral'
        newDiv.style.padding = '15px';
        newDiv.style.margin = '10px';
        newDiv.style.borderRadius = '10px';
        newDiv.innerHTML = `
        <h3>User name: ${user.name.first} ${user.name.last}</h3>
        <h4>User email: ${user.email}</h4>
        <h5>User phone: ${user.cell}</h5>
        <h6>User location: ${user.location.city}, ${user.location.country}</h6>
        `;
        usersDiv.appendChild(newDiv);
    }
}

loadUserData()