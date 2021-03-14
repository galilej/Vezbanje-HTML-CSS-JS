//Zadatak 1
let n = 1;
let m = 40;
let suma = 0;
let br = 0;
let pro = 1;
for(let i = n; i <= m; i++) {
    if(i % 7 == 0 && i % 2 != 0) {
        suma += i;
        br++;
    }
}
pro = suma * br;
console.log(suma);
console.log(br);
console.log(pro);


//Zadatak 2
console.log('-------------------');
function indeksTelesneMase(tezina, visina) {
    let visinaUMetrima = visina / 100;
    let BMI = tezina / (visinaUMetrima ** 2);
    if(BMI <= 18.5) {
        console.log('Pothranjenost');
    } else if(BMI > 18.5 && BMI < 24.9) {
        console.log('Normalna tezina');
    } else if(BMI >= 24.9 && BMI <= 30) {
        console.log('Povisena tezina');
    } else if(BMI > 30) {
        console.log('Gojaznost');
    }
    return BMI;
}
console.log(indeksTelesneMase(84, 180));

//Zadatak 3
console.log('-------------------------');
function racunanje(br1, br2, operacija) {
    let rez;
    switch(operacija) {
        case '+':
            rez = br1 + br2;
            break;
        case '-':
            rez = br1 - br2;
            break;
        case '*':
            rez = br1 * br2;
            break;
        case '/':
            rez = br1 / br2;
    }
    return rez;
}
console.log(racunanje(10, 5, '/'));

//Zadatak 4
console.log('-------------------');
function razlika(n, m) {
    let raz = 0;
    let zbir = 0;
    let br = 0;
    for(let i = n; i <= m; i++) {
        if(i % 3 == 0 && i % 2 == 0) {
            zbir += i;
        }
        if(i % 10 == 3) {
            br++;
        }
    }
    rez = zbir - br;
    return rez;
}
console.log(razlika(1, 50));