var button = document.querySelector("#table-one-button");
var buttonTwo = document.querySelector("#table-two-button");

button.addEventListener('click', function(){
	var table = document.querySelector("#table-one")
	table.classList.add("all-visible")
	button.remove()
})

buttonTwo.addEventListener('click', function(){
	var tableTwo = document.querySelector("#table-two")
	tableTwo.classList.add("all-visible")
	buttonTwo.remove()
})


console.log(button)
console.log(buttonTwo)