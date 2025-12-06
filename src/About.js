// Helper to create a founder card
function createFounder(name, role) {
    const card = document.createElement('div');
    card.classList.add('founder-card');

    const img = document.createElement('img');
    img.src = "https://via.placeholder.com/100"; // Placeholder for now
    img.alt = name;
    img.style.borderRadius = "50%"; // Quick inline style to make them circular

    const nameHeader = document.createElement('h3');
    nameHeader.textContent = name;

    const roleText = document.createElement('p');
    roleText.textContent = role;

    card.appendChild(img);
    card.appendChild(nameHeader);
    card.appendChild(roleText);

    return card;
}

export default function loadAbout() {
    const content = document.getElementById('content');
    
    // 1. CLEAR PREVIOUS CONTENT
    content.textContent = '';

    // --- SECTION 1: Main Heading ---
    const heading = document.createElement('h1');
    heading.textContent = "Our Founders";
    heading.classList.add('about-heading');

    // --- SECTION 2: The Three Founders (Grid/Flex container) ---
    const foundersContainer = document.createElement('div');
    foundersContainer.classList.add('founders-container'); // Use this class for Flexbox in CSS

    const founder1 = createFounder("Chef Mario", "Head Chef");
    const founder2 = createFounder("Luigi", "Sous Chef");
    const founder3 = createFounder("Peach", "Manager");

    foundersContainer.appendChild(founder1);
    foundersContainer.appendChild(founder2);
    foundersContainer.appendChild(founder3);

    // --- SECTION 3: Company Story ---
    const storyDiv = document.createElement('div');
    storyDiv.classList.add('company-story');
    
    const storyTitle = document.createElement('h2');
    storyTitle.textContent = "Our Story";
    
    const storyText = document.createElement('p');
    storyText.textContent = "We started this journey in 1995 with a simple grill and a dream. Our BBQ is made with love, patience, and secret spices passed down through generations. We believe in community, good food, and sticky fingers.";

    storyDiv.appendChild(storyTitle);
    storyDiv.appendChild(storyText);

    // --- SECTION 4: Footer / Contact ---
    const footer = document.createElement('div');
    footer.classList.add('about-footer');

    const contactHeader = document.createElement('h4');
    contactHeader.textContent = "Connect with us";

    // Simulating Icons with simple text links for now
    const socialLinks = document.createElement('p');
    socialLinks.innerHTML = `
        <a href="#">Instagram</a> | 
        <a href="#">Facebook</a> | 
        <a href="#">Twitter</a>
    `;

    footer.appendChild(contactHeader);
    footer.appendChild(socialLinks);

    // --- FINAL ASSEMBLY ---
    // Append everything to the main content div
    content.appendChild(heading);
    content.appendChild(foundersContainer);
    content.appendChild(storyDiv);
    content.appendChild(footer);
}