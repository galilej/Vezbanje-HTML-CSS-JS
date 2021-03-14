let film1 = {
    nazivFilma: "Get Out",
    reziserFilma: "Jordan Peele",
    trajanjeFilmaUMinutima: 104,
    poster: "<img src='slike/getOut.jpg' width='200px'>"
};
let film2 = {
    nazivFilma: "Inception",
    reziserFilma: "Christopher Nolan",
    trajanjeFilmaUMinutima: 148,
    poster: "<img src='slike/inception.jpg' width='200px'>"
};
let film3 = {
    nazivFilma: "Shutter Island",
    reziserFilma: "Martin Scorsese",
    trajanjeFilmaUMinutima: 138,
    poster: "<img src='slike/sI.jpg' alt='Poster za Shutter Island' width='200px'>"
};
let film4 = {
    nazivFilma: "Fracture",
    reziserFilma: "Gregory Hoblit",
    trajanjeFilmaUMinutima: 113,
    poster: "<img src='slike/fracture.jpg' width='200px'>"
};
let film5 = {
    nazivFilma: "Identity",
    reziserFilma: "James Mangold",
    trajanjeFilmaUMinutima: 90,
    poster: "<img src='slike/identity.jpg' alt='Slika' width='200px'>"
};
let filmovi = [film1, film2, film3, film4, film5];

let tabela = document.createElement('table');
tabela.style.border = "1px solid black";
tabela.style.width = "100%";
document.body.appendChild(tabela);

for(let i = 0; i < filmovi.length; i++) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerHTML += filmovi[i].poster;
    td1.style.width += "50%";
    tr.appendChild(td1);
    let td2 = document.createElement('td');
    td2.style.textAlign = "center";
    td2.style.width += "50%";
    let p1 = document.createElement('p');
    p1.style.fontSize = "24px";
    p1.style.color = "blue";
    td2.appendChild(p1);
    tr.appendChild(td2);
    if(filmovi[i].trajanjeFilmaUMinutima > 120) {
        p1.innerHTML += `<b>${filmovi[i].nazivFilma}</b><br><br>${filmovi[i].reziserFilma}<br><br>${filmovi[i].trajanjeFilmaUMinutima}`;
    } else {
        p1.innerHTML += `${filmovi[i].nazivFilma}<br><br>${filmovi[i].reziserFilma}<br><br>${filmovi[i].trajanjeFilmaUMinutima}`
    }
    if([i] % 2 == 0) {
        tr.style.backgroundColor += "yellow";
    } else {
        tr.style.backgroundColor += "gray";
    }
    tabela.appendChild(tr);
}

let div1 = document.createElement('div');
let p2 = document.createElement('p');
let naz = niz => {
    let duzina = niz[0].nazivFilma.length;
    let ime = niz[0].nazivFilma;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].nazivFilma.length > duzina) {
            duzina = niz[i].nazivFilma.length;
            ime = niz[i].nazivFilma;
        }
    }
    return ime;
}
p2.innerHTML += `Film sa najduzim naslovom je: ${naz(filmovi)}.`;
p2.style.fontSize = "20px";
p2.style.backgroundColor = "red";
p2.style.color = "white";
div1.style.width = "50%";
div1.appendChild(p2);
document.body.appendChild(div1);

let div2 = document.createElement('div');
let p3 = document.createElement('p');

let n = arr => {
    let br = 0;
    let ime = "";
    for(let i = 0; i < arr.length; i++) {
        let imeRez = arr[i].reziserFilma;
        for(let j = 0; j < arr.length; j++) {
            if(arr[j].reziserFilma == imeRez) {
                br++;
            }
        }
        if(br >= 2) {
            ime = imeRez;
        }
    br = 0;
    }
    return ime;
}
p3.innerHTML = `Ime rezisera koje se ponavlja je: ${n(filmovi)}.`;
document.body.appendChild(div2);
div2.style.backgroundColor = "gold";
div2.style.width = "70%";
div2.appendChild(p3);
p3.style.color = "red";
p3.style.fontSize = "25px";

let div3 = document.createElement('div');
let p4 = document.createElement('p');
document.body.appendChild(div3);
div3.appendChild(p4);
let trajanje = niz => {
    let br = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].trajanjeFilmaUMinutima > 120) {
            br++;
        }
    }
    return br;
}
p4.innerHTML = `Broj filmova koji traju duze od dva sata je: ${trajanje(filmovi)}.`;
div3.style.backgroundColor = "cadetblue";
div3.style.width = "50%";
div3.style.height = "35px";
div3.style.textAlign = "center";

let div4 = document.createElement('div');
let p5 = document.createElement('p');
document.body.appendChild(div4);
div4.appendChild(p5);
let broj = niz => {
    let br = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].poster.includes('alt')) {
            br++;
        }
    }
    return br;
}
p5.innerHTML = `Broj postera koji imaju alternativni tekst je: ${broj(filmovi)}.`;
div4.style.textAlign = "center";
p5.style.fontSize = "25px";
p5.style.color = "royalblue";
div4.style.border = "2px dotted black";
div4.style.borderRadius = "50%";
div4.style.backgroundColor = "yellowgreen";
div4.style.width = '25%';
div4.style.margin = "10% 35%";