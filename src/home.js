let container = document.getElementById('content');
const homeHeading = document.createElement('h1');
const restaurantStatement = document.createElement('p');


const homePage = () => {
	homeHeading.innerHTML = 'About Us';
	homeHeading.setAttribute('style', `text-align: center; font-size: 50px; font-family: 'Orbitron', sans-serif; margin-top: 100px; margin-bottom: 100px;`);

	restaurantStatement.innerHTML = 'At Kosmic Roast, we pride ourselves in providing top-quality coffee to you. Our Arabica and Robusta beans are grown from South America, with a tasty blend of rich, sweet, and chocolately. Need your caffeine fix? Swerve by and we will be happy to serve you! ';
	restaurantStatement.setAttribute('style', `width: 700px; text-align: center; font-family: 'Orbitron', sans-serif; font-size: 25px; padding: 25px; background: black; opacity: .85; border-radius: 10px; margin: auto; color: white;`);

	container.appendChild(homeHeading);
	container.appendChild(restaurantStatement);
};

export { homePage };

