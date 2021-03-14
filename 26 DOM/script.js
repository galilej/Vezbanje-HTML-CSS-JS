console.log(typeof document);
console.log(document.URL);
console.log(document.links);
console.log(document.anchors);
let elements = document.getElementsByClassName('links');
console.log(elements);
let paragraf = document.querySelector('p');
console.log(paragraf);
let prviDiv = document.getElementsByClassName('error');
console.log(prviDiv);
let poslednjiRed = document.getElementById('poslednjiRed');
console.log(poslednjiRed);
let sviLinkovi = document.links;
console.log(sviLinkovi);
let sveSlike = document.images;
console.log(sveSlike);
let svi = document.body;
console.log(svi);
let sviParagrafi = document.querySelectorAll("p");
console.log(sviParagrafi);
sviParagrafi.forEach(par => {
    par.innerHTML += "Vazno!!!";
});
let noviParagraf = document.createElement('p');
noviParagraf.innerHTML = "Ovo je tekst novog paragrafa.";
noviParagraf.style.color = "red";
noviParagraf.classList.add('p1');
document.body.appendChild(noviParagraf);
let sviDivovi = document.querySelectorAll('div');
sviDivovi.forEach(el => {
    el.innerHTML += "<h1>Greska!</h1>";
});

let paragrafi = document.querySelectorAll('p');
paragrafi.forEach((p, i) => {
    let kv = (i + 1) * (i + 1);
    p.innerHTML += kv;
});
let slike = document.querySelectorAll('img');
slike.forEach(sl => {
    sl.setAttribute("alt", "fotografija");
});
paragrafi.forEach(st => {
    st.style.color = "pink";
});

let link = document.querySelector("div a:nth-child(2)");
console.log(link);
link.innerHTML = "<span style='font-style:italic'>Novi tekst linka</span>";
link.target = "_blank";
link.href = "http://127.0.0.1:5501/26%20DOM/index.html#";
link.style.color = "red";
link.style.backgroundColor = 'orange';
link.style.textDecoration = "none";
link.style.border = "1px solid black";
link.style.borderRadius = "40%";
//link.setAttribute('style', 'color: red; background-color: orange; text-decoration: none;');
link.innerHTML += " za kliktanje";
console.log(document.querySelector("a:nth-child(2)").parentNode.parentNode);
console.log(paragrafi[1].parentNode.childNodes);