import loadHome from './Home.js';
import loadMenu from './Menu.js';
import loadAbout from './About.js';

// 1. Select your buttons
const homeBtn = document.querySelector('nav button:nth-child(1)'); 
const menuBtn = document.querySelector('nav button:nth-child(2)'); 
const aboutBtn = document.querySelector('nav button:nth-child(3)'); 


homeBtn.addEventListener('click', () => {
    loadHome();
});

menuBtn.addEventListener('click', () => {
    loadMenu();
});

aboutBtn.addEventListener('click', () => {
    loadAbout(); 
});

//Default load
loadHome();