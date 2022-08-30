loadquote = () => { //function with no parameter
    fetch('https://api.kanye.rest/') //get data from website
        .then(res => res.json())
        .then(data => getQuote(data)) //call function from bellow to show on UI
}

getQuote = data => { //declare function to get quotes
    const blockQuotes = document.getElementById('quotes'); //connect with html file where quotes will be inserted
    blockQuotes.innerText = data.quote; //set quotes as innerText
}