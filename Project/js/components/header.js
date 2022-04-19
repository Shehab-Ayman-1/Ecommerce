function Header() {
	let Header = document.querySelector("header");
	// ====================== OnLoad =========================
	window.onload = () => {
		if (window.scrollY === 0) {
			Header.classList.add("Active");
		} else {
			Header.classList.remove("Active");
		}
	};

	// ====================== OnScroll =======================
	let Scroller = document.createElement("i");
	Scroller.className = "page-scroller fas fa-caret-down";
	document.body.append(Scroller);

	window.onscroll = () => {
		let Feutures = document.querySelector("#Feutures");
		if (window.scrollY === 0) Header.classList.add("Active");
		else Header.classList.remove("Active");

		if (window.scrollY <= Feutures.offsetTop - 200) {
			Scroller.className = "page-scroller fas fa-caret-down";
			Scroller.onclick = () => window.scrollTo({ top: 100000000000, behavior: "smooth" });
		} else {
			Scroller.className = "page-scroller fas fa-caret-up";
			Scroller.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	// ====================== Bars Form ======================
	let BarsButton = document.querySelector("header #BarsButton");
	let NaveBare = document.querySelector("header nav");
	BarsButton.onclick = () => {
		NaveBare.classList.toggle("Active");
		SearchForm.classList.remove("Active");
		UserLogin.classList.remove("Active");
	};

	// ====================== Search Form ====================
	let SearchForm = document.querySelector("header .search-form");
	let SearchButton = document.querySelector("header #SearchButton");
	SearchButton.onclick = () => {
		SearchForm.classList.toggle("Active");
		NaveBare.classList.remove("Active");
		UserLogin.classList.remove("Active");
	};

	// ====================== User Form ======================
	let UserButton = document.querySelector("header #UserButton");
	let UserLogin = document.querySelector("header .user-form");
	UserButton.onclick = () => {
		UserLogin.classList.toggle("Active");
		NaveBare.classList.remove("Active");
		SearchForm.classList.remove("Active");
	};
}

export default Header;
