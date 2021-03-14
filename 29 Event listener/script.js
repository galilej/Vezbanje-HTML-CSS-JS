let buttonClickMe = document.getElementById('clickMe');

buttonClickMe.addEventListener('click', () => {
    console.log('Clicked!');
});

let buttonDoubleClick = document.getElementById('doubleClick');

buttonDoubleClick.addEventListener('dblclick', () => {
    console.log('Double clicked');
});
buttonDoubleClick.addEventListener('mouseover', () => {
    console.log('Mouse over');
});

let buttonCounter = document.querySelector('#counter');
let pPrint = document.querySelector('#print');
let br = 0;

buttonCounter.addEventListener('click', () => {
    console.log(br);
    pPrint.innerHTML = br;
    br++;
});

let buttonMinus = document.getElementById('minus');
let buttonPlus = document.getElementById('plus');
let spanRez = document.getElementById('rez');

let res = 0;
spanRez.innerHTML = res;
buttonMinus.addEventListener('click', () => {
    res--;
    if(res <= 0) {
        res = 0;
    }
    spanRez.innerHTML = res;
});
buttonPlus.addEventListener("click", () => {
    res++;
    spanRez.innerHTML = res;
});

let inputName = document.getElementById('name');
let buttonSubmit = document.getElementById('submit');
let pPrintName = document.getElementById('printName');

buttonSubmit.addEventListener('click', () => {
    let name = inputName.value;
    pPrintName.innerHTML = "Hello " + name + "!"; //`Hello ${name}!`
    inputName.value = "";
});

let inputNum1 = document.getElementById('num1');
let buttonKvadriraj = document.getElementById('kvadriraj');
let pRes = document.getElementById('res');

/*Prvi nacin - mora tab pa enter
buttonKvadriraj.addEventListener('click', event => {
    event.preventDefault(); //Sprecava refres stranice
    let num1 = inputNum1.value;
    let res = num1 ** 2;
    pRes.innerHTML = res;
    inputNum1.value = "";
});*/

//Drugi nacin- bolji zato sto mozemo kad otkucamo odmah na enter
let form = document.querySelector("form");
form.addEventListener('submit', event => {
    event.preventDefault();
    let res = inputNum1.value ** 2;
    pRes.innerHTML = res;
    inputNum1.velue = "";
});