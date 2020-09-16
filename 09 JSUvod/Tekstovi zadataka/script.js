//Prvi zadatak
let sati = 5;
let minuti = 20;
let sum = sati * 60;
let ukupno = sum + minuti;
console.log(`Zadato vreme je ${sati}:${minuti}.`);
console.log(`Od ponoci je proslo ${ukupno} minuta.`);

//Drugi zadatak
let povratakUSate = Math.floor(ukupno / 60);
let povratakUMinute = ukupno % 60;
console.log(povratakUSate);
console.log(povratakUMinute);

//Treci zadatak
let cenaRobe = 600;
let unetaNovcanica = 2000;
let kusur = unetaNovcanica - cenaRobe;
console.log(`Cena robe je ${cenaRobe} dinara. Kupac daje ${unetaNovcanica} dinara. Kasirka treba da vrati ${kusur} dinara.`);

//Cetvrti zadatak
let vreme = new Date();
let trenutnoSati = vreme.getHours();
let trenutnoMinuta = vreme.getMinutes();
console.log(`Trenutno je ${trenutnoSati}:${trenutnoMinuta}.`);
let uMinutima = trenutnoSati * 60 + trenutnoMinuta;
console.log(`Od ponoci je proslo ${uMinutima} minuta.`);

//Peti zadatak
let dan = vreme.getDate();
let mesec = vreme.getMonth() + 1;
let godina = vreme.getFullYear();
console.log(`Danasnji datum je ${dan}.${mesec}.${godina}. ili u drugacijem formatu ${godina}/${mesec}/${dan}.`);

//Sesti zadatak
let dinari = 1000;
let evri = dinari / 117.5838;
console.log(`Konverzija dinara u evro: ${dinari} u evrima je ${evri}.`);
let obrnuto = evri * 117.5838;
console.log(`Povratak u dinare: ${evri} u dinarima je ${obrnuto}.`);

//Sedmi zadatak
let dolar = 50;
let dolarUDinar = 50 * 98.0600;
console.log(`${dolar} dolara u dinarima je ${dolarUDinar}.`);
let dinarUEvro = dolarUDinar / 117.5838;
console.log(`${dolar} dolara je ${dinarUEvro} evra.`);

//Osmi zadatak
let celzijus = 20;
let farenhajt = celzijus * 1.8 + 32;
console.log(`${celzijus} stepeni Celzijusa u Faranhajtima je ${farenhajt} stepeni.`);
let obrnutoo = (farenhajt - 32) / 1.8;
console.log(`Povratak iz Farenhajta u Celzijuse: ${obrnutoo}.`);

//Deveti zadatak
let kelvin = celzijus + 273.15;
console.log(`${celzijus} stepeni Celzijusa u Kelvinima je ${kelvin}.`);
let obrnuto2 = kelvin - 273.15;
console.log(`Povratak iz Kelvina u Celzijuse: ${obrnuto2}.`);