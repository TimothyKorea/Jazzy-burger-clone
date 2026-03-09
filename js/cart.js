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