import Header from "../components/header.js";
import nightMode from "../components/nightMode.js";
import { Fetch, swiper } from "../components/exports.js";
Header(), nightMode("home"), new Fetch(Feutures, Catagories, Blogs, firstProduct, secondProduct, Reviews);

// About Section
function Feutures(apiData) {
	let data = apiData.Feutures;
	let container = document.querySelector("#Feutures .boxes-container");
	data.map((item) => {
		let template = document.querySelector("#Feutures template").content.children[0].cloneNode(true);
		template.querySelector("img").src = `../images/${item.img}`;
		template.querySelector("h3").textContent = item.title;
		template.querySelector("p").textContent = item.content;
		container.append(template);
	});
}

// First Product Section
function firstProduct(apiData) {
	let data = apiData.Products.firstProduct;
	let container = document.querySelector("#firstProduct .swiper-wrapper");
	data.map((item) => {
		let template = document.querySelector("#firstProduct template").content.children[0].cloneNode(true);
		template.querySelector("img").src = `../images/${item.img}`;
		template.querySelector("h3").textContent = item.title;
		template.querySelector("p#content").textContent = item.content;
		template.querySelector("span#new").textContent = `$${item.new}`;
		template.querySelector("span#old").textContent = `$${item.old}`;
		container.append(template);
	});
}

// Second Product Section
function secondProduct(apiData) {
	let data = apiData.Products.secondProduct;
	let container = document.querySelector("#secondProduct .swiper-wrapper");
	data.map((item) => {
		let template = document.querySelector("#secondProduct template").content.children[0].cloneNode(true);
		template.querySelector("img").src = `../images/${item.img}`;
		template.querySelector("h3").textContent = item.title;
		template.querySelector("p#content").textContent = item.content;
		template.querySelector("span#new").textContent = `$${item.new}`;
		template.querySelector("span#old").textContent = `$${item.old}`;
		container.append(template);
	});
}

// Catagories Section
function Catagories(apiData) {
	let data = apiData.Catagories;
	let container = document.querySelector("#Catagories .boxes-container");
	data.map((item) => {
		let template = document.querySelector("#Catagories template").content.children[0].cloneNode(true);
		template.querySelector("img").src = `../images/${item.img}`;
		template.querySelector("h3").textContent = item.title;
		template.querySelector("p").textContent = item.discount;
		template.querySelector("button").textContent = "Show Now";
		container.append(template);
	});
}

// Reviews Section
function Reviews(apiData) {
	let data = apiData.Reviews;
	let container = document.querySelector("#Reviews .swiper-wrapper");
	data.map((item) => {
		let template = document.querySelector("#Reviews template").content.children[0].cloneNode(true);
		template.querySelector("img").src = `../images/${item.img}`;
		template.querySelector("h3").textContent = item.title;
		template.querySelector("p").textContent = item.content;
		container.append(template);
	});
}

// Blogs Section
function Blogs(apiData) {
	let data = apiData.Blogs;
	let container = document.querySelector("#Blogs .boxes-container");
	data.map((item) => {
		let template = document.querySelector("#Blogs template").content.children[0].cloneNode(true);
		template.querySelector("img").src = `../images/${item.img}`;
		template.querySelector("h3").textContent = item.title;
		template.querySelector("span#date").innerHTML = item.date;
		template.querySelector("p").textContent = item.content;
		container.append(template);
	});
}
