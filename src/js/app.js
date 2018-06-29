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

const allRows = Array.prototype.slice.call(document.querySelectorAll(".trackerRow"));

const searchBox = document.querySelector("#search-input");

searchBox.addEventListener("keyup", (e) => {
    const searchBoxTerm = searchBox.value;
    
    if(searchBoxTerm.length < 3 && searchBoxTerm !== "") {
        return;
    }

    allRows.forEach(el => {
        if(el.getAttribute("data-search").toLowerCase().indexOf(searchBoxTerm.toLowerCase()) > -1) {
            el.style.display = "";
        } else {
            el.style.display = "none";
        }
    });
});
