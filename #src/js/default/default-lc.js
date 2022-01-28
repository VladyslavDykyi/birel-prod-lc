let hamburger = document.querySelector('.header-burger');
let menu = document.querySelector('.drop-down');

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
})
bindTabs('#tabs');
function bindTabs(container) {
	if (typeof container === 'string') {
		container = document.querySelector(container);
	}

	const titles = container.querySelectorAll('.tab-n');
	const contents = container.querySelectorAll('.content-t ');

	for (let i = 0; i < titles.length; i++) {
		const titleEl = titles[i];
		titleEl.addEventListener('click', () => {
			deactivate(titles);
			deactivate(contents);
			titles[i].classList.add('active');
			contents[i].classList.add('active');
		});
	}

	function deactivate(elements) {
		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			element.classList.remove('active');
		}
	}
}