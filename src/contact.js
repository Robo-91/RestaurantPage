let container = document.getElementById('content');

const contactPage = () => {

	const contactHeading = document.createElement('h1');
	const contactContainer = document.createElement('div');
	const phoneNumber = document.createElement('div');
	const email = document.createElement('div');
	const address = document.createElement('div');

	contactContainer.id = `contact-container`;

	contactHeading.innerHTML = `Contact Information`;
	phoneNumber.innerHTML = `<h2>Number</h2> (0)888-777-9999`;
	email.innerHTML = `<h2>Email</h2> kosmicRoast@coffee.com`;
	address.innerHTML = `<h2>Address</h2> 1122 Catch 33 Ave.`;

	contactHeading.setAttribute('style', `font-family: 'Orbitron', sans-serif; text-align: center; margin-top: 100px; font-size: 50px;`);
	contactContainer.setAttribute('style', `display: flex; justify-content: space-evenly; margin-top: 20%;`);

	phoneNumber.setAttribute('style', `color: white; background: black; opacity: .85; border-radius: 10px; width: 150px; height: 150px; text-align: center; font-family: 'Orbitron', sans-serif;`);
	email.setAttribute('style', `color: white; background: black; opacity: .85; border-radius: 10px; width: 250px; height: 150px; text-align: center; font-family: 'Orbitron', sans-serif;`);
	address.setAttribute('style', `color: white; background: black; opacity: .85; border-radius: 10px; width: 150px; height: 150px; text-align: center; font-family: 'Orbitron', sans-serif;`);

	container.appendChild(contactHeading);
	contactContainer.appendChild(phoneNumber);
	contactContainer.appendChild(email);
	contactContainer.appendChild(address);
	container.appendChild(contactContainer);

};

export { contactPage };