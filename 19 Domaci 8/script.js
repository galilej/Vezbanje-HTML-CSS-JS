//1.
function suma(n, m) {
    let sum = 0;
    for(let i = n; i <= m; i++) {
        sum += i ** 3;
    }
    return sum;
}
let rez = suma(1, 5);
console.log(rez);

//2.
console.log('-----------------');
function godine(godRodjenja) {
    let datum = new Date();
    let godina = datum.getFullYear();
    let trenutno = 0;
    trenutno = godina - godRodjenja;
    return trenutno;
}
let osoba = godine(1987);
console.log(osoba);

//3.
console.log('-----------------------');
function deljiv(n, m, k) {
    let br = 0;
    for(let i = n; i <= m; i++) {
        if(i % k == 0) {
            br++;
        }
    }
    console.log(br);
}
deljiv(1, 40, 3);