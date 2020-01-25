function shortenAddress() {
	let a = document.getElementById("longAddress").value.split(":").map(x => parseInt(x, 16));
	let s = 0;
	let e = -1;
	for (let i = 0; i < 8; ++i) if (a[i] === 0) for (let t = i; i < 8 && a[i + 1] === 0; ++i && i + 1 - t > e - s && (s = t) + 1 && (e = i + 1));
	a.splice((s == 0 && !(a[0] = "") && s++) + 1 && (e == 8 && !(a[7] = "") && e--) + 1 ? s : e, e - s, "");
	document.getElementById("shortAddress").value = a.map(x => x.toString(16)).join(":");
}