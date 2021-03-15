let nav = document.getElementById("navigation");
let enter = document.getElementById("dugme");
let ime = document.getElementById("unos");
let form = document.getElementById("forma");

enter.addEventListener("click", event => {
    event.preventDefault();
    let userName = ime.value;
    if(userName == "" || userName == null) {
        alert("Unesite korisnicko ime.");
    } else {
        localStorage.setItem("korisnickoIme", userName);
        form.style.animationName = "animacija";
        nav.style.animationName = "animacijaDva";
    }
});