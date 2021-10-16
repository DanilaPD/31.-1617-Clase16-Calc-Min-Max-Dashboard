//Panel del costado
const panel = document.getElementById("panel");
const panelBtn = document.getElementById("showPanel");

//Hamburguesa
const list = document.getElementById("list");
const listBtn = document.getElementById("showList");

//Título
const title = document.getElementById("title");

//Panel del costado
panelBtn.onclick = function () {
    if (panel.style.display === "none") {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }
};

//Hamburguesa:
listBtn.onclick = function () {
    if (list.style.display === "none") {
        list.style.display = "flex";
    } else {
        list.style.display = "none";
    }
};

//Cambia de color al hacerle click. Como no pusimos un "else" en este caso, al apretar de nuevo, no cambia de color otra vez.
title.onclick = function () {
    title.style.color = "red";
}