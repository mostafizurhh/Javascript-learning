// load all divs
const loadData = () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDiv(data.drinks))
}
const displayDiv = (cocktails) => {
    console.log(cocktails);
    const showDiv = document.getElementById('cocktailContainer');
    cocktails.forEach(cocktail => {
        const cocktailDiv = document.createElement('div');
        cocktailDiv.innerHTML = `
        <div class="col">
                    <div class="card h-100">
                        <img src="${cocktail.strDrinkThumb}" class="card-img-top img-fluid">
                        <div class="card-body">
                            <h5 class="card-title">${cocktail.strDrink}</h5>
                            <p class="card-text">${cocktail.strInstructions.slice(0, 30)}</p>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cocktailModal" onclick="showDetails(${cocktail.idDrink})">
                            Show Details
                            </button>
                        </div>
                    </div>
                </div>
        `
        showDiv.appendChild(cocktailDiv);
    });
}
// show modals
const showDetails = (id) => {
    console.log(id);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => showModals(data.drinks[0]))
}
const showModals = cocktails => {
    const modalTitle = document.getElementById('cocktailModalLabel');
    modalTitle.innerText = cocktails.strGlass;
    const modalBody = document.getElementById('body');
    modalBody.innerHTML = `
    <p>${cocktails.strInstructions}</p>
    `
}
loadData()