for(let i = 0; i <= 10; i++) {
    console.log(`Na redu je broj: ${i}`);
}

//1.
console.log('---------------------');
for(let i = 1; i <= 20; i++) {
    console.log(i);
}

//2.
console.log('---------------------');
console.log('--------------');
for(let i = 20; i >= 1; i--) {
    console.log(i);
}

//3.
console.log('----------------------');
for(let i = 1; i <= 20; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

//4.
console.log('----------------------');
for(let i = 5; i <= 15; i++) {
    let dvo = i * 2;
    console.log(dvo);
}

//5.
console.log('------------------------');
let sum = 0;
for(let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//6.
console.log('---------------------');
let n = 50;
sum = 0;
for(let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum);

//7.
console.log('----------------------');
n = 1;
let m = 25;
sum = 0;
for(let i = n; i <= m; i++) {
    sum += i;
}
console.log(sum);

//8.
console.log('----------------------');
n = 1;
m = 15;
let pro = 1;
for(let i = n; i <= m; i++) {
    pro *= i;
}
console.log(pro);

//9.
console.log('-----------------------');
n = 1;
m = 5;
sum = 0;
for(let i = n; i <= m; i++) {
    sum += i ** 2;
}
console.log(sum);

//10.
console.log('-----------------------');
let divSlicice = document.getElementById('slicice');
n = 8;
for(let i = 1; i <= n; i++) {
    if(i % 3 == 1) {
        divSlicice.innerHTML += "<img src='Slike/1.png' width='25px'><br>";
    } else if(i % 3 == 2) {
        divSlicice.innerHTML += "<img src='Slike/2.png' width='25px'><br>";
    } else {
        divSlicice.innerHTML += "<img src='Slike/3.png' width='25px'><br>";
    }
}

//11.
console.log('-----------------------');
sum = 0;
for(let i = 1; i <= 30; i++) {
    if(i % 9 == 0) {
        sum += i;
    }
}
console.log(sum);

//12.
console.log('-----------------------');
pro = 1;
for(let i = 20; i <= 100; i++) {
    if(i % 11 == 0) {
        pro *= i;
    }
}
console.log(pro);

//13.
console.log('-----------------------');
let br = 0;
for(let i = 5; i <= 150; i++) {
    if(i % 13 == 0) {
        br++;
    }
}
console.log(br);

//14.
console.log('-----------------------');
n = 1;
m = 10;
br = 0;
sum = 0;
for(let i = n; i <= m; i++) {
    br++;
    sum += i;
}
let ar = sum / br;
console.log(ar);

//15.
console.log('------------------------');
n = 1;
m = 45;
let poz = 0;
let neg = 0;
for(let i = n; i <= m; i++) {
    if(i % 2 == 0) {
        poz++;
    } else if(i % 2 !=0) {
        neg++;
    }
}
console.log(`U nizu od ${n} do ${m}, pozitivnih brojeva ima ${poz}, a negativnih ${neg}.`);

//16.
console.log('-------------------------');
let deljivi3 = 0;
let deljivi5 = 0;
for(let i = 5; i <= 50; i++) {
    if(i % 3 == 0) {
        deljivi3++;
    } else if(i % 5 == 0) {
        deljivi5++;
    }
}
console.log(`U nizu od 5 do 50, ima ${deljivi3} brojeva koji su deljivi sa 3 i ${deljivi5} brojeva koji su deljivi sa 5.`);

//17.
console.log('--------------------------');
n = 1;
m = 35;
br = 0;
sum = 0;
for(let i = n; i <= m; i++) {
    if(i % 10 == 4 && i % 2 == 0) {
        br++;
        sum += i;
    }
}
console.log(`Od broja ${n} do broja ${m} ima ${br} brojeva kojima je poslednja cifra 4 i koji su parni, a njihov zbir je ${sum}.`);

//18.
console.log('----------------------------');
n = 1;
m = 60;
let a = 3;
for(let i = n; i <= m; i++) {
    if(i % a == 0) {
        console.log(i);
    }
}

//19.
console.log('--------------------------');
n = 6;
m = 35;
a = 7;
for(let i = n; i <= m; i++) {
    if(i % a != 0) {
        console.log(i);
    }
}

//20.
console.log('-------------------------------');
n = 1;
m = 22;
a = 4;
sum = 0;
for(let i = n; i <= m; i++) {
    if(i % a == 0) {
        sum += i;
    }
}
console.log(sum);

//21.
console.log('-----------------------------');
n = 1;
m = 20;
a = 3;
pro = 1;
for(let i = n; i <= m; i++) {
    if(i % a == 0) {
        pro *= i;
    }
}
console.log(pro);