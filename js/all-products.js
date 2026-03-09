import {images} from "./all-products-data.js";

const burgerGrid = document.querySelector('.burger-image-grid');

function renderImages (imageList) {
    burgerGrid.innerHTML = '';

    for(let i = 0; i < imageList.length; i++) {
        let image = imageList[i];

        const productCard = document.createElement('a');
        productCard.href = "";
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <div class="card-dflex">
                <div class="image-wrapper">
                    <img class="burger-img" alt="burger image" src="${image.image}">
                    <img class="like-icon" alt="add to favorite" src="${image.likeIcon}">
                </div>
                
                <div class="burger-info">
                    <div class="dflex">
                        <h3 class="burger-name">${image.name}</h3>
                        <span class="burger-duration">${image.duration}</span>
                    </div>

                    <div class="dflex spacing">
                        <div class="rating-dflex">
                        <span>
                        <img class="burger-rating-star" src="${image.ratingStar}">
                        </span>
                        <span class="burger-rating-num">${image.rating}</span>
                        </div>

                        <div class="currency-dflex">
                        <span class="burger-currency">${image.currency}</span>
                        <span class="burger-price">${image.price}</span>
                        </div>
                    </div>

                    <div class="dflex">
                        <button class="add-btn" type="button">
                            <span>
                            <img class="burger-add-sym" src="${image.addSymbol}">
                            </span>
                            <span class="burger-add-btn">${image.actionType}</span>
                        </button>
                    </div>
                </div>
            </div>
        `
        burgerGrid.appendChild(productCard);
    }
}

renderImages(images);




const locationDropdown = document.querySelector('.location-control');
const topSiteLocation = document.querySelector('.top-site-locations');

locationDropdown.addEventListener('click', function() {
    topSiteLocation.classList.toggle('location-active');
})


const locationEl = document.querySelectorAll('.locations');
const presentLocation = document.querySelector('.location');
const dropDown = document.querySelector('.top-site-locations');

locationEl.forEach((items) => {
    items.addEventListener('click', function() {
        const label = items.querySelector('.locations-label');
        const redIcon = items.querySelector('.red-mark-icon');
        if(!label) {
            return;
        }

        document.querySelectorAll('.locations-label')
        .forEach((list) => {list.classList.remove('active')});

        label.classList.add('active');

        document.querySelectorAll('.red-mark-icon').forEach((icons) =>{
            icons.classList.remove('active');
        })

        redIcon.classList.add('active');

        presentLocation.textContent = label.textContent.trim();
        dropDown.classList.remove('location-active');
    })
})



const filterBtn = document.querySelector('.filter-btn');
const filters = document.querySelector('.filters')
filterBtn.addEventListener('click', function() {
    filters.classList.toggle('active');
    document.body.classList.toggle('filter-active');
})


const removeFilter = document.querySelector('.filter-remove-icon');
removeFilter.addEventListener('click', function() {
    filters.classList.remove('active');
    document.body.classList.remove('filter-active');
})


const sortingBtn = document.querySelector('.sorting-btn-wrapper');
const sortOptions = document.querySelector('.sort-options');
sortingBtn.addEventListener('click', function() {
    sortOptions.classList.toggle('active');
})