//1.
function pozdrav(ime, prezime) {
    console.log(`Zdravo ${ime} ${prezime}!`);
}
pozdrav("Nikola", "Spasovski");

//2.
console.log('----------------------------------');
function zbir(a, b) {
    let rez = a + b;
    console.log(rez);
}
zbir(5, 15);

//3.
console.log('----------------------------------');
function neparan(n) {
    if(n % 2 != 0) {
        console.log("Tacno");
    } else {
        console.log("Netacno");
    }
}
neparan(6);

//4.
console.log('----------------------------------');
function maks2(a, b) {
    let veci = a;
    if(a < b) {
        veci = b;
    }
    return veci;
}
let rez = maks2(55, 20);
console.log(rez);

function maks4(a, b, c, d) {
    let veci1 = maks2(a, b);
    let veci2 = maks2(c, d);
    if(veci1 > veci2) {
        return veci1;
    } else if(veci2 > veci1) {
        return veci2;
    }
}
rez = maks4(2, 10, 3, 20);
console.log(rez);

//5.
let divSlika = document.getElementById("slika");
function slika(url) {
    divSlika.innerHTML = `<img src="${url}" width="600px">`;
}
slika("Slike/1.jpg");

//6.
let divParagraf = document.getElementById("paragraf");
divParagraf.innerHTML = `<p>Neki tekst.</p>`;
function color(color) {
    divParagraf.style.color = `${color}`;
}
color('blue');

//7.
function velicina(a) {
    divParagraf.style.fontSize = `${a}px`;
}
velicina(60);

//8.
let divTekst = document.getElementById('tekst');
divTekst.innerHTML = `<p>Neki tekst.</p>`;
function iterator(a) {
    for(let i = 1; i < a; i++) {
        divTekst.innerHTML += `<p>Neki tekst.</p>`;
    }
    divTekst.style.fontSize = `${a}px`;
}
iterator(5);

//9.
console.log('----------------------------------');
function sedmiDan(n) {
    switch(n) {
        case 0: case 7:
            console.log('Nedelja.');
        break;
        case 1:
            console.log('Ponedeljak.');
        break;
        case 2:
            console.log('Utorak.');
        break;
        case 3:
            console.log('Sreda.');
        break;
        case 4:
            console.log('Cetvratak.');
        break;
        case 5:
            console.log('Petak.');
        break;
        case 6:
            console.log('Subota.');
    }
}
sedmiDan(7);

//10.
console.log('----------------------------------');
function deljivSaTri(n, m) {
    let br = 0;
    for(let i = n; i <= m; i++) {
        if(i % 3 == 0) {
            console.log(`Od ${n} do ${m}, broj ${i} je deljiv sa 3.`);
            br++;
        }
    }
    console.log(`U intrvalu od ${n} do ${m} broj brojeva koji su deljivi sa 3 je ${br}.`);
}
deljivSaTri(1, 40);

//11.
console.log('----------------------------------');
function sumiraj(n, m) {
    let sum = 0
    for(let i = n; i <= m; i++) {
        sum += i;
    }
    console.log(sum);
}
sumiraj(1, 10);

//12.
console.log('----------------------------------');
function mnozi(n, m) {
    let pro = 1;
    for(let i = n; i <= m; i++) {
        pro *= i;
    }
    console.log(pro);
}
mnozi(1, 10);

//13.
console.log('----------------------------------');
function ar(n, m) {
    let ar;
    let sum = 0;
    let br = 0;
    for(let i = n; i <= m; i++) {
        br++;
        sum += i;
    }
    ar = sum / br;
    return ar;
}
let aritmeticka = ar(0, 100);
console.log(aritmeticka);

//14.
console.log('----------------------------------');
function arit(n, m) {
    let ar;
    let sum = 0;
    let br = 0;
    for(let i = n; i <= m; i++) {
        if(i % 10 == 3) {
            br++;
            sum += i;
        }
    }
    ar = sum / br;
    return ar;
}
let aritmetickaSredinaBrojeva = arit(1, 64);
console.log(aritmetickaSredinaBrojeva);

//15.
console.log('----------------------------------');
function trajanjeLeta(poletanjeSat, poletanjeMin, sletanjeSat, SletanjeMin) {
    let poletanjeUkupno = (poletanjeSat * 60) + poletanjeMin;
    let sletanjeUkupno = (sletanjeSat * 60) + SletanjeMin;
    let ukupno = sletanjeUkupno - poletanjeUkupno;
    let ukupnoSat = Math.floor(ukupno / 60);
    let ukupnoMin = ukupno % 60;
    console.log(`Let je trajao ${ukupnoSat} sati i ${ukupnoMin} minuta.`);
}
trajanjeLeta(9, 10, 20, 40);

//16.
console.log('----------------------------------');
function jaban(isporuceneJabuke, isporuceneBanane) {
    let posto = Math.floor((isporuceneJabuke /100) * 20);
    let dobrihJabuka = isporuceneJabuke - posto;
    let br = 0;
    let jabuke = dobrihJabuka;
    let banane = isporuceneBanane;
    let porcijaJabuka = 2;
    let porcijaBanana = 3;
    while(porcijaJabuka <= jabuke && porcijaBanana <= banane) {
        br++;
        jabuke -= porcijaJabuka;
        banane -= porcijaBanana;
    }
    return br;
}
let porcija = jaban(200, 200);
console.log(`Moguce je napraviti ${porcija} porcija Jaban slatkisa.`);

//17.
console.log('----------------------------------');
function praksa(n, a) {
    let d = 5000;
    let i = 1;
    while(i <= n) {
        a = a + d;
        i++;
    }
    return a;
}
let ukupno = praksa(6, 20000);
console.log(ukupno);

//18.
console.log('----------------------------------');
function takmicenje(t, p, n) {
    let cekanje = 0;
    if(t < p) {
        console.log('Nema cekanja.');
    } else if(t > p) {
        cekanje = n - (t - p);
        console.log(`Takmicari treba da cekaju ${cekanje} sekundi.`);
    }
}
takmicenje(25, 15, 15);