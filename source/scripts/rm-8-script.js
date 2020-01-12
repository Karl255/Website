function shortenAddress() {
	document.getElementById("shortAddress").value = document.getElementById("longAddress").value.replace(/\b:?(?:0+:?){2,}/, '::');
}