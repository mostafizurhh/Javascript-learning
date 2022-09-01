//****************show all photos as div from JSON Placeholder***************

const loadPhotos = () => {
    const url = `https://jsonplaceholder.typicode.com/photos`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhotos(data.slice(0, 12)))
}
const displayPhotos = (photos) => {
    console.log(photos);
    const photosContainer = document.getElementById('photoContainer');
    photos.forEach(photo => {
        const photoDiv = document.createElement('div');
        photoDiv.innerHTML = ` 
        <div class="col" onclick="clickOnDiv(${photo.id})">
                    <div class="card h-100">
                        <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${photo.albumId}</h5>
                            <p class="card-text">This is a longer card with supporting text.</p>
                            <button onclick="showDivDetails(${photo.id})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#photoInfoModal">
                            Show Details</button>
                        </div>
                    </div>
        </div>
        `
        photosContainer.appendChild(photoDiv);
    });
}

//**************show same div on top which got clicked*****************

const clickOnDiv = (id) => {
    const url = `https://jsonplaceholder.typicode.com/photos?id=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDiv(data[0]))
}
const showDiv = photo => {
    console.log(photo);
    const showClicked = document.getElementById('showClickedDiv');
    showClicked.innerHTML = `
    <div class="card h-25 w-25">
    <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${photo.id}</h5>
    <p class="card-text">This is a longer card with supporting text.</p>
    </div>
    </div>                
    `
}

//**************show modal by clicking button*****************

const showDivDetails = (id) => {
    const url = `https://jsonplaceholder.typicode.com/photos?id=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDivPhotos(data[0]))
}
const showDivPhotos = photo => {
    const modalTitle = document.getElementById('photoInfoModalLabel');
    modalTitle.innerText = photo.title;
    const showModalBody = document.getElementById('modalBody');
    showModalBody.innerHTML = `
        <img src="${photo.url}" class="card-img-top mb-3 h-25" alt="...">
        <img src="${photo.thumbnailUrl}" class="card-img-top h-25" alt="...">
        <h5 class="card-title">${photo.id}</h5>
        <p class="card-text">This is a longer card with supporting text.</p>            
`
}
loadPhotos()