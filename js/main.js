const backToTopBtn = document.getElementById('btn-back-to-top');

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    if (scrollY > 400) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

function scrollToTop() {
    const currentPosition = window.scrollY || document.documentElement.scrollTop;

    if (currentPosition > 0) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  
        });
    }
}

backToTopBtn.addEventListener('click', scrollToTop);
