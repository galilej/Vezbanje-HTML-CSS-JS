let cars = ["Volvo", "BMW", "Toyota"];
console.log(cars);
console.log(cars[0]);
console.log(cars[2]);
cars[1] = "Opel";
console.log(cars);
for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

//1.
console.log('---------------------------');
let stringovi = ["string1", "string2", "string3", "string4", "string5"];
console.log(stringovi);
for(let i = 0; i < stringovi.length; i++) {
    console.log(stringovi[i]);
}

//2.
console.log('----------------------------');
//Prvi primer
let celobrojniNiz = [5, 16, 12, 8, 3, 1];
/*let zbir = 0;
for(let i = 0; i < celobrojniNiz.length; i++) {
    zbir += celobrojniNiz[i];
}
console.log(zbir);*/

//Drugi primer
let suma = arr => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(suma(celobrojniNiz));

//3.
console.log("-----------------------------");
let proizvod = arr => {
    let pro = 1;
    for(let i = 0; i < arr.length; i++) {
        pro *= arr[i];
    }
    return pro;
}
console.log(proizvod(celobrojniNiz));

//4.
console.log('-------------------------------');
let srednja = arr => {
    let suma = 0;
    let sr = 0;
    for(let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    sr = suma / arr.length;
    return sr;
}
console.log(srednja(celobrojniNiz));

//5.
console.log('-------------------------------');
let maksimalna = arr => {
    let max = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maksimalna(celobrojniNiz));

//6.
console.log('-------------------------------');
let minimalna = arr => {
    let min = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(minimalna(celobrojniNiz));

//7.
console.log('-------------------------------');
let indeksMax = arr => {
    let max = arr[0];
    let indeks = [0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
            indeks = [i];
        }
    }
    return indeks;
}
console.log(indeksMax(celobrojniNiz));

//8.
console.log('-------------------------------');
let indeksMin = arr => {
    let min = arr[0];
    let indeks = [0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
            indeks = [i];
        }
    }
    return indeks;
}
console.log(indeksMin(celobrojniNiz));

//9.
console.log('-------------------------------');
let iznadProseka = arr => {
    let sred = srednja(arr);
    let br = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > sred) {
            br++;
        }
    }
    return br;
}
console.log(iznadProseka(celobrojniNiz));

//10.
console.log('-------------------------------');
let niz = [1, 12, -5, 8, -2, -4, 6];
let sumaPozitivnih = arr => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumaPozitivnih(niz));

//11.
console.log('-------------------------------');
let parni = arr => {
    let br = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            br++;
        }
    }
    return br;
}
console.log(parni(celobrojniNiz));

//12.
console.log('-------------------------------');
let parNepar = arr => {
    let br = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0 && [i] % 2 != 0) {
            br++;
        }
    }
    return br;
}
console.log(parNepar(celobrojniNiz));

//13.
console.log('-------------------------------');
let sumaParnih = arr => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if([i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumaParnih(celobrojniNiz));

//14.
console.log('-------------------------------');
let promenaZnaka = arr => {
    for(let i = 0; i < arr.length; i++) {
        arr[i] *= -1;
    }
    console.log(arr);
}
promenaZnaka(niz);

//15.
console.log('-------------------------------');
let promenaNeparnim = arr => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 != 0 && i % 2 == 0) {
            arr[i] *= -1;
        }
    }
    console.log(arr);
}
promenaNeparnim(niz);

//16.
console.log('-------------------------------');
let divIspis = document.getElementById("ispis");
let stavkeZaKupovinu = ["Jaja", "Mleko", "Hleb", "Jogurt"];
let ispisElemenata = arr => {
    for(let i = 0; i < arr.length; i++) {
        divIspis.innerHTML += `<ul><li>${arr[i]}</li></ul>`;
    }
}
ispisElemenata(stavkeZaKupovinu);

//17.
let kosarkasi = ["kosarkas1", "kosarkas2", "kosarkas3", "kosarkas4", "kosarkas5"];
let tabela = arr => {
    for(let i = 0; i < arr.length; i++) {
        divIspis.innerHTML += `<table><tr><td>${arr[i]}</td></tr></table>`;
    }
}
tabela(kosarkasi);

//18.
let nizSlika = ["Slike/DvaVeka.jpg", "Slike/informisanje.jpg", "Slike/KakavDil.jpg", "Slike/ZaUspomenu.jpg"];
let slike = arr => {
    for(let i = 0; i < arr.length; i++) {
        divIspis.innerHTML += `<img src="${arr[i]}"><br>`;
    }
}
slike(nizSlika);

//19.
let duzina = arr => {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i].length);
    }
}
duzina(stavkeZaKupovinu);

//20.
console.log('-------------------------------');
let nizStringova = ["APrvi", "DrugiStr", "TreciString", "CetvrtiString", "NajduziStringgg"];
let najduzi = arr => {
    let naj = arr[0].length;
    let el = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > naj) {
            naj = arr[i].length;
            el = arr[i];
        }
    }
    return el;
}
console.log(najduzi(nizStringova));

//21.
console.log('-------------------------------');
let veciOdProseka = arr => {
    let sum = 0;
    let sr = 0;
    let br = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i].length;
    }
    sr = sum / arr.length;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > sr) {
            br++;
        }
    }
    return br;
}
console.log(veciOdProseka(nizStringova));

//22.
console.log('-------------------------------');
let sadrziA = arr => {
    let br = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].includes("a") || arr[i].includes("A")) {
            br++;
        }
    }
    return br;
}
console.log(sadrziA(nizStringova));

//23.
console.log('-------------------------------');
let pocinje = arr => {
    let br = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].startsWith("a") || arr[i].startsWith("A")) {
            br++;
        }
    }
    return br;
}
console.log(pocinje(nizStringova));

//24.
console.log('-------------------------------');
let a = [2, 5, -2, 12];
let b = [3, 16, 4, -1];
let c = [];
for(let i = 0; i < a.length; i++) {
    c.push(a[i]);
    c.push(b[i]);
}
console.log(c);

//25.
console.log('-------------------------------');
c = [];
for(let i = 0; i < a.length; i++) {
    c[i] = a[i] * b[i];
}
console.log(c);