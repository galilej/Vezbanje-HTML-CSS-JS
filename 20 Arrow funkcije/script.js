//Anonimna funkcija
let suma = function(a, b) {
    return a + b;
}
console.log(suma(1, 2));

//Arrow funkcija
let suma2 = (a, b) => {
    return a + b;
}
console.log(suma2(1, 6));

let hello = () => {
    console.log('Hello World!');
}
hello();

let echo = (s1, s2) => {
    let result = s1 + " " + s2;
    console.log(result);
}
echo('Cao', 'Svete');

//primer 1
let sum = (a, b) => {
    return a + b;
}
let rez = sum(4, 10);
console.log(rez);
console.log(sum(4, 6));

//primer 2
let sum2 = (a, b) => a + b;
console.log(sum2(6, 12));

let nesto = a => {
    console.log(a);
}
nesto(14);