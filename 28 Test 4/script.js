let sportista1 = {
    imePrezime: "Janko Jankovic",
    visina: 2.05,
    timovi: ['Prvi tim', 'Drugi tim', 'Treci tim', 'Peti tim', 'Sesti tim']
};
let sportista2 = {
    imePrezime: "Nikola Nikolic",
    visina: 1.87,
    timovi: ['Drugi tim', 'Treci tim', 'Sesti tim']
};
let sportista3 = {
    imePrezime: "Pera Peric",
    visina: 2.10,
    timovi: ['Prvi tim', 'Drugi tim', 'Cetvrti tim', 'Peti tim']
};
let sportista4 = {
    imePrezime: "Mika Mikic",
    visina: 2.15,
    timovi: ['Cetvrti tim', 'Sesti tim']
};
let sportisti = [sportista1, sportista2, sportista3, sportista4];

let prosecnaVisina = niz => {
    let sum = 0;
    for(let i = 0; i < niz.length; i++) {
        sum += niz[i].visina;
    }
    sum /= niz.length;
    return sum;
}
console.log(`Prosecna visina sportista je: ${prosecnaVisina(sportisti)}.`);

let igraliZaTim = (niz, tim) => {
    let br = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].timovi.includes(tim)) {
            br++;
        }
    }
    return br;
}
console.log(igraliZaTim(sportisti, 'Drugi tim'));

let najmanjeTransfera = niz => {
    let transferi = niz[0].timovi.length;
    let igrac = niz[0].timovi.imePrezime;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].timovi.length <= transferi) {
            transferi = niz[i].timovi.length;
            igrac = niz[i].imePrezime;
        }
    }
    return igrac;
}
console.log(`Igrac koji je imao najmanje transfera je: ${najmanjeTransfera(sportisti)}.`);

let visiTimPodela = niz => {
    let prviTim = [];
    let drugiTim = [];
    for(let i = 0; i < Math.ceil(niz.length/2); i++) {
        prviTim.push(niz[i]);
    }
    for(let j = Math.ceil(niz.length/2); j < niz.length; j++) {
        drugiTim.push(niz[j]);
    }
    if(prosecnaVisina(prviTim) > prosecnaVisina(drugiTim)) {
        console.log('Visi je prvi tim.');
    } else if(prosecnaVisina(prviTim) < prosecnaVisina(drugiTim)) {
        console.log('Visi je drugi tim.');
    } else {
        console.log('Oba tima su u proseku iste visine.');
    }
}
visiTimPodela(sportisti);

let trenerVidi = niz => {
    let prvi = niz[0].visina;
    let br = 1;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].visina > prvi) {
            br++;
        }
    }
    return br;
}
console.log(trenerVidi(sportisti));