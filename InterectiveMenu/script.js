document.querySelector('.c-hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('is-active');
})