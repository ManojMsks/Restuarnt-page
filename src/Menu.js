import BrisketImg from './brisket.jpg';
import RibsImg from './ribs.jpg';
import ChickenImg from './chicken.jpg';
import WingsImg from './wings.jpg';

// This helper function creates a single food card
function createMenuItem(name, description,image) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item'); 

    const foodName = document.createElement('h3');
    foodName.textContent = name;

    const foodDesc = document.createElement('p');
    foodDesc.textContent = description;

    const foodImage = document.createElement('img'); 
    foodImage.src=image;
    foodImage.alt = name;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDesc);

    return menuItem;
}

export default function loadMenu() {
    const content = document.getElementById('content');
    
    content.textContent = '';
    content.appendChild(createMenuItem("Smoked Brisket", "Slow-smoked for 12 hours.", BrisketImg));
    content.appendChild(createMenuItem("BBQ Ribs", "Fall-off-the-bone pork ribs.", RibsImg));
    content.appendChild(createMenuItem("Grilled Chicken", "Lemon and herb grilled.", ChickenImg));
    content.appendChild(createMenuItem("Buffalo Wings", "Spicy and crispy.", WingsImg));

  
}