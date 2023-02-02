{
    const welcome = () => {
        console.log("Witam serdecznie czytających developerów!")
    }
    welcome();

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");
        body.classList.toggle("grayBackground");
        themeName.innerText = body.classList.contains("grayBackground") ? "jasny" : "ciemny";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);
    };
    init();
}



