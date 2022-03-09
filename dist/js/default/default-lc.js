let hamburger = document.querySelector('.header-burger');
let menu = document.querySelector('.drop-down');


const messagesManager = document.querySelector('#message-manager');
const messagesManager2 = document.querySelector('#message-manager2');


const toggleMenu = () => {
	menu.classList.toggle('active');
	hamburger.classList.toggle('active');
	document.body.classList.toggle('lock');
}

hamburger.addEventListener('click', e => {
	e.stopPropagation();
	toggleMenu();
});

document.addEventListener('click', e => {
	let target = e.target;
	let its_menu = target === menu || menu.contains(target);
	let its_hamburger = target === hamburger;
	let menu_is_active = menu.classList.contains('active');

	if (!its_menu && !its_hamburger && menu_is_active) {
		toggleMenu();
	}
});

messagesManager.addEventListener('click', () => {
	const elem1 = document.querySelector('.popUp-background1');
	elem1.classList.add('active');
});