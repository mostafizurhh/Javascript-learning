const loadPlayers = (search) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPlayers(data.player))
}

const displayPlayers = (players) => {
    console.log(players)
    const playerContainer = document.getElementById('loadPlayer')
    playerContainer.innerHTML = '';
    players.forEach(player => {
        const playersDiv = document.createElement('div');
        playersDiv.innerHTML = `
        <div class="playerDiv" onclick="showDiv('${player.strNationality}')">
            <h5>Player ID: ${player.idPlayer}</h5>
            <h5>Team ID: ${player.idTeam}</h5>
            <h5>Country: ${player.strNationality}</h5>
            <h5>Description: ${player.strDescriptionEN}</h5>
        </div>
        `
        playerContainer.appendChild(playersDiv)
    });
}
const searchCountry = () => {
    const input = document.getElementById('inputField');
    const inputtext = input.value;
    loadPlayers(inputtext);
    input.value = ''
}
document.getElementById('inputField').addEventListener('keyup', function (event) {
    const input = document.getElementById('inputField');
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById('searchBtn').click();
    }
})

const showDiv = (Nationality) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${Nationality}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaydiv(data.player))
}
const displaydiv = (Player) => {
    console.log(Player)
    const divContainer = document.getElementById('displayDiv');
    divContainer.innerHTML = `
        <h3>description: ${Player.strNationality}</h3>
        `;
}
loadPlayers('')