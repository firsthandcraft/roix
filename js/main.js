window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});