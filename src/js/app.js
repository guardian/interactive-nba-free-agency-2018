var button = document.querySelector("#table-one-button");

button.addEventListener('click', function(){
	var table = document.querySelector("#table-one")
	table.classList.add("all-visible")
	button.remove()
})


console.log(button)