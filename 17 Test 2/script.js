//1.
let divZadatak1 = document.getElementById("zadatak1");
let tezina = 230;
let cenaBezPopusta = tezina * 5;
let cenaSaPopustom = cenaBezPopusta - (cenaBezPopusta / 100 * 10);
console.log(`Cena bez popusta je ${cenaBezPopusta} dinara, cena sa popustom je ${cenaSaPopustom} dinara.`);
divZadatak1.innerHTML = `<p>Cena bez popusta je ${cenaBezPopusta} dinara, cena sa popustom je ${cenaSaPopustom} dinara.</p>`

//2.
console.log('--------------------------');
let divTrenutno = document.getElementById('trenutno');
let divSlika = document.getElementById('slika');
let divZadatak2 = document.getElementById('zadatak2');
let pocetakSati = 9;
let pocetakMinuti = 0;
let krajSati = 17;
let krajMinuti = 0;
let data = new Date();
let sati = data.getHours();
let minuti = data.getMinutes();
console.log(`${sati}:${minuti}`);
let preostaloSati = krajSati - sati;
let preostaloMinuta = krajMinuti - minuti;
let doPocetka = pocetakSati - sati;
let doPocetkaM = pocetakMinuti - minuti;

if(sati < pocetakSati) {
    console.log(`Radno vreme jos uvek nije pocelo.`);
    divTrenutno.innerHTML = '<p>Radno vreme jos nije pocelo</p>';
    divSlika.innerHTML = '<img src="Slike/close.jpg" width="300px">';
    divZadatak2.innerHTML = `<p>Do pocetka rada cvecare preostalo je jos: ${doPocetka}:${doPocetkaM}.</p>`;
} else if(sati >= pocetakSati && sati <= krajSati) {
    console.log(`Do kraja radnog vremena ostalo je jos ${preostaloSati}:${preostaloMinuta}.`);
    divTrenutno.innerHTML = '<p>Trenutno je otvoreno</p>';
    divSlika.innerHTML = '<img src="Slike/open.jpg" width="300px">';
    divZadatak2.innerHTML = `<p>Do kraja radnog vremena preostalo je: ${preostaloSati}:${preostaloMinuta}.</p>`
} else if(sati > krajSati && minuti >= krajMinuti) {
    console.log(`Radno vreme je vec zavrseno.`);
    divTrenutno.innerHTML = '<p>Radno vreme je vec zavrseno</p>';
    divSlika.innerHTML = '<img src="Slike/close.jpg" width="300px">';
    divZadatak2.innerHTML = "<p>Vidiomo se sutra.</p>";
}

//3.
let divZadatak3 = document.getElementById('zadatak3');
let ukupno = 25;
let plavi = 9;
let zuti = 19;
let zutoPlavi = (plavi + zuti) - ukupno;
if(plavi >= 10 && zuti >= 10 && zutoPlavi >= 5) {
    console.log(`Buket ima ${plavi} plavih cvetova, ${zuti} zutih cvetova i ${zutoPlavi} zuto-plavih cvetova. Buket je ekskluzivan.`);
    divZadatak3.innerHTML = `<p>Buket koji ste narucili ima ${plavi} plavih cvetova, ${zuti} zutih cvetova i ${zutoPlavi} zuto-plavih cvetova. Buket je ekskluzivan.</p>`;
} else {
    console.log(`Buket ima ${plavi} plavih cvetova, ${zuti} zutih cvetova i ${zutoPlavi} zuto-plavih cvetova. Buket nije ekskluzivan.`);
    divZadatak3.innerHTML = `<p>Buket koji ste narucili ima ${plavi} plavih cvetova, ${zuti} zutih cvetova i ${zutoPlavi} zuto-plavih cvetova. Buket nije ekskluzivan.</p>`;
}