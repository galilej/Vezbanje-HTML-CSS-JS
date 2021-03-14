let inputNum1 = document.getElementById('num1');
let inputNum2 = document.getElementById('num2');
let form = document.querySelector("form");
let pRes = document.getElementById('res');

let racunaj = (num1, num2, operacija) => {
    num1 = Number(num1);
    num2 = Number(num2);
    if(Number.isFinite(num1) && Number.isFinite(num2)) {
        let res = 0;
        if(operacija == "+") {
            res = num1 + num2;
        } else if(operacija == "-") {
            res = num1 - num2;
        } else if(operacija == "*") {
            res = num1 * num2;
        } else if(operacija == "/") {
            if(num2 == 0) {
                alert('Nije dozvoljeno deliti nulom.');
                res = "?";
            } else {
                res = num1 / num2;
            }
        }
        pRes.innerHTML = `${num1} ${operacija} ${num2} = ${res}`;
    } else {
        alert('Unosi moraju biti numericke vrednosti.');
    }
}

form.addEventListener('submit', event => {
    event.preventDefault();
    let num1 = inputNum1.value;
    let num2 = inputNum2.value;
    let radiosChecked = document.querySelector("input[name='op']:checked");
    //let radios = document.querySelectorAll("input[name='op']");
    let radiosCheckedValue = radiosChecked.value;
    racunaj(num1, num2, radiosCheckedValue);
});