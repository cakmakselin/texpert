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


