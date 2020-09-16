let boja = "crna";
switch(boja) {
    case "crvena":
        console.log('Odabrali ste crvenu boju!');
        break;
    case "plava":
        console.log('Odabrali ste plavu boju!');
        break;
    case "zelena":
        console.log('Odabrali ste zelenu boju!');
        break;
    default:
        console.log("Niste odabrali crvenu, palvu i zelenu boju!");
}

//1.
let dan = 5;
switch(dan) {
    case 1:
        console.log('1. dan je ponedeljak.');
        break;
    case 2:
        console.log('2. dan je utorak.');
        break;
    case 3:
        console.log('3. dan je sreda.');
        break;
    case 4:
        console.log('4. dan je cetvrtak.');
        break;
    case 5:
        console.log('5. dan je petak.');
        break;
    case 6:
        console.log('6. dan je subota.');
        break;
    case 7:
        console.log('7. dan je nedelja.');
        break;
    default:
        console.log('Pogresan unos.');
}

//2.
let ocena = 4;
switch(ocena) {
    case 1:
        console.log('Nedovoljan');
        break;
    case 2:
        console.log('Dovoljan');
        break;
    case 3:
        console.log('Dobar');
        break;
    case 4:
        console.log('Vrlodobar');
        break;
    case 5:
        console.log('Odlican');
        break;
    default:
        console.log('Saric jos nije uveo vecu ocenu od 5.');   
}

//3.
let parniBroj = 6;
switch(parniBroj) {
    case 0:
        console.log('Uneti broj je 0.');
        break;
    case 2:
        console.log('Uneti broj je 2.');
        break;
    case 4:
        console.log('Uneti broj je 4.');
        break;
    case 6:
        console.log('Uneti broj je 6.');
        break;
    case 8:
        console.log('Uneti broj je 8.');
        break;
    default:
        console.log('Unos je pogresan.');
}

//4.
let x = 10;
let y = 2;
let op = "/";
let rez;
switch(op) {
    case "+":
        rez = x + y;
        console.log(rez);
        break;
    case "-":
        rez = x - y;
        console.log(rez);
        break;
    case "*":
        rez = x * y;
        console.log(rez);
        break;
    case "/":
        rez = x / y;
        console.log(rez);
        break;
    default:
        console.log('Unos je pogresan.');
}

//5.
let get = new Date();
let dani = get.getDay();
switch(dani) {
    case 1:
        console.log('Za 5 dana vikend.');
        break;
    case 2:
        console.log('Za 4 dana vikend.');
        break;
    case 3:
        console.log('Za 3 dana vikend.');
        break;
    case 4:
        console.log('Za 2 dana vikend.');
        break;
    case 5:
        console.log('Sutra je vikend.');
        break;
    case 6:
        console.log('Vikend!');
        break;
    case 7:
        console.log('Vikend!');
}

//6.
let mesec = get.getMonth() +1;
console.log(mesec);
switch(mesec) {
    case 1:
        console.log('Trenutno je Januar.');
        break;
    case 2:
        console.log('Trenutno je Februar.');
        break;
    case 3:
        console.log('Trenutno je Mart.');
        break;
    case 4:
        console.log('Trenutno je April.');
        break;
    case 5:
        console.log('Trenutno je Maj.');
        break;
    case 6:
        console.log('Trenutno je Jun.');
        break;
    case 7:
        console.log('Trenutno je Jul.');
        break;
    case 8:
        console.log('Trenutno je Avgust.');
        break;
    case 9:
        console.log('Trenutno je Septembar.');
        break;
    case 10:
        console.log('Trenutno je Oktobar.');
        break;
    case 11:
        console.log('Trenutno je Novembar.');
        break;
    case 12:
        console.log('Trenutno je Decembar.');
}

//7.
let godina = get.getFullYear();
switch(mesec) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        console.log('Ima 31 dan.');
        break;
    case 4: case 6: case 9: case 11:
        console.log('Ima 30 dana.');
        break;
    case 2:
        if(godina % 4 == 0 && godina % 100 != 0) {
            console.log('Godina je prestupna i ima 29 dana.');
        } else {
            console.log('Godina nije prestupna i ima 28 dana.');
        }
}

//8.
let h1Farbanje = document.getElementById("farbanje");
let color = "green";
switch(color) {
    case "red":
        h1Farbanje.style.color = "red";
        break;
    case "blue":
        h1Farbanje.style.color = "blue";
        break;
    case "green":
        h1Farbanje.style.color = "green";
}