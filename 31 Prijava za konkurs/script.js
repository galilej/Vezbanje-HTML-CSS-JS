let form = document.querySelector('form');
let inputName = document.getElementById('name');
let btnSubmit = document.querySelector('#submit');
let pResult = document.getElementById('result');

form.addEventListener("submit", event => {
    event.preventDefault();
    pResult.innerHTML = inputName.value + "<br>";
    
    let radioButtonGender = document.querySelector("input[name='gender']:checked");
    switch(radioButtonGender.value) {
        case "m":
            pResult.innerHTML += `<span style="color:blue">Pol: muski</span>`;
            break;
        case "f":
            pResult.innerHTML += `<span style="color:red">Pol: zenski</span>`;
            break;
        case "o":
            pResult.innerHTML += `<span style="color:green">Pol: neopredeljen</span>`;
            break;
        default:
            pResult.innerHTML += `Doslo je do greske.`;
    }

    let checkBoxTehChecked = document.querySelectorAll('input[name="tech"]:checked');
    pResult.innerHTML += `<br><ul>`;
    checkBoxTehChecked.forEach( elem => {
        pResult.innerHTML += `<li>${elem.value}</li>`;
    });
    pResult.innerHTML += `</ul>`;
    
    form.reset();
});