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

// Animation ScrollMagic GSAP presentation

const presentContainer = document.querySelector('.presentation');
const titrePres = document.querySelector('.titre-pres');
const presGauche = document.querySelector('.pres-gauche');
const listePres = document.querySelectorAll('.item-liste');

const tlpres = new TimelineMax();

tlpres
    .from(titrePres, { y: -200, opacity: 0, duration: 0.6 })
    .from(presGauche, { y: -20, opacity: 0, duration: 0.6 }, '-=0.5')
    .staggerFrom(listePres, 1, { opacity: 0 }, 0.2, '-=0.5')

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: presentContainer,
    triggerHook: 0.5,
    reverse: false
})
    .setTween(tlpres)
    // .addIndicators()
    .addTo(controller)

// Anim portfolio

const portfolioContainer = document.querySelector('.portfolio');
const titrePortfolio = document.querySelector('.titre-port');
const itemPortfolio = document.querySelectorAll('.vague1');

const tlPortfolio = new TimelineMax();

tlPortfolio
    .from(titrePortfolio, { y: -50, opacity: 0, duration: 0.5 })
    .staggerFrom(itemPortfolio, 1, { opacity: 0 }, 0.2, '-=0.5')

const scene2 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook: 0.5,
    reverse: false
})

    .setTween(tlPortfolio)
    // .addIndicators()
    .addTo(controller)

// Vague 2

const itemPortfolio2 = document.querySelectorAll('.vague2');

const tlPortfolio2 = new TimelineMax();

tlPortfolio2
    .staggerFrom(itemPortfolio2, 1, { opacity: 0 }, 0.2, '-=0.5')

const scene3 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio,
    triggerHook: 0.2,
    reverse: false
})

    .setTween(tlPortfolio2)
    // .addIndicators()
    .addTo(controller)

// Vague 3

const itemPortfolio3 = document.querySelectorAll('.vague3');

const tlPortfolio3 = new TimelineMax();

tlPortfolio3
    .staggerFrom(itemPortfolio3, 1, { opacity: 0 }, 0.2, '-=0.5')

const scene4 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio2,
    triggerHook: 0.2,
    reverse: false
})

    .setTween(tlPortfolio3)
    // .addIndicators()
    .addTo(controller)