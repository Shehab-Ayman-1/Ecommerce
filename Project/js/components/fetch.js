async function Fetch(func1, func2, func3, func4, func5, func6) {
	await fetch("../js/API/api.json")
		.then((res) => res.json())
		.then((data) => {
			func1(data);
			func2(data);
			func3(data);
			func4(data);
			func5(data);
			func6(data);
		});
}

export default Fetch;
