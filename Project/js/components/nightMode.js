const nightMode = (bodyClass) => {
	let modeBtn = document.querySelector("header #nightMode");
	let body = document.body;
	modeBtn.onclick = () => {
		body.classList.toggle("nightMode");
		if (body.className === `${bodyClass} nightMode`) {
			modeBtn.className = "fa fa-sun";
		} else {
			modeBtn.className = "fa fa-moon";
		}
	};
};

export default nightMode;
