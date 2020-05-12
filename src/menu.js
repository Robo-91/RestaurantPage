let container = document.getElementById('content');

const menuPage = () => {
	const menuTitle = document.createElement('h1');
	const drinkContainer = document.createElement('div');
	const coffeeDrink = document.createElement('div');
	const espressoDrink = document.createElement('div');
	const latteDrink = document.createElement('div');
	const macchiatoDrink = document.createElement('div');

	menuTitle.innerHTML = 'Menu';
	menuTitle.setAttribute('style', `text-align: center; font-family: 'Orbitron', sans-serif; font-size: 50px; margin-top: 100px;`);

	drinkContainer.setAttribute('style', `margin-top: 100px; display: grid; grid-template-columns: 150px 150px; row-gap: 50px; column-gap: 25%; justify-content: center; align-self: center; height: 500px;`);

	coffeeDrink.innerHTML = '<h3>Coffee</h3> Tall: $3.50 Venti: $5.50';
	coffeeDrink.setAttribute('style', `background: black; opacity: .85; color: white; height: 150px; font-family: 'Orbitron', sans-serif; border: 1px solid black; text-align: center; border-radius: 10px;`);
	espressoDrink.innerHTML = '<h3>Espresso</h3> Tall: $3.50 Venti: $5.50';
	espressoDrink.setAttribute('style', `background: black; opacity: .85; color: white; height: 150px; font-family: 'Orbitron', sans-serif; border: 1px solid black; text-align: center; border-radius: 10px;`);
	latteDrink.innerHTML = '<h3>Latte</h3> Tall: $3.50 Venti: $5.50';
	latteDrink.setAttribute('style', `background: black; opacity: .85; color: white; height: 150px; font-family: 'Orbitron', sans-serif; border: 1px solid black; text-align: center; border-radius: 10px;`);
	macchiatoDrink.innerHTML = '<h3>Macchiato</h3> Tall: $3.50 Venti: $5.50';
	macchiatoDrink.setAttribute('style', `background: black; opacity: .85; color: white; height: 150px; font-family: 'Orbitron', sans-serif; border: 1px solid black; text-align: center; border-radius: 10px;`);


	container.appendChild(menuTitle);
	drinkContainer.appendChild(coffeeDrink);
	drinkContainer.appendChild(espressoDrink);
	drinkContainer.appendChild(latteDrink);
	drinkContainer.appendChild(macchiatoDrink);
	container.appendChild(drinkContainer);
};

export { menuPage };

