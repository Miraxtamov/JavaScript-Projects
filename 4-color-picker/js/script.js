const colorFunc = () => {
	let colorPicker = document.querySelector("#inputColor").value;
	document.body.style.backgroundColor = colorPicker;
	document.querySelector("#inputText").value = colorPicker;
};

const copy = () => {
	const hexColor = document.querySelector("#inputText");
	const demo = document.querySelector(".demo");
	const copyHEX = document.querySelector("#copyHEX");
	navigator.clipboard.writeText(hexColor.value);
	demo.innerHTML = "Copied!";
	demo.style.display = "block";
};
