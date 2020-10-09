const btn = document.querySelector('.btn');
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    nav.classList.toggle('menu-visible');

})

if (window.matchMedia('max-width: 1300px')) {
    allItemNav.forEach((item) => {
        item.addEventListener('click', () => {
            btn.classList.toggle('active');
            nav.classList.toggle('menu-visible');
        })
    })
}