let a = 5;
let b = 3;
if(a > b) {
    console.log("a je vece od b.");
}
a = 5;
b = 5;
if(a == b) {
    console.log("a i b su jednaki.");
}
a = 3;
b = "3";
if(a == b) {
    console.log('a i b su jednaki');
}
a = 3;
b = "3";
if(a === b) {
    console.log("a i b su jednaki");
}
a = 10;
b = 16;
if(a > b) {
    console.log('a je vece od b');
} else {
    console.log('a je manje od b');
}
a = 4;
b = 5;
if(a == b) {
    console.log('a i b su jednaki');
} else {
    console.log('a i b nisu jednaki');
}
if(a != b) {
    console.log('a i b nisu jednaki');
} else {
    console.log('a i b su jednaki');
}
//1.
let x = 9;
let y = 18;
if(x > y) {
    console.log('X je vece od Y.');
} else {
    console.log('Y je vece od X.');
}

//2.
let temperatura = 12;
if(temperatura >= 0) {
    console.log('Temperatura je u plusu.');
} else {
    console.log('Temperatura je u minusu.');
}

//3.
let pol = "zenski";
let divSlika = document.getElementById("slika");
if(pol == "muski") {
    divSlika.innerHTML = "<img src='Slike/male.png'>";
} else {
    divSlika.innerHTML = "<img src='Slike/female.png'>";
}

//4.
let vreme = new Date();
let trenutno = vreme.getHours();
console.log(trenutno);
if(trenutno < 10) {
    console.log('Trenutno je jutro.');
} else {
    console.log('Trenutno je popodne.');
}

//5.
let godina = vreme.getFullYear();
let unetaGod = 2015;
let raz = godina - unetaGod;
if(raz >= 18) {
    console.log('Osoba je punoletna.');
} else {
    console.log('Osoba je maloletna.');
}

//6.
let prvi = 25;
let drugi = 30;
let treci = 15;
let najveci = prvi;
if(drugi > najveci) {
    najveci = drugi;
}
if(treci > najveci) {
    najveci = treci;
}
console.log(`Najveci je ${najveci}.`);

let broj = 25;
if(broj < 10) {
    console.log('Prva desetica.');
} else if(broj < 20) {
    console.log('Druga desetica.');
} else {
    console.log('Veci od 20.');
}

//7.
let ocena = 67;
if(ocena <= 50) {
    console.log('Student je pao ispit.');
} else if(ocena <= 60) {
    console.log('Student je dobio 6.');
} else if(ocena <= 70) {
    console.log('Sudent je dobio 7.');
} else if(ocena <= 80) {
    console.log('Student je dobio 8.');
} else if(ocena <= 90) {
    console.log('Student je dobio 9.');
} else if(ocena <= 100) {
    console.log('Student je dobio 10.');
}

//8.
let dan = vreme.getDay();
console.log(dan);
if(dan < 5) {
    console.log('Radni je dan.');
} else {
    console.log('Vikend je.');
}

//9.
if(trenutno <= 12) {
    console.log('Dobro jutro.');
    divSlika.innerHTML += "<p>Dobro jutro.</p>";
} else if(trenutno <= 18) {
    console.log('Dobar dan.');
    divSlika.innerHTML += "<p>Dobar dan.</p>";
} else {
    console.log('Dobro vece.');
    divSlika.innerHTML += "<p>Dobro vece.</p>";
}

//10.
let dan1 = 10;
let mesec1 = 1;
let godina1 = 2000;
console.log(`${dan1}.${mesec1}.${godina1}.`);

let dan2 = 19;
let mesec2 = 1;
let godina2 = 2000;
console.log(`${dan2}.${mesec2}.${godina2}.`);

if(godina1 < godina2) {
    console.log(`${dan1}.${mesec1}.${godina1}. je raniji.`);
} else if(godina2 < godina1) {
    console.log(`${dan2}.${mesec2}.${godina2}. je raniji.`);
} else {
    if(mesec1 < mesec2) {
        console.log(`${dan1}.${mesec1}.${godina1}. je raniji.`);
    } else if(mesec2 < mesec1) {
        console.log(`${dan2}.${mesec2}.${godina2}. je raniji.`);
    } else {
        if(dan1 < dan2) {
            console.log(`${dan1}.${mesec1}.${godina1}. je raniji.`);
        } else if(dan2 < dan1) {
            console.log(`${dan2}.${mesec2}.${godina2}. je raniji.`);
        } else {
            console.log('Datumi su isti.');
        }
    }
}

//11.
if(trenutno >= 9) {
    if(trenutno < 17) {
        console.log('Firma radi.');
    } else {
        console.log("Firma ne radi");
    }
} else {
    console.log("Firma ne radi.");
}

//13.
let nekiBroj = 10;
if(nekiBroj % 2 == 0) {
    console.log('Broj je paran.');
} else {
    console.log('Broj je neparan.');
}

//14.
nekiBroj = 7;
if(nekiBroj % 3 == 0) {
    console.log('Broj je deljiv sa tri.');
} else {
    console.log('Broj nije deljiv sa tri.');
}

//15.
let broj1 = 40;
let broj2 = 100;
let rez;
if(broj1 > broj2) {
    rez = broj1 - broj2;
    console.log(rez);
} else if(broj2 > broj1) {
    rez = broj2 - broj1;
    console.log(rez);
}

//16.
let br = 10;
if(br <= 0) {
    rez = br + 1;
    console.log(rez);
} else if(br > 0) {
    rez = br + 1;
    console.log(rez);
}

//17.
console.log("-----------");
let br1 = 11;
let br2 = 22;
let br3 = 70;
console.log(br1, br2, br3);

