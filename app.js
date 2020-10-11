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


// Animation écritures

const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
})

typewriter
    .pauseFor(1800)
    .changeDelay(50)
    .typeString(`Bonjour, je m'appelle Jossic,  `)
    .pauseFor(300)
    .typeString(`je suis <strong> Développeur HTML</strong> !`)
    .pauseFor(1000)
    .deleteChars(6)
    .pauseFor(400)
    .typeString(`<span style="color: #27ae60">CSS</span> !`)
    .pauseFor(1000)
    .deleteChars(5)
    .pauseFor(400)
    .typeString(`<span style="color: #ff8300">Full-Stack JS (MERN Stack)</span> !`)
    .start()