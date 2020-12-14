function showText(show) {
	let elements = document.getElementsByTagName("p");
	
	for (const element of elements) {
		element.style.visibility = show ? "visible" : "hidden";
	}
}

function paintTitles() {
	let elements = document.getElementsByTagName("h1");
	
	for (const element of elements) {
		element.style.color = "white";
	}
}

function toggleFooter() {
	let elements = document.getElementsByTagName("footer");
	
	for (const element of elements) {
		let state = element.style.display;
		element.style.display = state == "none" ? "block" : "none";
	}
}

function removeButtons() {
	let elements = document.getElementsByTagName("button");
	
	// this method of iterating is necessary, because as the elements get removed form the document,
	// they also get removed from the array and the 1st element becomes the 0th element and so on
	while (elements.length > 0) {
		elements[0].remove();
	}
}
