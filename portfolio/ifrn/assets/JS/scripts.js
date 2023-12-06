const buttonChangeTheme = document.getElementById("button-change-theme");
const body = document.querySelector("body")
const buttonImageThemeChange = document.querySelector(".image-button")
const logochangetheme = document.querySelector(".img-logo")

buttonChangeTheme.addEventListener("click", () => {
    // verificar se seletor body possui a classe dark-mode
    const activatedDarkMode = body.classList.contains("dark-mode")

    // alternar dark mode
    body.classList.toggle("dark-mode")

    if (activatedDarkMode) {
        logochangetheme.setAttribute("src", "./assets/img/g179.svg");

    } else {
        logochangetheme.setAttribute("src", "assets/img/logo-contraste.svg")
    }
})