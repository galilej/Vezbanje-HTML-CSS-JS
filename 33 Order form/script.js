let cena = document.getElementById("price");
let cekirano = document.querySelectorAll("input[name='additional']");
let buttonApply = document.querySelector("input[type='submit']");

function clicked(el) {
    let ispis = cena.innerHTML;
    let trenutnaCena = parseInt(ispis);
    let novaCena = 0;
    let dodatno = parseInt(el.value);
    if(el.checked) {
        novaCena = trenutnaCena + dodatno;
    } else {
        novaCena = trenutnaCena - dodatno;
    }
    cena.innerHTML = `${novaCena}$`;
}

cekirano.forEach(el => {
    el.addEventListener("click", function() {
        clicked(this);
    });
});

buttonApply.addEventListener("click", event => {
    event.preventDefault();
    let trenutnaCena = cena.innerHTML;
    let cena2 = parseInt(trenutnaCena);
    let ime = document.querySelector("input[name='name']");
    let adresa = document.querySelector("input[name='address']");
    let divIspis = document.getElementById("ispis");
    let unetoIme = ime.value;
    let unetaAdresa = adresa.value;
    if((unetoIme == null || unetoIme == "") || (unetaAdresa == null || unetaAdresa == "")) {
        alert("Morate popuniti polja sa zvezdricom!");
    } else {
        divIspis.innerHTML = `Order details:<br>Your Name: ${unetoIme}<br>Your address: ${unetaAdresa}<br>Your total order: ${cena2}$`;
    }
});