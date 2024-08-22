document.addEventListener('scroll', function() {
    const imageBox = document.querySelector('.image-box');
    const scrollPosition = window.scrollY;
    const scaleValue = 1 + (scrollPosition / 4000); // Adjust divisor for zoom intensity

    imageBox.style.transform = `scale(${scaleValue})`;

    // Textbox fade-in effect
    const textbox = document.querySelector('.textbox');
    const textboxOffset = textbox.offsetTop;
    const screenHeight = window.innerHeight;
    const textboxHeight = textbox.offsetHeight;    
    const viewportMiddle = scrollPosition + (screenHeight / 2);    
    const textboxMiddle = textboxOffset + (textboxHeight / 2);    
    const distanceFromCenter = Math.abs(viewportMiddle - textboxMiddle);    
    const maxDistance = screenHeight / 2;
    
    let opacity = 1 - (distanceFromCenter / maxDistance);
    opacity = Math.max(0, Math.min(1, opacity));
    textbox.style.opacity = opacity;
});

document.addEventListener('DOMContentLoaded', () => {
    const languageToggle = document.querySelector('.language-toggle');
    const languageDropdown = document.querySelector('.language-dropdown');
    
    languageToggle.addEventListener('click', () => {
        languageDropdown.classList.toggle('active');
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.product-carousel');
    const productList = document.querySelector('.product-list');
    const carouselCards = document.querySelectorAll('.carousel-card');

    carouselCards.forEach(card => {
        card.addEventListener('click', function() {
            const targetPage = card.getAttribute('data-target');
            if (targetPage) {
                carouselContainer.classList.add('hidden');
                productList.classList.add('show');
                
                setTimeout(() => {
                    window.location.href = targetPage; // Navigate to the target page
                }, 200); // Match this delay with the duration of the transition
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the product list element
    var productList = document.querySelector('.product-list');

    // Add the 'show' class after a short delay to trigger the animation
    setTimeout(function() {
        productList.classList.add('show');
    }, 100); // Delay to ensure the page has fully loaded
});

$(document).ready(function(){
    $('.carousel-container').slick({
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});



