function shortenAddress() {
	//dobivanje adrese
	//split razdvaja string IPv6 adrese u polje od 8 elemenata
	//map s danom anonimnom funkcijom pretvara svaki element polja u broj (ovako nestaju vodeće nule)
	let address = document.getElementById("longAddress").value.split(":").map(x => parseInt(x, 16));
	let start = 0;
	let end = 0;
	//ovaj dio koda pronalazi najduži redoslijed nula u adresi
	for (let i = 0; i < 8; i++) {
		//traži prvu nulu
		if (address[i] === 0) {
			//indeks prve nule u nizu
			let tempStart = i;
			while (i < 8 && address[i] === 0) { //TODO: test without i < 8
				i++;
			}

			//index nakon zadnje nule u nizu
			let tempEnd = i;

			//ako je niz nula duži od prethodno pronađenog niza
			//i ako niz nula nije duljine 1 i na početku ili kraju adrese
			if (tempEnd - tempStart > end - start && !(tempEnd - tempStart < 2 && (tempStart === 0 || tempStart === 7))) {
				//spremi indekse
				start = tempStart;
				end = tempEnd;
			}
		}
	}

	//ako je pronađen redoslijed nula
	if (end - start > 0) {
		//zamijeni redoslijed nula s praznim stringom
		//to će kasnije kod join funkcije postati ::
		address.splice(start, end - start, "");
		//ako redoslijed nula počinje na početku adrese ili završava na kraju adrese,
		//dodat će se prazan string, to je potrebno da nastane ::
		if (start === 0) {
			address.unshift("");
		}
		if (end === 8) {
			address.push("");
		}
	}
	//map funkcija će svaki element pretvoriti u string po bazi 16
	//join će spojiti elemente polja s : između svakog elementa
	document.getElementById("shortAddress").value = address.map(x => x.toString(16)).join(":");
}
