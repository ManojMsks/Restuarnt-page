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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAbout)\n/* harmony export */ });\n/* harmony import */ var _dog_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dog.jpg */ \"./src/dog.jpg\");\n/* harmony import */ var _cat_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cat.jpg */ \"./src/cat.jpg\");\n/* harmony import */ var _hamster_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hamster.jpg */ \"./src/hamster.jpg\");\n// Helper to create a founder card\n\n\n\n\n\nfunction createFounder(name, role,image) {\n    const card = document.createElement('div');\n    card.classList.add('founder-card');\n\n    const img = document.createElement('img');\n    img.src = image; // Placeholder for now\n    img.alt = name;\n    img.style.borderRadius = \"50%\"; // Quick inline style to make them circular\n\n    const nameHeader = document.createElement('h3');\n    nameHeader.textContent = name;\n\n    const roleText = document.createElement('p');\n    roleText.textContent = role;\n\n    card.appendChild(img);\n    card.appendChild(nameHeader);\n    card.appendChild(roleText);\n\n    return card;\n}\n\nfunction loadAbout() {\n    const content = document.getElementById('content');\n    \n    // 1. CLEAR PREVIOUS CONTENT\n    content.textContent = '';\n\n    // --- SECTION 1: Main Heading ---\n    const heading = document.createElement('h1');\n    heading.textContent = \"Our Founders\";\n    heading.classList.add('about-heading');\n\n    // --- SECTION 2: The Three Founders (Grid/Flex container) ---\n    const foundersContainer = document.createElement('div');\n    foundersContainer.classList.add('founders-container'); // Use this class for Flexbox in CSS\n\n    const founder1 = createFounder(\"Chef Mario\", \"Head Chef\",_dog_jpg__WEBPACK_IMPORTED_MODULE_0__);\n    const founder2 = createFounder(\"Luigi\", \"Sous Chef\",_cat_jpg__WEBPACK_IMPORTED_MODULE_1__);\n    const founder3 = createFounder(\"Peach\", \"Manager\",_hamster_jpg__WEBPACK_IMPORTED_MODULE_2__);\n\n    foundersContainer.appendChild(founder1);\n    foundersContainer.appendChild(founder2);\n    foundersContainer.appendChild(founder3);\n\n    // --- SECTION 3: Company Story ---\n    const storyDiv = document.createElement('div');\n    storyDiv.classList.add('company-story');\n    \n    const storyTitle = document.createElement('h2');\n    storyTitle.textContent = \"Our Story\";\n    \n    const storyText = document.createElement('p');\n    storyText.textContent = \"We started this journey in 1995 with a simple grill and a dream. Our BBQ is made with love, patience, and secret spices passed down through generations. We believe in community, good food, and sticky fingers.\";\n\n    storyDiv.appendChild(storyTitle);\n    storyDiv.appendChild(storyText);\n\n    // --- SECTION 4: Footer / Contact ---\n    const footer = document.createElement('div');\n    footer.classList.add('about-footer');\n\n    const contactHeader = document.createElement('h4');\n    contactHeader.textContent = \"Connect with us\";\n\n    // Simulating Icons with simple text links for now\n    const socialLinks = document.createElement('p');\n    socialLinks.innerHTML = `\n        <a href=\"#\">Instagram</a> | \n        <a href=\"#\">Facebook</a> | \n        <a href=\"#\">Twitter</a>\n    `;\n\n    footer.appendChild(contactHeader);\n    footer.appendChild(socialLinks);\n\n    // --- FINAL ASSEMBLY ---\n    // Append everything to the main content div\n    content.appendChild(heading);\n    content.appendChild(foundersContainer);\n    content.appendChild(storyDiv);\n    content.appendChild(footer);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQzRCO0FBQ0E7QUFDUTs7O0FBR3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJEQUEyRDs7QUFFM0QsNkRBQTZELHFDQUFHO0FBQ2hFLHdEQUF3RCxxQ0FBRztBQUMzRCxzREFBc0QseUNBQU87O0FBRTdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL0Fib3V0LmpzPzkyZGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVscGVyIHRvIGNyZWF0ZSBhIGZvdW5kZXIgY2FyZFxuaW1wb3J0IGRvZyBmcm9tIFwiLi9kb2cuanBnXCI7XG5pbXBvcnQgY2F0IGZyb20gXCIuL2NhdC5qcGdcIjtcbmltcG9ydCBoYW1zdGVyIGZyb20gXCIuL2hhbXN0ZXIuanBnXCI7XG5cblxuZnVuY3Rpb24gY3JlYXRlRm91bmRlcihuYW1lLCByb2xlLGltYWdlKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnZm91bmRlci1jYXJkJyk7XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc3JjID0gaW1hZ2U7IC8vIFBsYWNlaG9sZGVyIGZvciBub3dcbiAgICBpbWcuYWx0ID0gbmFtZTtcbiAgICBpbWcuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MCVcIjsgLy8gUXVpY2sgaW5saW5lIHN0eWxlIHRvIG1ha2UgdGhlbSBjaXJjdWxhclxuXG4gICAgY29uc3QgbmFtZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbmFtZUhlYWRlci50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICBjb25zdCByb2xlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICByb2xlVGV4dC50ZXh0Q29udGVudCA9IHJvbGU7XG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGltZyk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChuYW1lSGVhZGVyKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHJvbGVUZXh0KTtcblxuICAgIHJldHVybiBjYXJkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQWJvdXQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgXG4gICAgLy8gMS4gQ0xFQVIgUFJFVklPVVMgQ09OVEVOVFxuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcblxuICAgIC8vIC0tLSBTRUNUSU9OIDE6IE1haW4gSGVhZGluZyAtLS1cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJPdXIgRm91bmRlcnNcIjtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWhlYWRpbmcnKTtcblxuICAgIC8vIC0tLSBTRUNUSU9OIDI6IFRoZSBUaHJlZSBGb3VuZGVycyAoR3JpZC9GbGV4IGNvbnRhaW5lcikgLS0tXG4gICAgY29uc3QgZm91bmRlcnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3VuZGVyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3VuZGVycy1jb250YWluZXInKTsgLy8gVXNlIHRoaXMgY2xhc3MgZm9yIEZsZXhib3ggaW4gQ1NTXG5cbiAgICBjb25zdCBmb3VuZGVyMSA9IGNyZWF0ZUZvdW5kZXIoXCJDaGVmIE1hcmlvXCIsIFwiSGVhZCBDaGVmXCIsZG9nKTtcbiAgICBjb25zdCBmb3VuZGVyMiA9IGNyZWF0ZUZvdW5kZXIoXCJMdWlnaVwiLCBcIlNvdXMgQ2hlZlwiLGNhdCk7XG4gICAgY29uc3QgZm91bmRlcjMgPSBjcmVhdGVGb3VuZGVyKFwiUGVhY2hcIiwgXCJNYW5hZ2VyXCIsaGFtc3Rlcik7XG5cbiAgICBmb3VuZGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3VuZGVyMSk7XG4gICAgZm91bmRlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZm91bmRlcjIpO1xuICAgIGZvdW5kZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvdW5kZXIzKTtcblxuICAgIC8vIC0tLSBTRUNUSU9OIDM6IENvbXBhbnkgU3RvcnkgLS0tXG4gICAgY29uc3Qgc3RvcnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdG9yeURpdi5jbGFzc0xpc3QuYWRkKCdjb21wYW55LXN0b3J5Jyk7XG4gICAgXG4gICAgY29uc3Qgc3RvcnlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgc3RvcnlUaXRsZS50ZXh0Q29udGVudCA9IFwiT3VyIFN0b3J5XCI7XG4gICAgXG4gICAgY29uc3Qgc3RvcnlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHN0b3J5VGV4dC50ZXh0Q29udGVudCA9IFwiV2Ugc3RhcnRlZCB0aGlzIGpvdXJuZXkgaW4gMTk5NSB3aXRoIGEgc2ltcGxlIGdyaWxsIGFuZCBhIGRyZWFtLiBPdXIgQkJRIGlzIG1hZGUgd2l0aCBsb3ZlLCBwYXRpZW5jZSwgYW5kIHNlY3JldCBzcGljZXMgcGFzc2VkIGRvd24gdGhyb3VnaCBnZW5lcmF0aW9ucy4gV2UgYmVsaWV2ZSBpbiBjb21tdW5pdHksIGdvb2QgZm9vZCwgYW5kIHN0aWNreSBmaW5nZXJzLlwiO1xuXG4gICAgc3RvcnlEaXYuYXBwZW5kQ2hpbGQoc3RvcnlUaXRsZSk7XG4gICAgc3RvcnlEaXYuYXBwZW5kQ2hpbGQoc3RvcnlUZXh0KTtcblxuICAgIC8vIC0tLSBTRUNUSU9OIDQ6IEZvb3RlciAvIENvbnRhY3QgLS0tXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWZvb3RlcicpO1xuXG4gICAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgY29udGFjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiQ29ubmVjdCB3aXRoIHVzXCI7XG5cbiAgICAvLyBTaW11bGF0aW5nIEljb25zIHdpdGggc2ltcGxlIHRleHQgbGlua3MgZm9yIG5vd1xuICAgIGNvbnN0IHNvY2lhbExpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNvY2lhbExpbmtzLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5JbnN0YWdyYW08L2E+IHwgXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+RmFjZWJvb2s8L2E+IHwgXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+VHdpdHRlcjwvYT5cbiAgICBgO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChzb2NpYWxMaW5rcyk7XG5cbiAgICAvLyAtLS0gRklOQUwgQVNTRU1CTFkgLS0tXG4gICAgLy8gQXBwZW5kIGV2ZXJ5dGhpbmcgdG8gdGhlIG1haW4gY29udGVudCBkaXZcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm91bmRlcnNDb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3RvcnlEaXYpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn0iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/About.js\n\n}");

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _bbq_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbq.jpg */ \"./src/bbq.jpg\");\n// 1. IMPORT THE IMAGE AT THE TOP\n// You can name 'ChefImage' whatever you want\n \n\nfunction loadHome() {\n    let content = document.getElementById('content');\n    content.textContent = '';\n\n    const header = document.createElement('h1');\n    header.textContent = \"Welcome to BBQ\";\n\n    const textlines = document.createElement('p');\n    textlines.textContent = \"We serve authentic BBQ homemade dry and fruity...\";\n\n    const img = document.createElement('img');\n    \n    // 2. ASSIGN THE IMPORTED VARIABLE TO THE SRC\n    img.src = _bbq_jpg__WEBPACK_IMPORTED_MODULE_0__; \n    img.alt = \"chicken grilled\";\n\n    // Optional: Add a class for styling\n    img.classList.add('home-img');\n\n    content.appendChild(header);\n    content.appendChild(textlines);\n    content.appendChild(img);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDa0M7O0FBRW5CO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxxQ0FBUztBQUN2Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL0hvbWUuanM/YWM0NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAxLiBJTVBPUlQgVEhFIElNQUdFIEFUIFRIRSBUT1Bcbi8vIFlvdSBjYW4gbmFtZSAnQ2hlZkltYWdlJyB3aGF0ZXZlciB5b3Ugd2FudFxuaW1wb3J0IENoZWZJbWFnZSBmcm9tICcuL2JicS5qcGcnOyBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIEJCUVwiO1xuXG4gICAgY29uc3QgdGV4dGxpbmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHRsaW5lcy50ZXh0Q29udGVudCA9IFwiV2Ugc2VydmUgYXV0aGVudGljIEJCUSBob21lbWFkZSBkcnkgYW5kIGZydWl0eS4uLlwiO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgXG4gICAgLy8gMi4gQVNTSUdOIFRIRSBJTVBPUlRFRCBWQVJJQUJMRSBUTyBUSEUgU1JDXG4gICAgaW1nLnNyYyA9IENoZWZJbWFnZTsgXG4gICAgaW1nLmFsdCA9IFwiY2hpY2tlbiBncmlsbGVkXCI7XG5cbiAgICAvLyBPcHRpb25hbDogQWRkIGEgY2xhc3MgZm9yIHN0eWxpbmdcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnaG9tZS1pbWcnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRleHRsaW5lcyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbWcpO1xufSJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Home.js\n\n}");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _brisket_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brisket.jpg */ \"./src/brisket.jpg\");\n/* harmony import */ var _ribs_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ribs.jpg */ \"./src/ribs.jpg\");\n/* harmony import */ var _chicken_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chicken.jpg */ \"./src/chicken.jpg\");\n/* harmony import */ var _wings_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wings.jpg */ \"./src/wings.jpg\");\n\n\n\n\n\n// This helper function creates a single food card\nfunction createMenuItem(name, description,image) {\n    const menuItem = document.createElement('div');\n    menuItem.classList.add('menu-item'); \n\n    const foodName = document.createElement('h3');\n    foodName.textContent = name;\n\n    const foodDesc = document.createElement('p');\n    foodDesc.textContent = description;\n\n    const foodImage = document.createElement('img'); \n    foodImage.src=image;\n    foodImage.alt = name;\n\n    menuItem.appendChild(foodImage);\n    menuItem.appendChild(foodName);\n    menuItem.appendChild(foodDesc);\n\n    return menuItem;\n}\n\nfunction loadMenu() {\n    const content = document.getElementById('content');\n    \n    content.textContent = '';\n    content.appendChild(createMenuItem(\"Smoked Brisket\", \"Slow-smoked for 12 hours.\", _brisket_jpg__WEBPACK_IMPORTED_MODULE_0__));\n    content.appendChild(createMenuItem(\"BBQ Ribs\", \"Fall-off-the-bone pork ribs.\", _ribs_jpg__WEBPACK_IMPORTED_MODULE_1__));\n    content.appendChild(createMenuItem(\"Grilled Chicken\", \"Lemon and herb grilled.\", _chicken_jpg__WEBPACK_IMPORTED_MODULE_2__));\n    content.appendChild(createMenuItem(\"Buffalo Wings\", \"Spicy and crispy.\", _wings_jpg__WEBPACK_IMPORTED_MODULE_3__));\n\n  \n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUNOO0FBQ007QUFDSjs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRix5Q0FBVTtBQUNoRyxtRkFBbUYsc0NBQU87QUFDMUYscUZBQXFGLHlDQUFVO0FBQy9GLDZFQUE2RSx1Q0FBUTs7QUFFckY7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9NZW51LmpzPzZhZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJyaXNrZXRJbWcgZnJvbSAnLi9icmlza2V0LmpwZyc7XG5pbXBvcnQgUmlic0ltZyBmcm9tICcuL3JpYnMuanBnJztcbmltcG9ydCBDaGlja2VuSW1nIGZyb20gJy4vY2hpY2tlbi5qcGcnO1xuaW1wb3J0IFdpbmdzSW1nIGZyb20gJy4vd2luZ3MuanBnJztcblxuLy8gVGhpcyBoZWxwZXIgZnVuY3Rpb24gY3JlYXRlcyBhIHNpbmdsZSBmb29kIGNhcmRcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLGltYWdlKSB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTsgXG5cbiAgICBjb25zdCBmb29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZm9vZE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgY29uc3QgZm9vZERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9vZERlc2MudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGZvb2RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyBcbiAgICBmb29kSW1hZ2Uuc3JjPWltYWdlO1xuICAgIGZvb2RJbWFnZS5hbHQgPSBuYW1lO1xuXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZEltYWdlKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kTmFtZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZERlc2MpO1xuXG4gICAgcmV0dXJuIG1lbnVJdGVtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIlNtb2tlZCBCcmlza2V0XCIsIFwiU2xvdy1zbW9rZWQgZm9yIDEyIGhvdXJzLlwiLCBCcmlza2V0SW1nKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIkJCUSBSaWJzXCIsIFwiRmFsbC1vZmYtdGhlLWJvbmUgcG9yayByaWJzLlwiLCBSaWJzSW1nKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIkdyaWxsZWQgQ2hpY2tlblwiLCBcIkxlbW9uIGFuZCBoZXJiIGdyaWxsZWQuXCIsIENoaWNrZW5JbWcpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiQnVmZmFsbyBXaW5nc1wiLCBcIlNwaWN5IGFuZCBjcmlzcHkuXCIsIFdpbmdzSW1nKSk7XG5cbiAgXG59Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Menu.js\n\n}");

