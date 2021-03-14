let divResult = document.getElementById('result');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

/*btn1.addEventListener('click', () => {
    setTimeout(() => {
        console.log('Zdravo 1!');
    }, 1000 * 2);
    setTimeout(() => {
        console.log('Zdravo 2!');
    }, 1000 / 2);
});
-Asinhroni JS: Pozivaju se dva sata koji nezavisno otkucavau vreme
-Svaki po zavrsetku poziva nezavisno callback funkciju
*/
let timer = null;

btn1.addEventListener('click', () => {
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    if(timer === null) {
        timer = setTimeout(() => {
            divResult.innerHTML = `${sati}:${minuti}:${sekunde}`;
        }, 1000);
    }
});

btn2.addEventListener('click', () => {
    clearTimeout(timer);
});

let clock = setInterval(() => {
    let datum = new Date();
    let sekunde = datum.getSeconds();
    divResult.innerHTML = `Trenutni broj sekundi je: ${sekunde}`;
}, 1000);

btn3.addEventListener('click', () => {
    clearInterval(clock);
});