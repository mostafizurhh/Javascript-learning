// const allCountries = () => {
//     const url = `https://www.thesportsdb.com/api/v1/json/2/all_countries.php`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayCountries(data.countries))
// }

// const displayCountries = (countries) => {
//     console.log(countries)
//     const countryContainer = document.getElementById('country');
//     countries.forEach(country => {
//         const countryDiv = document.createElement('div');
//         countryDiv.classList.add('countryDiv');
//         countryDiv.innerHTML = `
//         <h3>Country Name: ${country.name_en} </h3>
//         `
//         countryContainer.appendChild(countryDiv)
//     });

// }
// allCountries()

const allLeagues = () => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/all_leagues.php`
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllLeagues(data.leagues))
}

const displayAllLeagues = (leagues) => {
    console.log(leagues)
    const leaguesContainer = document.getElementById('leagues');
    leagues.forEach(league => {
        const leagueDiv = document.createElement('div');
        leagueDiv.innerHTML = `
        <div class='leagueDiv' onclick="showSeasons(${league.idLeague})">
            <h4>League ID: ${league.idLeague}</h4>
            <h4>Sport Name: ${league.strSport}</h4>
            <h4>League Name: ${league.strLeague}</h4>
            <h4>League Alternate: ${league.strLeagueAlternate}</h4>
        </div>
        `
        leaguesContainer.appendChild(leagueDiv)
    });
}

const showSeasons = (idLeague) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_seasons.php?id=${idLeague}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySeasonInfo(data.seasons.slice(0, 3)))
}

const displaySeasonInfo = (allSeasons) => {
    console.log(allSeasons)
    const seasonContainer = document.getElementById('season');
    seasonContainer.innerHTML = '';
    allSeasons.forEach(season => {
        const seasonDiv = document.createElement('div');
        seasonDiv.innerHTML = `
       
            <h3 class = "seasoninfo">League Season: {${season.strSeason}}</h3>
      
        `
        seasonContainer.appendChild(seasonDiv)
    })
}
allLeagues()