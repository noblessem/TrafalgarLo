const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-nextbtn',
		prevEl: '.swiper-button-prevbtn',
	},

	// And if we need scrollbar

});

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__nav');
(function () {

	const smoothScroll = function (targetEl, duration) {
		const headerElHeight = 60;
		let target = document.querySelector(targetEl);
		let targetPosition = target.getBoundingClientRect().top - headerElHeight;
		let startPosition = window.pageYOffset;
		let startTime = null;

		const ease = function (t, b, c, d) {
			t /= d / 2;
			if (t < 1) return c / 2 * t * t + b;
			t--;
			return -c / 2 * (t * (t - 2) - 1) + b;
		};

		const animation = function (currentTime) {
			if (startTime === null) startTime = currentTime;
			const timeElapsed = currentTime - startTime;
			const run = ease(timeElapsed, startPosition, targetPosition, duration);
			window.scrollTo(0, run);
			if (timeElapsed < duration) requestAnimationFrame(animation);
		};
		requestAnimationFrame(animation);

	};

	const scrollTo = function () {
		const links = document.querySelectorAll('.js-scroll');
		links.forEach(each => {
			each.addEventListener('click', function () {
				if (iconMenu.classList.contains('_active')) {
					iconMenu.classList.remove('_active');
					menuBody.classList.toggle('_active');
					document.body.classList.toggle('_lock');

				}
				const currentTarget = this.getAttribute('href');
				smoothScroll(currentTarget, 1000);

			});
		});
	};

	scrollTo();
}());


// Burger



if (iconMenu) {


	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	})

}