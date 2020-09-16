let i = 1;
while(i <= 10) {
    console.log(i);
    i++;
}

i = 0;
while(i <= 10) {
    i++;
}
console.log(i);

//1.
console.log("Prvi zadatak");
i = 1;
while(i <= 20) {
    console.log(i);
    i++;
}

//2.
console.log('Drugi zadatak');
i = 1;
let rez = "";
while(i <= 20) {
    rez = rez + i + " ";
    i++;
}
console.log(rez);

//3.
console.log('Treci zadatak');
i = 20;
while(i > 0) {
    console.log(i);
    i--;
}

//4.
console.log('Cetvrti zadatak');
i = 20;
while(i > 0) {
    console.log(i);
    i = i - 2;
}

//5.
console.log('Peti zadatak');
let x = 1;
let y = 100;
let sum = 0;
i = x;
while(i <= y) {
    sum += i;
    i++;
}
console.log(sum);

//6.
console.log('Sesti zadatak');
x = 1;
let n = 10;
i = x;
sum = 0;
while(i <= n) {
    sum += i;
    i++;
}
console.log(sum);

//7.
console.log('Sedmi zadatak');
n = 1;
let m = 10;
i = n;
sum = 0;
while(i <= m) {
    sum += i;
    i++;
}
console.log(sum);

//8.
console.log('Osmi zadatak');
n = 1;
m = 5;
i = n;
let pro = 1;
while(i <= m) {
    pro *= i;
    i++;
}
console.log(pro);

//9.
console.log('Deveti zadatak');
n = 1;
m = 5;
i = n;
let kvadrat;
sum = 0;
while(i <= m) {
    kvadrat = i ** 2;
    sum += kvadrat;
    i++;
}
console.log(sum);

//10.
console.log('Deseti zadatak');
n = 1;
m = 10;
i = n;
sum = 0;
let radnja;
while(i <= m) {
    if(i % 2 == 0) {
        radnja = i ** 2;
    } else {
        radnja = i ** 3;
    }
    sum += radnja;
    i++;
}
console.log(sum);

//11.
console.log('Jedanesti zadatak');
n = 1;
m = 100;
let k = 6;
i = n;
let broj = 0;
while(i <= m) {
    if(i % k == 0) {
        console.log(i);
        broj++;
    }
    i++;
}
console.log(`U nizu od ${n} do ${m}, broj ${k} je deljiv sa ukupno ${broj} brojeva.`);

//12. +
console.log('Dvanesti zadatak');
n = 15;
i = 2;
broj = 0;
let prost = true;
while(i <= Math.floor(Math.sqrt(n))) {
    if(n % i == 0) {
        prost = false;
    }
    i++;
}
if(prost == true) {
    console.log(`Broj ${n} je prost.`);
}
else {
    console.log(`Broj ${n} je slozen.`);
}

//13. +
console.log('Trinesti zadatak');
let a = 100;
let b = 4;
let c = 0;
let d = a;
while(d >= b) {
    c++;
    d -= b;
}
console.log(`${a} / ${b} = ${c}, a ostatak je ${d}.`);

//14.
let divText = document.getElementById("text");
n = 15;
i = 1;
let tekst = "Neki tekst. Bla bla.";
while(i <= n) {
    if(i % 3 == 1) {
        divText.innerHTML += `<p style='color: red'>${tekst}</p>`;
    } else if(i % 3 == 2) {
        divText.innerHTML += `<p style='color: blue'>${tekst}</p>`;
    } else {
        divText.innerHTML += `<p style='color: yellow'>${tekst}</p>`;
    }
    i++;
}