console.log("Testowe zmiany w repozytorium git");


let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("grayBackground");

    themeName.innerText = body.classList.contains("grayBackground") ? "jasny" : "ciemny"; 
});

/*   operatorwarunkowy potrójny "ternary" (krótka i wygodna składnia)

warunek ? jeśliSpełniony() : jeśliNieSpełniony()   */



