console.log("Prvi zadatak");
let divTekst = document.getElementById("tekst");
divTekst.style.color = "red";

let lekar1PocetakSati = 15;
let lekar1PocetakMinuti = 0;
let lekar1PocetakUkupno = lekar1PocetakSati * 60 + lekar1PocetakMinuti;
let lekar1KrajSati = 20;
let lekar1KrajMinuti = 0;
let lekar1KrajUkupno = lekar1KrajSati * 60 + lekar1KrajMinuti;

console.log(`Radno vreme prvog lekara je od ${lekar1PocetakSati}:${lekar1PocetakMinuti} do ${lekar1KrajSati}:${lekar1KrajMinuti}.`);
divTekst.innerHTML += `<p>Radno vreme prvog lekara je od ${lekar1PocetakSati}:${lekar1PocetakMinuti} do ${lekar1KrajSati}:${lekar1KrajMinuti}.</p>`;

let lekar2PocetakSati = 9;
let lekar2PocetakMinuti = 0;
let lekar2PocetakUkupno = lekar2PocetakSati * 60 + lekar2PocetakMinuti;
let lekar2KrajSati = 15;
let lekar2KrajMinuti = 10;
let lekar2KrajUkupno = lekar2KrajSati * 60 + lekar2KrajMinuti;

console.log(`Radno vreme drugog lekara je od ${lekar2PocetakSati}:${lekar2PocetakMinuti} do ${lekar2KrajSati}:${lekar2KrajMinuti}.`);
divTekst.innerHTML += `<p>Radno vreme drugog lekara je od ${lekar2PocetakSati}:${lekar2PocetakMinuti} do ${lekar2KrajSati}:${lekar2KrajMinuti}.</p>`

//Kada lekar1 radi pre lekara2
let preklapanje1Sati = Math.floor((lekar1KrajUkupno - lekar2PocetakUkupno) / 60);
let preklapanje1Minuti = (lekar1KrajUkupno - lekar2PocetakUkupno) % 60;
//Kada lekar2 radi pre lekara1
let preklapanje2Sati = Math.floor((lekar2KrajUkupno - lekar1PocetakUkupno) / 60);
let preklapanje2Minuti = (lekar2KrajUkupno - lekar1PocetakUkupno) % 60;

if(lekar1PocetakSati <= lekar2PocetakSati && lekar1KrajSati >= lekar2PocetakSati) {
    console.log(`Preklapaju se ${preklapanje1Sati}:${preklapanje1Minuti}.`);
    divTekst.innerHTML += `<p><b>Preklapaju se ${preklapanje1Sati}:${preklapanje1Minuti}.</b></p>`;
} else if(lekar2PocetakSati <= lekar1PocetakSati && lekar2KrajSati >= lekar1PocetakSati) {
    console.log(`Preklapaju se ${preklapanje2Sati}:${preklapanje2Minuti}.`);
    divTekst.innerHTML += `<p><b>Preklapaju se ${preklapanje2Sati}:${preklapanje2Minuti}.</b></p>`;
} else {
    console.log('Nema preklapanja.');
    divTekst.innerHTML += `<p>Nema preklapanja.</p>`;
}

console.log('-------------------');
console.log('Drugi zadatak');
divTekst.innerHTML += `<hr>`
//Povrsina lokala v m**2
let v = 75;
//Broj gostiju n
let n = 40;
//mera vlade je da za svakog coveka mora biti obezbedjeno 3m**2
let mera = n * 3;
let trebaloBi = Math.floor(v / 3);
let moraDaNapusti = n - trebaloBi;

console.log(`U lokalu povrsine ${v} metara kvadratnih trenunto se nalazi ${n} ljudi.`)
divTekst.innerHTML += `<p style='color: blue'>U lokalu povrsine ${v} metara kvadratnih trenunto se nalazi ${n} ljudi.</p>`

if(mera <= v) {
    console.log('Da, kafic se pridrzava propisanih mera.');
    divTekst.innerHTML += "<p style='color: blue'><b>Da, kafic se pridrzava propisanih mera.</b></p>"
} else if(mera > v) {
    console.log(`Ne, kafic ne ispunjava propisane mere. Kafic bi trebalo da napusti ${moraDaNapusti} ljudi.`);
    divTekst.innerHTML += `<p style='color: blue'><b>Ne, kafic ne ispunjava propisane mere. Kafic bi trebalo da napusti ${moraDaNapusti} ljudi.</b></p>`
}

console.log('-------------------------');
console.log('Treci zadatak');
divTekst.innerHTML += `<hr>`;
let podaci = new Date();
let datum = podaci.getDate();
let mesec = podaci.getMonth()+1;
let godina = podaci.getFullYear();
console.log(`Trenutno je ${datum}.${mesec}.${godina}.`);
divTekst.innerHTML += `<p style="color: green">Trenutno je ${datum}.${mesec}.${godina}.</p>`
let preostalo;

switch(mesec) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        preostalo = 31 - datum;
        console.log(`Do kraja meseca preostalo je jos ${preostalo} dana.`);
        divTekst.innerHTML += `<p style="color: green"><b>Do kraja meseca preostalo je jos ${preostalo} dana.</b></p>`
        break;
    case 4: case 6: case 9: case 11:
        preostalo = 30 - datum;
        console.log(`Do kraja meseca preostalo je jos ${preostalo} dana.`);
        divTekst.innerHTML += `<p style="color: green"><b>Do kraja meseca preostalo je jos ${preostalo} dana.</b></p>`
        break;
    case 2:
        if(godina % 4 == 0 && godina % 100 != 0) {
            preostalo = 29 - datum;
            console.log(`Do kraja meseca preostalo je jos ${preostalo} dana.`);
            divTekst.innerHTML += `<p style="color: green">Do kraja meseca preostalo je jos ${preostalo} dana.</p>`
        } else {
            preostalo = 28 - datum;
            console.log(`Do kraja meseca preostalo je jos ${preostalo} dana.`);
            divTekst.innerHTML += `<p style="color: green">Do kraja meseca preostalo je jos ${preostalo} dana.</p>`
        }
}