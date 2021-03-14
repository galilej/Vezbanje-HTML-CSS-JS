//1.
let niz = [5, 16, -4, 3, -10, 2, -1];
let minimalniElement = arr => {
    let min = arr[0];
    let indeks = [0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] <= min) {
            min = arr[i];
            indeks = [i];
        }
    }
    return indeks;
}
console.log(minimalniElement(niz));

//2.
console.log('-----------------------------');
let sumaElemenata = arr => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if([i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumaElemenata(niz));

//3.
console.log('-----------------------------');
let menjanje = arr => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 != 0 && [i] % 2 == 0) {
            arr[i] *= -1;
        }
    }
    console.log(arr);
}
menjanje(niz);