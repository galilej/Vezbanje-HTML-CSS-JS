//1.
let a = 15;
let b = 2;
let br = 0;
let ost = a;
while(ost >= b) {
    br++;
    ost -= b;
}
console.log(`${br}, ${ost}`);

//2.
console.log('----------------------');
let n = 2;
let i = 0;
let alfa = -0.4;
let beta = 0.6;
let sum = 0;
let s = 0;
while(i <= n) {
    s = Math.sin(n + i / n);
    if(s >= alfa && s <= beta) {
        sum += s;
    }
    i++;
}
console.log(sum);

//3.
n = 5;
let divSlike = document.getElementById('slike');
i = 1;
while(i <= n) {
    if(i % 2 == 0) {
        divSlike.innerHTML += '<img style="border:5px solid green" src="Slike/Koala.jpg">';
    } else {
        divSlike.innerHTML += '<img style="border:5px solid blue" src="Slike/Lama.jpg">';
    }
    i++;
}