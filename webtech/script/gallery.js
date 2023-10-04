document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnails img");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImage = document.querySelector(".lightbox-image");
    const closeButton = document.querySelector(".close");

    // Open the lightbox with the clicked image
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            lightboxImage.src = thumbnail.src;
            lightbox.style.display = "block";
        });
    });

    // Close the lightbox when the close button is clicked
    closeButton.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

});
