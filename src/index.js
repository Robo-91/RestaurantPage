import { contactPage } from './contact';
import { homePage } from './home';
import { menuPage } from './menu';

let container = document.getElementById('content');
const docBody = document.querySelector('body');
const headingContainer = document.createElement('div');
const restaurantName = document.createElement('h1');
const tabContainer = document.createElement('div');
const homeButton = document.createElement('button');
const menuButton = document.createElement('button');
const contactButton = document.createElement('button');
const frontPagePics = document.createElement('div');
const coffeeImg = document.createElement('img');
const coffeeImg1 = document.createElement('img');
const coffeeImg2 = document.createElement('img');
const coffeeImg3 = document.createElement('img');

docBody.setAttribute('style', `background-image: url('https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	background-attachment: fixed;`);

const headingBar = () => {

	headingContainer.id = 'heading-container';
	headingContainer.setAttribute('style', `display: flex; align-items: center;`);

	restaurantName.innerHTML = 'KosmicRoast';
	restaurantName.setAttribute('style', `font-family: 'Orbitron', sans-serif; font-size: 50px; margin-left: 30px; margin-top: 20px;`);

	tabContainer.id = 'tab-container';
	tabContainer.setAttribute('style', `margin-top: 10px; text-align: right; margin-left: auto; width: 400px;`);
	
	contactButton.setAttribute('style', `margin-right: 20px; border-radius: 10px; border: 2px solid black; background: white; font-size: 22px; font-family: 'Orbitron', sans-serif;`);
	contactButton.innerHTML = 'Contact';
	menuButton.setAttribute('style', `margin-right: 20px; border-radius: 10px; border: 2px solid black; background: white; font-size: 22px; font-family: 'Orbitron', sans-serif;`);
	menuButton.innerHTML = 'Menu';
	homeButton.setAttribute('style', `margin-right: 20px; border-radius: 10px; border: 2px solid black; background: white; font-size: 22px; font-family: 'Orbitron', sans-serif;`);
	homeButton.innerHTML = 'Home';

	headingContainer.appendChild(restaurantName);
	headingContainer.appendChild(tabContainer);
	tabContainer.appendChild(homeButton);
	tabContainer.appendChild(menuButton);
	tabContainer.appendChild(contactButton);
	container.appendChild(headingContainer);

}

const mainPage = () => {
	frontPagePics.setAttribute('style', `display: grid; grid-template-columns: 400px 400px; justify-content: space-evenly; margin-top: 100px; height: 1500px;`);
	coffeeImg.setAttribute(`src`, `https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2434&q=80`);
	coffeeImg.setAttribute(`style`, `width: 400px; height: 600px; border-radius: 10px;`);
	coffeeImg1.setAttribute(`src`, `https://images.unsplash.com/photo-1527596428171-7885b82c91c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=977&q=80`);
	coffeeImg1.setAttribute(`style`, `width: 400px; height: 600px; border-radius: 10px;`);
	coffeeImg2.setAttribute(`src`, `https://images.unsplash.com/photo-1517640033243-dc06bb716df5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`);
	coffeeImg2.setAttribute(`style`, `width: 400px; height: 600px; border-radius: 10px;`);
	coffeeImg3.setAttribute(`src`, `https://images.unsplash.com/photo-1495628987724-4aa8d02dcc94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2198&q=80`);
	coffeeImg3.setAttribute(`style`, `width: 400px; height: 600px; border-radius: 10px;`);

	frontPagePics.appendChild(coffeeImg);
	frontPagePics.appendChild(coffeeImg1);
	frontPagePics.appendChild(coffeeImg2);
	frontPagePics.appendChild(coffeeImg3);
	container.appendChild(frontPagePics);
};

headingBar();
mainPage();

restaurantName.addEventListener('click', () => {
	container.innerHTML= ``;
	headingBar();
	mainPage();
});

homeButton.addEventListener('click', () => {
	container.innerHTML = ``;
	headingBar();
	homePage();
});

menuButton.addEventListener('click', () => {
	container.innerHTML = ``;
	headingBar();
	menuPage();
});

contactButton.addEventListener('click', () => {
	container.innerHTML = ``;
	headingBar();
	contactPage();
});