/***/ }),

/***/ "./src/bbq.jpg":
/*!*********************!*\
  !*** ./src/bbq.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "322f62319750c173ac47.jpg";

/***/ }),

/***/ "./src/brisket.jpg":
/*!*************************!*\
  !*** ./src/brisket.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5aa39302639c728f623c.jpg";

/***/ }),

/***/ "./src/cat.jpg":
/*!*********************!*\
  !*** ./src/cat.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7d9653503dfe6ea2dca.jpg";

/***/ }),

/***/ "./src/chicken.jpg":
/*!*************************!*\
  !*** ./src/chicken.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8fc04fe22f9296de3787.jpg";

/***/ }),

/***/ "./src/dog.jpg":
/*!*********************!*\
  !*** ./src/dog.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3df1c8adf6da53b4ed8e.jpg";

/***/ }),

/***/ "./src/hamster.jpg":
/*!*************************!*\
  !*** ./src/hamster.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9df1a2572d3b8739c7d7.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.js */ \"./src/Home.js\");\n/* harmony import */ var _Menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.js */ \"./src/Menu.js\");\n/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.js */ \"./src/About.js\");\n\n\n\n\n// 1. Select your buttons\nconst homeBtn = document.querySelector('nav button:nth-child(1)'); \nconst menuBtn = document.querySelector('nav button:nth-child(2)'); \nconst aboutBtn = document.querySelector('nav button:nth-child(3)'); \n\n\nhomeBtn.addEventListener('click', () => {\n    (0,_Home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\nmenuBtn.addEventListener('click', () => {\n    (0,_Menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\naboutBtn.addEventListener('click', () => {\n    (0,_About_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); \n});\n\n//Default load\n(0,_Home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFpQztBQUNBO0FBQ0U7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLElBQUksb0RBQVE7QUFDWixDQUFDOztBQUVEO0FBQ0EsSUFBSSxvREFBUTtBQUNaLENBQUM7O0FBRUQ7QUFDQSxJQUFJLHFEQUFTO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBLG9EQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vSG9tZS5qcyc7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9NZW51LmpzJztcbmltcG9ydCBsb2FkQWJvdXQgZnJvbSAnLi9BYm91dC5qcyc7XG5cbi8vIDEuIFNlbGVjdCB5b3VyIGJ1dHRvbnNcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYgYnV0dG9uOm50aC1jaGlsZCgxKScpOyBcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYgYnV0dG9uOm50aC1jaGlsZCgyKScpOyBcbmNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2IGJ1dHRvbjpudGgtY2hpbGQoMyknKTsgXG5cblxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2FkSG9tZSgpO1xufSk7XG5cbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbG9hZE1lbnUoKTtcbn0pO1xuXG5hYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2FkQWJvdXQoKTsgXG59KTtcblxuLy9EZWZhdWx0IGxvYWRcbmxvYWRIb21lKCk7Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }),

/***/ "./src/ribs.jpg":
/*!**********************!*\
  !*** ./src/ribs.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "761d70f068b70ab95e09.jpg";

/***/ }),

/***/ "./src/wings.jpg":
/*!***********************!*\
  !*** ./src/wings.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc3d1a1ab201e00f422c.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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