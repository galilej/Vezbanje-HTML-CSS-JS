let book1 = {
    nazivKnjige: "Assumed Identity",
    autorKnjige: "David Morrell",
    cenaKnjige: 250,
    putanjaDoSlicice: "<img src='Slike/AI.jpg' width='200px'>"
};

let book2 = {
    nazivKnjige: "Jovanovo zavestanje",
    autorKnjige: "Vanja Bulic",
    cenaKnjige: 899,
    putanjaDoSlicice: "<img src='Slike/JZ.jpg' width='150px'>"
};

let book3 = {
    nazivKnjige: "Oko otoka",
    autorKnjige: "Vanja Bulic",
    cenaKnjige: 899,
    putanjaDoSlicice: "<img src='Slike/OO.jpg' width='150px'>"
};

let knjiga = [book1, book2, book3];

let tabela = arr => {
    let tab = "<table style='border:1px solid black; width: 100%; text-align:center; background-color:antiquewhite'>";
    
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i].cenaKnjige;
    }
    let sr = sum / arr.length;

    let max = arr => {
        let maks = arr[0].cenaKnjige;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i].cenaKnjige > maks) {
                maks = arr[i].cenaKnjige;
            }
        }
        return maks;
    }
    let brojMax = arr => {
        let br = 0;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i].cenaKnjige == max(arr)) {
                br++;
            }
        }
        return br;
    }

    let min = arr => {
        let min = arr[0].cenaKnjige;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i].cenaKnjige < min) {
                min = arr[i].cenaKnjige;
            }
        }
        return min;
    }
    let brojMin = arr => {
        let br = 0;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i].cenaKnjige == min(arr)) {
                br++;
            }
        }
        return br;
    }

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].cenaKnjige < sr) {
            tab += `<tr style="color:blue"><td style="border:solid 1px black; width:50%">${arr[i].putanjaDoSlicice}</td><td style="border:solid 1px black; width:50%"><p>${arr[i].nazivKnjige}<br>${arr[i].autorKnjige}<br>${arr[i].cenaKnjige}</p></td></tr>`;
        }else {
            tab += `<tr style="color:grey"><td style="border:solid 1px black; width:50%">${arr[i].putanjaDoSlicice}</td><td style="border:solid 1px black; width:50%"><p>${arr[i].nazivKnjige}<br>${arr[i].autorKnjige}<br>${arr[i].cenaKnjige}</p></td></tr>`;
        }
    }

        if(brojMax(arr) > brojMin(arr)) {
            tab += `<tr style="color: pink"><td style="width:50%; border:1px solid black"><p>UKUPNO:</p></td><td style="width:50%; border:1px solid black">${sum}</td></tr>`;
        } else {
            tab += `<tr style="color: blue"><td style="width:50%; border:1px solid black"><p>UKUPNO:</p></td><td style="width:50%; border:1px solid black">${sum}</td></tr>`;
        }
    
    tab += "</table>";
    let divTabela = document.getElementById("tabela");
    divTabela.innerHTML += tab;
}
tabela(knjiga);