const loadAllFood = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
}

const displayFood = (meals) => {
    const mealContainer = document.getElementById('foodMenu');
    mealContainer.innerHTML = ``;
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 300)}</p>
            </div>
        </div>
        `
        mealContainer.appendChild(mealDiv);
    });
}

const searchFood = () => {
    const input = document.getElementById('inputField');
    const inputText = input.value;
    loadAllFood(inputText);
    input.value = ''
}
document.getElementById('inputField').addEventListener('keyup', function (event) {
    const input = document.getElementById('inputField');
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById('searchBtn').click();
    }
})

loadAllFood('a')