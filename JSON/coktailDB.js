const loadData = () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.drinks))
}

loadData()