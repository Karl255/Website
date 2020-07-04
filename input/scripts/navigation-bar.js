//show or hide debug nav
function updateDebugNav() {
	let el = document.getElementsByClassName("debug-navigation")[0];
	if (sessionStorage.debugMode === "true")
		el.style = ""; //remove inline style
	else
		el.style.display = "none"; //add inline style to hide it
}

//button event handler
//inverts value in session storage and then updates debug nav element
function toggleDebugMode() {
	sessionStorage.debugMode = sessionStorage.debugMode === "false" ? "true" : "false";
	updateDebugNav();
}

//if unset, set
if (sessionStorage.getItem("debugMode") === null) {
	sessionStorage.setItem("debugMode", "false");
}

//update debug nav on page load
updateDebugNav();
