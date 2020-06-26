function updateDebugNav() {
	document.getElementsByClassName("debug-navigation")[0].style.display =
		sessionStorage.getItem("debugMode") === "false"
		? "none"
		: "inline-block";
}

function toggleDebugNav() {
	sessionStorage.setItem("debugMode",
		sessionStorage.getItem("debugMode") === "false"
		? "true"
		: "false");
	updateDebugNav();
}

if (sessionStorage.getItem("debugMode") === null) {
	sessionStorage.setItem("debugMode", "false");
}

updateDebugNav();
