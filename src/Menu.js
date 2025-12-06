// This helper function creates a single food card
function createMenuItem(name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item'); 

    const foodName = document.createElement('h3');
    foodName.textContent = name;

    const foodDesc = document.createElement('p');
    foodDesc.textContent = description;

    const foodImage = document.createElement('img'); 
    foodImage.alt = name;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDesc);

    return menuItem;
}

export default function loadMenu() {
    const content = document.getElementById('content');
    
    // IMPORTANT: Wipe out previous content (like the Home page)
    content.textContent = '';

    // Create the items
    const item1 = createMenuItem(
        "Smoked Brisket", 
        "Slow-smoked for 12 hours, tender and juicy."
    );
    
    const item2 = createMenuItem(
        "BBQ Ribs", 
        "Fall-off-the-bone pork ribs with our secret sauce."
    );

    const item3 = createMenuItem(
        "Grilled Chicken", 
        "Marinated in lemon and herbs, grilled to perfection."
    );

    const item4 = createMenuItem(
        "Buffalo Wings", 
        "Spicy and crispy wings served with ranch dip."
    );

    // Append them all to the content div
    content.appendChild(item1);
    content.appendChild(item2);
    content.appendChild(item3);
    content.appendChild(item4);
}