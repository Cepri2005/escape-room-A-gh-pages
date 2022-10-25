function listRandom() {
    buttonOpacity();
    galleryRandom();
}

function buttonOpacity() {
    let elemento = document.getElementById("random")
    if (elemento.style.opacity == 0.5) {
        elemento.style.opacity = 1;
    } else {
        elemento.style.opacity = 0.5;
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function getListRandom(n, min, max) {
    let listRnd = []
    let numRandom = getRndInteger(min, max);
    while (listRnd.length != n) {
        while (!listRnd.includes(numRandom)) {
            listRnd.push(numRandom);
        }
        numRandom = getRndInteger(min, max);
    }
    return listRnd;
}

function galleryRandom() {
    let min = 1;
    let max = 10;
    let imagenes = document.getElementsByTagName("img")
    let listRnd = getListRandom(imagenes.length - 1, min, max)
    for (let i = 0; i < imagenes.length - 1; i++) {
        imagenes[i].setAttribute("src", "./img/IMG_" + listRnd[i] + ".PNG")
    }

}

window.onload = function() {
    saludo();
}

function saludo() {
    // buenos dias buenas noches
    let d = new Date();
    let header = document.getElementsByTagName("header")
    let footer = document.getElementsByTagName("footer")
    let encabezado = document.getElementById("saludo");
    if (d.getHours() < 7 || d.getHours() > 17) {
        encabezado.innerHTML = "¡Buenas noches!";
        encabezado.style.color = "white";
        header[0].style.backgroundColor = "#3E3730";
        footer[0].style.backgroundColor = "#3E3730";
    } else {
        encabezado.innerHTML = "¡Buenos días!";
        header[0].style.backgroundColor = "rgb(238, 107, 47)";
        footer[0].style.backgroundColor = "rgb(238, 107, 47)";

    }

}