let nav = document.getElementById("navigation");
let enter = document.getElementById("dugme");
let ime = document.getElementById("unos");
let form = document.getElementById("forma");
let cards = document.querySelectorAll(".kartice");
let ekran = document.getElementById("tajmer");
let okrenute = document.getElementsByClassName("flip");
let redovi = document.getElementsByClassName("redovi");
let korisnik = document.getElementsByClassName("korisnik");
let zapamcenoVreme = document.getElementsByClassName("zapamcenoVreme");
let hasFlippedCard = false;
let lockBoard = false;
let allCardsFliped = false;
let teceVreme = false;
let prvaKarta = false;
let firstCard;
let secondCard;
let sec = 0;
let min = 0;
let s = 0;
ime.value = localStorage.getItem("korisnickoIme");

enter.addEventListener("click", event => {
    event.preventDefault();
    let userName = ime.value;
    if(userName == "" || userName == null) {
        alert("Unesite korisnicko ime.");
    } else {
        localStorage.setItem("korisnickoIme", userName);
    }
});

function flipCard() {
    if (lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip');
    if(!prvaKarta) {
        prvaKarta = true;
        startTajmera();
    }
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    checkForMatch();
    if(cards.length == okrenute.length) {
        allCardsFliped = true;
        stopTajmer();
    }
}
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
        }, 1500);
}
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 100);
        card.style.order = randomPos;
    });
})();
cards.forEach(card =>
    card.addEventListener('click', flipCard)
);

function startTajmera() {
    teceVreme = true;
    tokVremena();
}
function tokVremena() {
    if(teceVreme == true) {
        sec = parseInt(sec);
        min = parseInt(min);
        s = parseInt(s);
        sec = sec + 1;
        if(sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if(min == 60) {
            s = s + 1;
            min = 0;
            sec = 0;
        }
        if(sec < 10 || sec == 0) {
            sec = "0" + sec;
        }
        if(min < 10 || min == 0) {
            min = "0" + min;
        }
        if(s < 10 || s == 0) {
            s = "0" + s;
        }
        ekran.innerHTML = `${s}:${min}:${sec}`;
        setTimeout("tokVremena()", 1000);
        let ispis = `${s}:${min}:${sec}`;
        localStorage.setItem("Vreme", ispis);
    }
}
function stopTajmer() {
    if(allCardsFliped == true) {
        teceVreme = false;
        clearTimeout(tokVremena);
        }
}