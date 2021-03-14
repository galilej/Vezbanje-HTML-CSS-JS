let ulListTasks = document.querySelector("ul");
let liAllTasks = document.querySelectorAll("li");
let inputTask = document.getElementById("unesi");
let addTaskBeggin = document.getElementById("dodjaNaPocetak");
let addTaskEnd = document.getElementById("dodajNaKraj");
let arrTasks = [];

if(JSON.parse(localStorage.getItem("arrTasksStorage")) == null) {
    localStorage.setItem("arrTasksStorage", JSON.stringify(arrTasks));
} else {
    arrTasks = JSON.parse(localStorage.getItem("arrTasksStorage"));
    for(let i = 0; i < arrTasks.length; i++) {
        let liOldTask = document.createElement("li");
        liOldTask.textContent = arrTasks[i];
        ulListTasks.appendChild(liOldTask);
    }
}


inputTask.addEventListener("keyup", event => {
    if(event.keyCode == 13){
        let inputTaskText = inputTask.value;
        if(inputTaskText == "" || inputTaskText == null) {
            alert("Morate uneti tekst zadatka.");
        } else {
            let liNewTask = document.createElement("li");
            liNewTask.textContent = inputTaskText;
            
            let radioAdd = document.querySelector("input[name=dodaj]:checked");
            if(radioAdd.id == "dodajNaPocetak") {
                ulListTasks.prepend(liNewTask);
                arrTasks.unshift(inputTaskText);
            } else {
                ulListTasks.appendChild(liNewTask);
                arrTasks.push(inputTaskText);
            }
            localStorage.setItem("arrTasksStorage", JSON.stringify(arrTasks));
        }
        inputTask.value = "";
    }
    
});

ulListTasks.addEventListener("click", event => {
    console.log("Kliknuto na UL")
    if(event.target.tagName == "LI") {
        console.log("kliknuto na LI");
        event.target.remove();
        let index = arrTasks.indexOf(event.target.textContent);
        arrTasks.splice(index, 1);
        localStorage.setItem("arrTasksStorage", JSON.stringify(arrTasks));
    }
});

document.querySelector("div").addEventListener("click", event => {
    console.log("Kliknuto na div");
});

document.querySelector('body').addEventListener("click", event => {
    console.log("Kliknuto na body");
});

let h = document.querySelector("h1");
localStorage.setItem("username", "Nikola");
localStorage.setItem("grad", "Nis");
localStorage.setItem("username", "Stefan");
localStorage.setItem("godine", 33);

let getUsername = localStorage.getItem("username");
console.log(getUsername);
let getGodine = localStorage.getItem("godine");
getGodine++;
localStorage.setItem("godine", getGodine);
console.log(getGodine);