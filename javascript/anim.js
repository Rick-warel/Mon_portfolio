window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.header-cont_nav');
    if (window.scrollY > 50) { // Adjust this value to determine when the color change should occur
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
