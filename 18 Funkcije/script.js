function mojaFunkcija() {
    console.log('Zdravo!');
}
mojaFunkcija();

function mojaF(tekst) {
    console.log(tekst);
}
mojaF("ITBootcamp");
tekst = "Zdravo svete!";
mojaF(tekst);

function korisnik(ime, prezime) {
    console.log(`Korisnik ${ime} ${prezime}.`);
}
korisnik("Ana", "Antic");
korisnik("Nikola", "Spasovski");
korisnik("Vuk", "Vulic");
korisnik("Bojana", "Bokic");

function kor(ime, god) {
    console.log(`${ime} ima ${god} godina.`);
}
kor("Ana", 18);
kor("Bojana", 23);
kor("Vuk", 21);

function zbir(a, b) {
    rez = a + b;
    console.log(rez);
}
zbir(5, 10);
let a = 2;
let b = 7;
zbir(a, b);

function sum(a, b) {
    let rez = a + b;
    return rez;
}
let rezultat = sum(5, 17);
console.log(rezultat);

function zb(a, b) {
    let rez = a + b;
    return rez;
}
let c = zb(2, 3);
let d = zb(1, 4);
let e = zb(c, d);
console.log(e);