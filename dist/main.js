/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: contactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactPage\", function() { return contactPage; });\nlet container = document.getElementById('content');\n\nconst contactPage = () => {\n\n\tconst contactHeading = document.createElement('h1');\n\tconst contactContainer = document.createElement('div');\n\tconst phoneNumber = document.createElement('div');\n\tconst email = document.createElement('div');\n\tconst address = document.createElement('div');\n\n\tcontactContainer.id = `contact-container`;\n\n\tcontactHeading.innerHTML = `Contact Information`;\n\tphoneNumber.innerHTML = `<h2>Number</h2> (0)888-777-9999`;\n\temail.innerHTML = `<h2>Email</h2> kosmicRoast@coffee.com`;\n\taddress.innerHTML = `<h2>Address</h2> 1122 Catch 33 Ave.`;\n\n\tcontactHeading.setAttribute('style', `font-family: 'Orbitron', sans-serif; text-align: center; margin-top: 100px; font-size: 50px;`);\n\tcontactContainer.setAttribute('style', `display: flex; justify-content: space-evenly; margin-top: 20%;`);\n\n\tphoneNumber.setAttribute('style', `color: white; background: black; opacity: .85; border-radius: 10px; width: 150px; height: 150px; text-align: center; font-family: 'Orbitron', sans-serif;`);\n\temail.setAttribute('style', `color: white; background: black; opacity: .85; border-radius: 10px; width: 250px; height: 150px; text-align: center; font-family: 'Orbitron', sans-serif;`);\n\taddress.setAttribute('style', `color: white; background: black; opacity: .85; border-radius: 10px; width: 150px; height: 150px; text-align: center; font-family: 'Orbitron', sans-serif;`);\n\n\tcontainer.appendChild(contactHeading);\n\tcontactContainer.appendChild(phoneNumber);\n\tcontactContainer.appendChild(email);\n\tcontactContainer.appendChild(address);\n\tcontainer.appendChild(contactContainer);\n\n};\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: homePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homePage\", function() { return homePage; });\nlet container = document.getElementById('content');\nconst homeHeading = document.createElement('h1');\nconst restaurantStatement = document.createElement('p');\n\n\nconst homePage = () => {\n\thomeHeading.innerHTML = 'About Us';\n\thomeHeading.setAttribute('style', `text-align: center; font-size: 50px; font-family: 'Orbitron', sans-serif; margin-top: 100px; margin-bottom: 100px;`);\n\n\trestaurantStatement.innerHTML = 'At Kosmic Roast, we pride ourselves in providing top-quality coffee to you. Our Arabica and Robusta beans are grown from South America, with a tasty blend of rich, sweet, and chocolately. Need your caffeine fix? Swerve by and we will be happy to serve you! ';\n\trestaurantStatement.setAttribute('style', `width: 700px; text-align: center; font-family: 'Orbitron', sans-serif; font-size: 25px; padding: 25px; background: black; opacity: .85; border-radius: 10px; margin: auto; color: white;`);\n\n\tcontainer.appendChild(homeHeading);\n\tcontainer.appendChild(restaurantStatement);\n};\n\n\n\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nlet container = document.getElementById('content');\nconst docBody = document.querySelector('body');\nconst headingContainer = document.createElement('div');\nconst restaurantName = document.createElement('h1');\nconst tabContainer = document.createElement('div');\nconst homeButton = document.createElement('button');\nconst menuButton = document.createElement('button');\nconst contactButton = document.createElement('button');\nconst frontPagePics = document.createElement('div');\nconst coffeeImg = document.createElement('img');\nconst coffeeImg1 = document.createElement('img');\nconst coffeeImg2 = document.createElement('img');\nconst coffeeImg3 = document.createElement('img');\n\ndocBody.setAttribute('style', `background-image: url('https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80');\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tbackground-size: cover;\n\tbackground-attachment: fixed;`);\n\nconst headingBar = () => {\n\n\theadingContainer.id = 'heading-container';\n\theadingContainer.setAttribute('style', `display: flex; align-items: center;`);\n\n\trestaurantName.innerHTML = 'KosmicRoast';\n\trestaurantName.setAttribute('style', `font-family: 'Orbitron', sans-serif; font-size: 50px; margin-left: 30px; margin-top: 20px;`);\n\n\ttabContainer.id = 'tab-container';\n\ttabContainer.setAttribute('style', `margin-top: 10px; text-align: right; margin-left: auto; width: 400px;`);\n\t\n\tcontactButton.setAttribute('style', `margin-right: 20px; border-radius: 10px; border: 2px solid black; background: white; font-size: 22px; font-family: 'Orbitron', sans-serif;`);\n\tcontactButton.innerHTML = 'Contact';\n\tmenuButton.setAttribute('style', `margin-right: 20px; border-radius: 10px; border: 2px solid black; background: white; font-size: 22px; font-family: 'Orbitron', sans-serif;`);\n\tmenuButton.innerHTML = 'Menu';\n\thomeButton.setAttribute('style', `margin-right: 20px; border-radius: 10px; border: 2px solid black; background: white; font-size: 22px; font-family: 'Orbitron', sans-serif;`);\n\thomeButton.innerHTML = 'Home';\n\n\theadingContainer.appendChild(restaurantName);\n\theadingContainer.appendChild(tabContainer);\n\ttabContainer.appendChild(homeButton);\n\ttabContainer.appendChild(menuButton);\n\ttabContainer.appendChild(contactButton);\n\tcontainer.appendChild(headingContainer);\n\n}\n\nconst mainPage = () => {\n\tfrontPagePics.setAttribute('style', `display: grid; grid-template-columns: 400px 400px; justify-content: space-evenly; margin-top: 100px; height: 1500px;`);\n\tcoffeeImg.setAttribute(`src`, `https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2434&q=80`);\n\tcoffeeImg.setAttribute(`style`, `width: 400px; height: 600px; border-radius: 10px;`);\n\tcoffeeImg1.setAttribute(`src`, `https://images.unsplash.com/photo-1527596428171-7885b82c91c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=977&q=80`);\n\tcoffeeImg1.setAttribute(`style`, `width: 400px; height: 600px; border-radius: 10px;`);\n\tcoffeeImg2.setAttribute(`src`, `https://images.unsplash.com/photo-1517640033243-dc06bb716df5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`);\n\tcoffeeImg2.setAttribute(`style`, `width: 400px; height: 600px; border-radius: 10px;`);\n\tcoffeeImg3.setAttribute(`src`, `https://images.unsplash.com/photo-1495628987724-4aa8d02dcc94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2198&q=80`);\n\tcoffeeImg3.setAttribute(`style`, `width: 400px; height: 600px; border-radius: 10px;`);\n\n\tfrontPagePics.appendChild(coffeeImg);\n\tfrontPagePics.appendChild(coffeeImg1);\n\tfrontPagePics.appendChild(coffeeImg2);\n\tfrontPagePics.appendChild(coffeeImg3);\n\tcontainer.appendChild(frontPagePics);\n};\n\nheadingBar();\nmainPage();\n\nrestaurantName.addEventListener('click', () => {\n\tcontainer.innerHTML= ``;\n\theadingBar();\n\tmainPage();\n});\n\nhomeButton.addEventListener('click', () => {\n\tcontainer.innerHTML = ``;\n\theadingBar();\n\tObject(_home__WEBPACK_IMPORTED_MODULE_1__[\"homePage\"])();\n});\n\nmenuButton.addEventListener('click', () => {\n\tcontainer.innerHTML = ``;\n\theadingBar();\n\tObject(_menu__WEBPACK_IMPORTED_MODULE_2__[\"menuPage\"])();\n});\n\ncontactButton.addEventListener('click', () => {\n\tcontainer.innerHTML = ``;\n\theadingBar();\n\tObject(_contact__WEBPACK_IMPORTED_MODULE_0__[\"contactPage\"])();\n});\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: menuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuPage\", function() { return menuPage; });\nlet container = document.getElementById('content');\n\nconst menuPage = () => {\n\tconst menuTitle = document.createElement('h1');\n\tconst drinkContainer = document.createElement('div');\n\tconst coffeeDrink = document.createElement('div');\n\tconst espressoDrink = document.createElement('div');\n\tconst latteDrink = document.createElement('div');\n\tconst macchiatoDrink = document.createElement('div');\n\n\tmenuTitle.innerHTML = 'Menu';\n\tmenuTitle.setAttribute('style', `text-align: center; font-family: 'Orbitron', sans-serif; font-size: 50px; margin-top: 100px;`);\n\n\tdrinkContainer.setAttribute('style', `margin-top: 100px; display: grid; grid-template-columns: 150px 150px; row-gap: 50px; column-gap: 25%; justify-content: center; align-self: center; height: 500px;`);\n\n\tcoffeeDrink.innerHTML = '<h3>Coffee</h3> Tall: $3.50 Venti: $5.50';\n\tcoffeeDrink.setAttribute('style', `background: black; opacity: .85; color: white; height: 150px; font-family: 'Orbitron', sans-serif; border: 1px solid black; text-align: center; border-radius: 10px;`);\n\tespressoDrink.innerHTML = '<h3>Espresso</h3> Tall: $3.50 Venti: $5.50';\n\tespressoDrink.setAttribute('style', `background: black; opacity: .85; color: white; height: 150px; font-family: 'Orbitron', sans-serif; border: 1px solid black; text-align: center; border-radius: 10px;`);\n\tlatteDrink.innerHTML = '<h3>Latte</h3> Tall: $3.50 Venti: $5.50';\n\tlatteDrink.setAttribute('style', `background: black; opacity: .85; color: white; height: 150px; font-family: 'Orbitron', sans-serif; border: 1px solid black; text-align: center; border-radius: 10px;`);\n\tmacchiatoDrink.innerHTML = '<h3>Macchiato</h3> Tall: $3.50 Venti: $5.50';\n\tmacchiatoDrink.setAttribute('style', `background: black; opacity: .85; color: white; height: 150px; font-family: 'Orbitron', sans-serif; border: 1px solid black; text-align: center; border-radius: 10px;`);\n\n\n\tcontainer.appendChild(menuTitle);\n\tdrinkContainer.appendChild(coffeeDrink);\n\tdrinkContainer.appendChild(espressoDrink);\n\tdrinkContainer.appendChild(latteDrink);\n\tdrinkContainer.appendChild(macchiatoDrink);\n\tcontainer.appendChild(drinkContainer);\n};\n\n\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });