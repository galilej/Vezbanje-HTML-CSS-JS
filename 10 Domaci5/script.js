//Prvi zadatak
console.log("Prvi zatak");
let farenhajt = 68;
let celzijus = (farenhajt - 32) * 5 / 9;
console.log(celzijus);
let kelvin = celzijus + 273.15;
console.log(`${farenhajt} stepeni Farenhaja je ${kelvin} stepeni Kelvina.`);
let kuCel = kelvin - 273.15;
console.log(kuCel);
let cuFar = kuCel / 5 * 9 + 32;
console.log(cuFar);

//Drugi zadatak
console.log("Drugi zadatak");
let n = 60;
let a = 10;
let drugi = a + 2;
let kraj = n - (a + drugi);
console.log(`Do kraja knjige ostalo je jos ${kraj} poglavlja.`);

//Treci zadatak
console.log("Treci zadatak");
let p = 800;
let m = 900;
let k = 500;
let cena = ((p + m) - k) / 2;
console.log(`Pera treba da dobije kusur od ${p - cena} dinara, a Mika treba da dobije kusur od ${m - cena} dinara.`);