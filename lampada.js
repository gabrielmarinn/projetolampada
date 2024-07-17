const turnOnOff = document.getElementById("turnOnOff");
const lampada = document.getElementById("lampada");

const IMG_LIGADA = "./img/ligada.png";
const IMG_DESLIGADA = "./img/desligada.png";
const IMG_QUEBRADA = "./img/quebrada.png";

function isLampBroken() {
    return lampada.src.indexOf("quebrada") > -1;
}

function lampOn() {
    if (!isLampBroken()) {
        lampada.src = IMG_LIGADA;
        changeBackgroundColor("#000000d5"); // Fundo preto semi-transparente ao ligar
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lampada.src = IMG_DESLIGADA;
        turnOnOff.textContent = "Ligar";
        changeBackgroundColor("white"); // Fundo branco ao desligar
    }
}

function lampBroken() {
    if (!isLampBroken()) {
        lampada.src = IMG_QUEBRADA;
    }
}

function lampOnOff() {
    if (turnOnOff.textContent === "Ligar") {
        lampOn();
        turnOnOff.textContent = "Desligar";
    } else {
        lampOff();
        turnOnOff.textContent = "Ligar";
    }
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

turnOnOff.addEventListener("click", lampOnOff);
lampada.addEventListener("dblclick", lampBroken);