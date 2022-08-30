const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => loadcountry(data))
}

const loadcountry = countries => {
    console.log(countries);
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('showCountry');
        countryDiv.innerHTML = `
            <h3>Country Name: ${country.name.common}</h3>
            <h4>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</h4>
            <h5>Continent: ${country.continents}</h5>
            <button onclick ="loadCountryDetail('${country.cca2}')">Details</button>
            `;
        countriesDiv.appendChild(countryDiv)
    });
}
const loadCountryDetail = (code) => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))

}

const displayCountryDetail = (country) => {
    const displayCountry = document.getElementById('countryDetail')
    displayCountry.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <img src ="${country.flags.png}">
    `;
}
loadCountries()
