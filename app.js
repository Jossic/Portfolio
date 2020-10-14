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

// Animations input

const inputFields = document.querySelectorAll('input');

for (let i = 0; i < inputFields.length; i++) {
    let field = inputFields[i];

    field.addEventListener('input', (e) => {
        e.target.value !== '' ?
            e.target.parentNode.classList.add('animation') :
            e.target.parentNode.classList.remove('animation')
    })
}

// Anim GSAP + ScrollMagic

const navbar = document.querySelector('.nav-gauche');
const titre = document.querySelector('h1');
const btnAcc = document.querySelectorAll('.btn-acc');
const btnMedias = document.querySelectorAll('.media');
const btnRondAccueil = document.querySelector('.btn-rond');



const TL1 = gsap.timeline({ paused: true });

TL1
    .to(navbar, { left: '0px', ease: Power3.easeOut, duration: 0.6 })
    .from(titre, { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.6 })
    .staggerFrom(btnAcc, 1, { opacity: 0 }, 0.2, '-=0.30')
    .staggerFrom(btnMedias, 1, { opacity: 0 }, 0.2, '-=0.75')
    .from(btnRondAccueil, { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 }, '-=1')

window.addEventListener('load', () => {
    TL1.play();
})