function shortenAddress() {
	let address = document.getElementById("longAddress").value.split(":").map(x => parseInt(x, 16));
	let start = 0;
	let end = -1;
	for (let i = 0; i < 8; i++) {
		if (address[i] === 0) {
			while (i < 8 && address[i + 1] === 0) {
				let temp = i;
				if (i + 1 - temp > end - start) {
					start = temp;
					end = i + 1;
				}
				i++;
			}
		}
	}
	if (start == 0) {
		address[0] = "";
		start++;
	}
	if (end == 8) {
		address[7] = "";
		end--;
	}
	address.splice(start, end - start, "");
	document.getElementById("shortAddress").value = address.map(x => x.toString(16)).join(":");
}
