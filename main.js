/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/About.js":
/*!**********************!*\
  !*** ./src/About.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAbout)\n/* harmony export */ });\n// Helper to create a founder card\nfunction createFounder(name, role) {\n    const card = document.createElement('div');\n    card.classList.add('founder-card');\n\n    const img = document.createElement('img');\n    img.src = \"https://via.placeholder.com/100\"; // Placeholder for now\n    img.alt = name;\n    img.style.borderRadius = \"50%\"; // Quick inline style to make them circular\n\n    const nameHeader = document.createElement('h3');\n    nameHeader.textContent = name;\n\n    const roleText = document.createElement('p');\n    roleText.textContent = role;\n\n    card.appendChild(img);\n    card.appendChild(nameHeader);\n    card.appendChild(roleText);\n\n    return card;\n}\n\nfunction loadAbout() {\n    const content = document.getElementById('content');\n    \n    // 1. CLEAR PREVIOUS CONTENT\n    content.textContent = '';\n\n    // --- SECTION 1: Main Heading ---\n    const heading = document.createElement('h1');\n    heading.textContent = \"Our Founders\";\n    heading.classList.add('about-heading');\n\n    // --- SECTION 2: The Three Founders (Grid/Flex container) ---\n    const foundersContainer = document.createElement('div');\n    foundersContainer.classList.add('founders-container'); // Use this class for Flexbox in CSS\n\n    const founder1 = createFounder(\"Chef Mario\", \"Head Chef\");\n    const founder2 = createFounder(\"Luigi\", \"Sous Chef\");\n    const founder3 = createFounder(\"Peach\", \"Manager\");\n\n    foundersContainer.appendChild(founder1);\n    foundersContainer.appendChild(founder2);\n    foundersContainer.appendChild(founder3);\n\n    // --- SECTION 3: Company Story ---\n    const storyDiv = document.createElement('div');\n    storyDiv.classList.add('company-story');\n    \n    const storyTitle = document.createElement('h2');\n    storyTitle.textContent = \"Our Story\";\n    \n    const storyText = document.createElement('p');\n    storyText.textContent = \"We started this journey in 1995 with a simple grill and a dream. Our BBQ is made with love, patience, and secret spices passed down through generations. We believe in community, good food, and sticky fingers.\";\n\n    storyDiv.appendChild(storyTitle);\n    storyDiv.appendChild(storyText);\n\n    // --- SECTION 4: Footer / Contact ---\n    const footer = document.createElement('div');\n    footer.classList.add('about-footer');\n\n    const contactHeader = document.createElement('h4');\n    contactHeader.textContent = \"Connect with us\";\n\n    // Simulating Icons with simple text links for now\n    const socialLinks = document.createElement('p');\n    socialLinks.innerHTML = `\n        <a href=\"#\">Instagram</a> | \n        <a href=\"#\">Facebook</a> | \n        <a href=\"#\">Twitter</a>\n    `;\n\n    footer.appendChild(contactHeader);\n    footer.appendChild(socialLinks);\n\n    // --- FINAL ASSEMBLY ---\n    // Append everything to the main content div\n    content.appendChild(heading);\n    content.appendChild(foundersContainer);\n    content.appendChild(storyDiv);\n    content.appendChild(footer);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJEOztBQUUzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvQWJvdXQuanM/OTJkYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZWxwZXIgdG8gY3JlYXRlIGEgZm91bmRlciBjYXJkXG5mdW5jdGlvbiBjcmVhdGVGb3VuZGVyKG5hbWUsIHJvbGUpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdmb3VuZGVyLWNhcmQnKTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDBcIjsgLy8gUGxhY2Vob2xkZXIgZm9yIG5vd1xuICAgIGltZy5hbHQgPSBuYW1lO1xuICAgIGltZy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjUwJVwiOyAvLyBRdWljayBpbmxpbmUgc3R5bGUgdG8gbWFrZSB0aGVtIGNpcmN1bGFyXG5cbiAgICBjb25zdCBuYW1lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBuYW1lSGVhZGVyLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnN0IHJvbGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHJvbGVUZXh0LnRleHRDb250ZW50ID0gcm9sZTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKG5hbWVIZWFkZXIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQocm9sZVRleHQpO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRBYm91dCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBcbiAgICAvLyAxLiBDTEVBUiBQUkVWSU9VUyBDT05URU5UXG4gICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgLy8gLS0tIFNFQ1RJT04gMTogTWFpbiBIZWFkaW5nIC0tLVxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk91ciBGb3VuZGVyc1wiO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnYWJvdXQtaGVhZGluZycpO1xuXG4gICAgLy8gLS0tIFNFQ1RJT04gMjogVGhlIFRocmVlIEZvdW5kZXJzIChHcmlkL0ZsZXggY29udGFpbmVyKSAtLS1cbiAgICBjb25zdCBmb3VuZGVyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvdW5kZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZvdW5kZXJzLWNvbnRhaW5lcicpOyAvLyBVc2UgdGhpcyBjbGFzcyBmb3IgRmxleGJveCBpbiBDU1NcblxuICAgIGNvbnN0IGZvdW5kZXIxID0gY3JlYXRlRm91bmRlcihcIkNoZWYgTWFyaW9cIiwgXCJIZWFkIENoZWZcIik7XG4gICAgY29uc3QgZm91bmRlcjIgPSBjcmVhdGVGb3VuZGVyKFwiTHVpZ2lcIiwgXCJTb3VzIENoZWZcIik7XG4gICAgY29uc3QgZm91bmRlcjMgPSBjcmVhdGVGb3VuZGVyKFwiUGVhY2hcIiwgXCJNYW5hZ2VyXCIpO1xuXG4gICAgZm91bmRlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZm91bmRlcjEpO1xuICAgIGZvdW5kZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvdW5kZXIyKTtcbiAgICBmb3VuZGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3VuZGVyMyk7XG5cbiAgICAvLyAtLS0gU0VDVElPTiAzOiBDb21wYW55IFN0b3J5IC0tLVxuICAgIGNvbnN0IHN0b3J5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RvcnlEaXYuY2xhc3NMaXN0LmFkZCgnY29tcGFueS1zdG9yeScpO1xuICAgIFxuICAgIGNvbnN0IHN0b3J5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHN0b3J5VGl0bGUudGV4dENvbnRlbnQgPSBcIk91ciBTdG9yeVwiO1xuICAgIFxuICAgIGNvbnN0IHN0b3J5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdG9yeVRleHQudGV4dENvbnRlbnQgPSBcIldlIHN0YXJ0ZWQgdGhpcyBqb3VybmV5IGluIDE5OTUgd2l0aCBhIHNpbXBsZSBncmlsbCBhbmQgYSBkcmVhbS4gT3VyIEJCUSBpcyBtYWRlIHdpdGggbG92ZSwgcGF0aWVuY2UsIGFuZCBzZWNyZXQgc3BpY2VzIHBhc3NlZCBkb3duIHRocm91Z2ggZ2VuZXJhdGlvbnMuIFdlIGJlbGlldmUgaW4gY29tbXVuaXR5LCBnb29kIGZvb2QsIGFuZCBzdGlja3kgZmluZ2Vycy5cIjtcblxuICAgIHN0b3J5RGl2LmFwcGVuZENoaWxkKHN0b3J5VGl0bGUpO1xuICAgIHN0b3J5RGl2LmFwcGVuZENoaWxkKHN0b3J5VGV4dCk7XG5cbiAgICAvLyAtLS0gU0VDVElPTiA0OiBGb290ZXIgLyBDb250YWN0IC0tLVxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdhYm91dC1mb290ZXInKTtcblxuICAgIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGNvbnRhY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIkNvbm5lY3Qgd2l0aCB1c1wiO1xuXG4gICAgLy8gU2ltdWxhdGluZyBJY29ucyB3aXRoIHNpbXBsZSB0ZXh0IGxpbmtzIGZvciBub3dcbiAgICBjb25zdCBzb2NpYWxMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzb2NpYWxMaW5rcy5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+SW5zdGFncmFtPC9hPiB8IFxuICAgICAgICA8YSBocmVmPVwiI1wiPkZhY2Vib29rPC9hPiB8IFxuICAgICAgICA8YSBocmVmPVwiI1wiPlR3aXR0ZXI8L2E+XG4gICAgYDtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoc29jaWFsTGlua3MpO1xuXG4gICAgLy8gLS0tIEZJTkFMIEFTU0VNQkxZIC0tLVxuICAgIC8vIEFwcGVuZCBldmVyeXRoaW5nIHRvIHRoZSBtYWluIGNvbnRlbnQgZGl2XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvdW5kZXJzQ29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHN0b3J5RGl2KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/About.js\n\n}");

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadhome)\n/* harmony export */ });\nfunction loadhome(){\n    let content=document.getElementById('content');\n    content.textContent='';\n\n    const header=document.createElement('h1');\n    header.textContent=\"Welcome to BBQ\";\n\n    const textlines=document.createElement('p');\n    textlines.textContent=\"we serve authetic BBQ homemade dry and fruity...\";\n\n    const img=document.createElement('img');\n    img.alt = \"chicken grilled\";\n\n    content.appendChild(header);\n    content.appendChild(textlines);\n    content.appendChild(img);\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9Ib21lLmpzP2FjNDciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZGhvbWUoKXtcbiAgICBsZXQgY29udGVudD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQ9Jyc7XG5cbiAgICBjb25zdCBoZWFkZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQ9XCJXZWxjb21lIHRvIEJCUVwiO1xuXG4gICAgY29uc3QgdGV4dGxpbmVzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0bGluZXMudGV4dENvbnRlbnQ9XCJ3ZSBzZXJ2ZSBhdXRoZXRpYyBCQlEgaG9tZW1hZGUgZHJ5IGFuZCBmcnVpdHkuLi5cIjtcblxuICAgIGNvbnN0IGltZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuYWx0ID0gXCJjaGlja2VuIGdyaWxsZWRcIjtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRleHRsaW5lcyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbWcpO1xuXG59Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Home.js\n\n}");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n// This helper function creates a single food card\nfunction createMenuItem(name, description) {\n    const menuItem = document.createElement('div');\n    menuItem.classList.add('menu-item'); \n\n    const foodName = document.createElement('h3');\n    foodName.textContent = name;\n\n    const foodDesc = document.createElement('p');\n    foodDesc.textContent = description;\n\n    const foodImage = document.createElement('img'); \n    foodImage.alt = name;\n\n    menuItem.appendChild(foodImage);\n    menuItem.appendChild(foodName);\n    menuItem.appendChild(foodDesc);\n\n    return menuItem;\n}\n\nfunction loadMenu() {\n    const content = document.getElementById('content');\n    \n    // IMPORTANT: Wipe out previous content (like the Home page)\n    content.textContent = '';\n\n    // Create the items\n    const item1 = createMenuItem(\n        \"Smoked Brisket\", \n        \"Slow-smoked for 12 hours, tender and juicy.\"\n    );\n    \n    const item2 = createMenuItem(\n        \"BBQ Ribs\", \n        \"Fall-off-the-bone pork ribs with our secret sauce.\"\n    );\n\n    const item3 = createMenuItem(\n        \"Grilled Chicken\", \n        \"Marinated in lemon and herbs, grilled to perfection.\"\n    );\n\n    const item4 = createMenuItem(\n        \"Buffalo Wings\", \n        \"Spicy and crispy wings served with ranch dip.\"\n    );\n\n    // Append them all to the content div\n    content.appendChild(item1);\n    content.appendChild(item2);\n    content.appendChild(item3);\n    content.appendChild(item4);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvTWVudS5qcz82YWQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaGVscGVyIGZ1bmN0aW9uIGNyZWF0ZXMgYSBzaW5nbGUgZm9vZCBjYXJkXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7IFxuXG4gICAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGZvb2ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnN0IGZvb2REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb2REZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBmb29kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgXG4gICAgZm9vZEltYWdlLmFsdCA9IG5hbWU7XG5cbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kSW1hZ2UpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2ROYW1lKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kRGVzYyk7XG5cbiAgICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIFxuICAgIC8vIElNUE9SVEFOVDogV2lwZSBvdXQgcHJldmlvdXMgY29udGVudCAobGlrZSB0aGUgSG9tZSBwYWdlKVxuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcblxuICAgIC8vIENyZWF0ZSB0aGUgaXRlbXNcbiAgICBjb25zdCBpdGVtMSA9IGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICBcIlNtb2tlZCBCcmlza2V0XCIsIFxuICAgICAgICBcIlNsb3ctc21va2VkIGZvciAxMiBob3VycywgdGVuZGVyIGFuZCBqdWljeS5cIlxuICAgICk7XG4gICAgXG4gICAgY29uc3QgaXRlbTIgPSBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgXCJCQlEgUmlic1wiLCBcbiAgICAgICAgXCJGYWxsLW9mZi10aGUtYm9uZSBwb3JrIHJpYnMgd2l0aCBvdXIgc2VjcmV0IHNhdWNlLlwiXG4gICAgKTtcblxuICAgIGNvbnN0IGl0ZW0zID0gY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgIFwiR3JpbGxlZCBDaGlja2VuXCIsIFxuICAgICAgICBcIk1hcmluYXRlZCBpbiBsZW1vbiBhbmQgaGVyYnMsIGdyaWxsZWQgdG8gcGVyZmVjdGlvbi5cIlxuICAgICk7XG5cbiAgICBjb25zdCBpdGVtNCA9IGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICBcIkJ1ZmZhbG8gV2luZ3NcIiwgXG4gICAgICAgIFwiU3BpY3kgYW5kIGNyaXNweSB3aW5ncyBzZXJ2ZWQgd2l0aCByYW5jaCBkaXAuXCJcbiAgICApO1xuXG4gICAgLy8gQXBwZW5kIHRoZW0gYWxsIHRvIHRoZSBjb250ZW50IGRpdlxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbTEpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbTIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbTMpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbTQpO1xufSJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Menu.js\n\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.js */ \"./src/Home.js\");\n/* harmony import */ var _Menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.js */ \"./src/Menu.js\");\n/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.js */ \"./src/About.js\");\n\n\n\n\n// 1. Select your buttons\nconst homeBtn = document.querySelector('nav button:nth-child(1)'); \nconst menuBtn = document.querySelector('nav button:nth-child(2)'); \nconst aboutBtn = document.querySelector('nav button:nth-child(3)'); \n\n\nhomeBtn.addEventListener('click', () => {\n    (0,_Home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\nmenuBtn.addEventListener('click', () => {\n    (0,_Menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\naboutBtn.addEventListener('click', () => {\n    (0,_About_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); \n});\n\n//Default load\n(0,_Home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFpQztBQUNBO0FBQ0U7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLElBQUksb0RBQVE7QUFDWixDQUFDOztBQUVEO0FBQ0EsSUFBSSxvREFBUTtBQUNaLENBQUM7O0FBRUQ7QUFDQSxJQUFJLHFEQUFTO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBLG9EQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vSG9tZS5qcyc7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9NZW51LmpzJztcbmltcG9ydCBsb2FkQWJvdXQgZnJvbSAnLi9BYm91dC5qcyc7XG5cbi8vIDEuIFNlbGVjdCB5b3VyIGJ1dHRvbnNcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYgYnV0dG9uOm50aC1jaGlsZCgxKScpOyBcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYgYnV0dG9uOm50aC1jaGlsZCgyKScpOyBcbmNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2IGJ1dHRvbjpudGgtY2hpbGQoMyknKTsgXG5cblxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2FkSG9tZSgpO1xufSk7XG5cbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbG9hZE1lbnUoKTtcbn0pO1xuXG5hYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2FkQWJvdXQoKTsgXG59KTtcblxuLy9EZWZhdWx0IGxvYWRcbmxvYWRIb21lKCk7Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;