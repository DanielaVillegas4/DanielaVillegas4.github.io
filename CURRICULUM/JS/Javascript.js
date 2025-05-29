document.addEventListener("DOMContentLoaded", function () {
    const btnHamburguesa = document.getElementById("hamburguesa");
    const menu = document.getElementById("botones_barra");

    btnHamburguesa.addEventListener("click", function () {
        menu.classList.toggle("mostrar");
    });

    document.querySelectorAll("#botones_barra a").forEach(function (enlace) {
        enlace.addEventListener("click", function () {
            menu.classList.remove("mostrar");
        });
    });
});
