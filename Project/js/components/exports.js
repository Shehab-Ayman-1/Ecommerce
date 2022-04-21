export const Fetch = (Object.prototype.fetchData = function (...methods) {
	fetch("../js/API/api.json")
		.then((res) => res.json())
		.then((data) => methods.forEach((method) => method(data)));
});

export const swiper = new Swiper(".swiper", {
	spaceBetween: 20,
	grabCursor: true,
	pagination: { el: ".swiper-pagination", clickable: true },
	autoplay: { delay: 5000, disableOnInteraction: false },
	breakpoints: {
		0: { slidesPerView: 1 },
		768: { slidesPerView: 2 },
		1024: { slidesPerView: 3 },
	},
});
