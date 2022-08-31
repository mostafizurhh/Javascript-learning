const loadPhones = (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data.data, dataLimit))
}

const displayPhones = (phones, dataLimit) => {
    console.log(phones);
    const phoneContainer = document.getElementById('phonesContainer');
    phoneContainer.textContent = '';
    //display 10 items and showAll button 
    const showAllItems = document.getElementById('showAll');
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAllItems.classList.remove('d-none');
    }
    else {
        showAllItems.classList.add('d-none');
    }

    // //warning Message
    const noPhoneFound = document.getElementById('noPhone');
    if (phones.length === 0) {
        noPhoneFound.classList.remove('d-none');
    }
    else {
        noPhoneFound.classList.add('d-none');
    }

    // display all phones
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.innerHTML = ` 
        <div class="col">
                <div class="card h-100 p-2">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.brand}</h5>
                        <p class="card-text">${phone.phone_name}</p>
                        <button class="btn btn-primary" onclick="showPhoneDetails('${phone.slug}')" data-bs-toggle="modal" data-bs-target="#phoneModal">Show Details</button>
                    </div>
                    
                </div>
        </div>
        `
        phoneContainer.appendChild(phoneDiv);
    });
    /* stop loader */
    toggleSpinner(false);
}

const showAllItems = (dataLimit) => {
    /* start loader */
    toggleSpinner(true);
    const searchField = document.getElementById('inputField');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);
}
// handle search button click
document.getElementById('searchBtn').addEventListener('click', function () {
    showAllItems(10);
})

// initiale search btn with search field
document.getElementById('inputField').addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        showAllItems(10);
    }
})

// spinner function
const toggleSpinner = isLoading => {
    const spinner = document.getElementById('loader');
    if (isLoading) {
        spinner.classList.remove('d-none');
    }
    else {
        spinner.classList.add('d-none');
    }
}
// not the best way to show all items
document.getElementById('showAllBtn').addEventListener('click', function () {
    showAllItems();
})

// show each phone detail
const showPhoneDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data))
}

const displayPhoneDetail = (phone) => {
    console.log(phone);
    const phoneTitle = document.getElementById('phoneModalLabel');
    phoneTitle.innerText = phone.name;
    const phoneDetailContainer = document.getElementById('phoneDetail');
    phoneDetailContainer.innerHTML = `
    <p>Chipset: ${phone.mainFeatures.chipSet ? phone.mainFeatures.chipSet : 'No info found'}</p>
    <p>Display: ${phone.mainFeatures.displaySize ? phone.mainFeatures.displaySize : 'No info found'}</p>
    <p>Memory: ${phone.mainFeatures.memory ? phone.mainFeatures.memory : 'No info found'}</p>
    <p>Sensors: ${phone.mainFeatures.sensors ? phone.mainFeatures.sensors : 'No info found'}</p>
    <p> ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found'}</p>
    <img src="${phone.image}">
    `
}

loadPhones('app')