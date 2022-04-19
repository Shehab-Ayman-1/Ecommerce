let swiper = new Swiper(".swiper", {
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

export default swiper;