if(br1 >= br2 && br1 >= br3) {
    console.log(`Broj jedan je najveci.`);
} else if(br2 >= br1 && br2 >= br3) {
    console.log(`Broj dva je najveci.`);
} else if(br3 >= br1 && br3 >= br2) {
    console.log(`Broj tri je najveci.`);
}

if(br1 <= br2 && br1 <= br3) {
    console.log(`Broja jedan je najmanji.`);
} else if(br2 <= br1 && br2 <= br3) {
    console.log(`Broj dva je najmanji.`);
} else if(br3 <= br1 && br3 <= br2) {
    console.log(`Broj tri je najmanji.`);
}

if(br1 < br2 && br1 > br3) {
    console.log(`Broj jedan je srednji.`);
} else if(br1 > br2 && br1 < br3) {
    console.log(`Broj jedan je srednji.`);
} else if(br2 < br1 && br2 > br3) {
    console.log(`Broj dva je srednji.`);
} else if(br2 > br1 && br2 < br3) {
    console.log(`Broj dva je srednji.`);
} else if(br3 < br1 && br3 > br2) {
    console.log(`Broj tri je srednji.`);
} else if(br3 > br1 && br3 < br2) {
    console.log(`Broj tri je srednji.`);
}
console.log("------------------");

//12.
let lekar1pocetak = 13;
let lekar1kraj = 22;
let lekar2pocetak = 8;
let lekar2kraj = 13;

console.log(`Lekar 1 radi od ${lekar1pocetak} do ${lekar1kraj}.`);
console.log(`Lekar 2 radi od ${lekar2pocetak} do ${lekar2kraj}.`);

if(lekar1kraj >= lekar2pocetak && lekar2pocetak >= lekar1pocetak) {
    console.log(`Da.`);
} else if(lekar2kraj >= lekar1pocetak && lekar1pocetak >= lekar2pocetak) {
    console.log(`Da.`);
} else  {
    console.log('Ne.');
}

//18.
let ucitaniBroj = 5.3;
if(ucitaniBroj % 1 == 0) {
    console.log(`Ucitani broj ${ucitaniBroj} je ceo.`);
} else {
    console.log(`Ucitani broj ${ucitaniBroj} nije ceo.`);
}

//Primer ugnjezdenog granjana
pol = "z";
godine = 25;

if(pol == "m") {
    if(godine >= 18) {
        console.log("Musko, punoletan.");
    } else {
        console.log("Musko, maloletan.");
    }
} else {
    if(godine >= 18) {
        console.log("Zensko, punoletna.");
    } else {
        console.log("Zensko, maloletna.");
    }
}

//Primer logickih operatora
if(pol == "m" && godine >= 18) {
    console.log('Musko, punoletan.');
} else if(pol == "m" && godine < 18) {
    console.log('Musko, maloletan.');
} else if(pol == "z" && godine >= 18) {
    console.log('Zensko, punoletna.');
} else if(pol == "z" && godine < 18) {
    console.log('Zensko, maloletna.');
}

//19.
br1 = 83;
br2 = 27;
console.log(br1, br2);
if(br1 > br2) {
    if(br1 % 2 == 0) {
        console.log('Broj jedan je veci od broja dva i paran je.');
    } else {
        console.log('Broj jedan je veci od broja dva i neparan je.');
    }
} else if(br2 > br1) {
    if(br2 % 2 ==0) {
        console.log('Broj dva je veci od broja jedan i paran je.');
    } else {
        console.log('Broj dva je veci od broja jedan i neparan je.');
    }
} else {
    if(br1 % 2 == 0 && br2 % 2 == 0) {
        console.log('Brojevi su jednaki i parni su.');
    } else if(br1 % 2 != 0 && br2 % 2 != 0) {
        console.log('Brojevi su jednaki i neparni su.');
    } else if(br1 % 2 == 0 && br2 % 2 != 0) {
        console.log('Brojevi su jednaki i broj jedan je paran, a broj dva neparan.');
    } else if(br1 % 2 != 0 && br2 % 2 == 0) {
        console.log('Brojevi su jednaki i broj jedan je naparan, a broj dva je paran.');
    }
}

//21
a = 92;
b = 89;
let c = 212;

if(a >= b && a >= c) {
    console.log(`Najveci je ${a}.`);
} else if(b >= a && b >= c) {
    console.log(`Najveci je ${b}.`);
} else if(c >= a && c >= b) {
    console.log(`Najveci je ${c}.`);
}

//22
temperatura = -16;
if(temperatura < -15 || temperatura > 40) {
    console.log('Ekstremna temperatura.');
} else {
    console.log('Temperatura nije ekstremna.');
}

//23
//godina
console.log('--------------');
if(godina % 4 == 0 && godina % 100 != 0) {
    console.log('Godina je prestupna.');
} else {
    console.log('Godina nije prestupna.');
}

//24
let butikPocetakRadnim = 9;
let butikKrajRadnim = 20;
let butikPocetakVikendom = 10;
let butikKrajVikendom = 18;
//dan, trenutno
if(dan <= 5) {
    if(trenutno >= 9 && trenutno <= 20) {
        console.log('Butik je trenutno otvoren.');
        divSlika.innerHTML += "<p>Butik je trenutno otvoren.</p>"
    } else {
        console.log('Butik je trenutno zatvoren.');
        divSlika.innerHTML += "<p>Butik je trenutno zatvoren.</p>"
    }
} else if(dan == 6 || dan == 7) {
    if(trenutno >= 10 && trenutno <= 18) {
        console.log('Butik je trenutno otvoren.');
        divSlika.innerHTML += "<p>Butik je trenutno otvoren.</p>"
    } else {
        console.log('Butik je trenutno zatvoren.');
        divSlika.innerHTML += "<p>Butik je trenutno zatvoren.</p>"
    }
}