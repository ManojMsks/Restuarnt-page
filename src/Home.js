// 1. IMPORT THE IMAGE AT THE TOP
// You can name 'ChefImage' whatever you want
import ChefImage from './bbq.jpg'; 

export default function loadHome() {
    let content = document.getElementById('content');
    content.textContent = '';

    const header = document.createElement('h1');
    header.textContent = "Welcome to BBQ";

    const textlines = document.createElement('p');
    textlines.textContent = "We serve authentic BBQ homemade dry and fruity...";

    const img = document.createElement('img');
    
    // 2. ASSIGN THE IMPORTED VARIABLE TO THE SRC
    img.src = ChefImage; 
    img.alt = "chicken grilled";

    // Optional: Add a class for styling
    img.classList.add('home-img');

    content.appendChild(header);
    content.appendChild(textlines);
    content.appendChild(img);
}