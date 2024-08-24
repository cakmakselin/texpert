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

// Make selected product list visible
document.addEventListener("DOMContentLoaded", function() {
    var productList = document.querySelector('.product-list');

    setTimeout(function() {
        productList.classList.add('show');
    }, 0); // Delay to ensure the page has fully loaded
});

// Make selected product list visible

$(document).ready(function(){
    $('.carousel-container').slick({
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});


$(document).ready(function(){
    $('.carousel-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        infinite: true,
        centerMode: true,
        centerPadding: '0',
        speed: 600,
        focusOnSelect: true,
        cssEase: 'ease-out'
    });

    // Increase size of the selected card
    $('.carousel-container').on('afterChange', function(event, slick, currentSlide){
        $('.carousel-card').removeClass('selected');
        $('.carousel-card').eq(currentSlide + 1).addClass('selected');
    });

    // Initial selection
    $('.carousel-card').eq(1).addClass('selected');
});


//scrollRestoration

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPosition', window.scrollY);
});

// Restore scroll position on page load
window.addEventListener('load', () => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
        sessionStorage.removeItem('scrollPosition'); // Remove saved position after restoring
    }
});

