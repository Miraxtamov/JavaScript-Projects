const value = document.querySelector("#value");
const btnDecrement = document.querySelector(".decrement");
const btnReset = document.querySelector(".reset");
const btnIncrement = document.querySelector(".increment");

btnDecrement.addEventListener("click", () => {
	value.textContent = Number(value.textContent) - 1;
	value.style.color = "red";
});

btnIncrement.addEventListener("click", () => {
	value.textContent = Number(value.textContent) + 1;
	value.style.color = "green";
});

btnReset.addEventListener("click", () => {
	value.textContent = Number(0);
	value.style.color = "black";
});
