// ==========================
// CONFIGURACIÓ INICIAL
// ==========================
const app = document.querySelector("#app");
let intervalId = null;
let helpWindow = null;

// a) ESTILITZAR EL FONS
document.body.style.backgroundImage = "url('https://as2.ftcdn.net/v2/jpg/03/29/04/09/1000_F_329040941_Dk7k6Ur8aywi5nBNostlSayJqxeNXnYb.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center";

// ==========================
// CREAR INTERFÍCIE
// ==========================
function crearInterficie() {
    const title = document.createElement("h2");
    title.textContent = "⏰ Rellotge analògic — Politécnic de Llevant";
    title.style.textAlign = "center";
    title.style.color = "white";
    app.appendChild(title);

    // Inputs
    const container = document.createElement("div");
    container.style.textAlign = "center";
    container.style.margin = "20px";
    app.appendChild(container);

    const lblH = document.createElement("label");
    lblH.textContent = "Hores: ";
    const inputH = document.createElement("input");
    inputH.type = "number";
    inputH.id = "hours";
    inputH.min = 1;
    inputH.max = 12;

    const lblM = document.createElement("label");
    lblM.textContent = "Minuts: ";
    const inputM = document.createElement("input");
    inputM.type = "number";
    inputM.id = "minutes";
    inputM.min = 0;
    inputM.max = 59;

    const lblS = document.createElement("label");
    lblS.textContent = "Segons: ";
    const inputS = document.createElement("input");
    inputS.type = "number";
    inputS.id = "seconds";
    inputS.min = 0;
    inputS.max = 59;

    container.append(lblH, inputH, lblM, inputM, lblS, inputS);

    // (b) Quan s’escrigui → refrescar el rellotge
    [inputH, inputM, inputS].forEach(inp => {
        inp.addEventListener("input", () => {
            validarInputs();
            drawClock(); // funció donada
        });
    });

    // Botons Play/Stop
    const btnContainer = document.createElement("div");
    btnContainer.style.textAlign = "center";
    btnContainer.style.margin = "20px";

    const btnPlay = document.createElement("button");
    btnPlay.textContent = "Play";
    const btnStop = document.createElement("button");
    btnStop.textContent = "Stop";

    btnContainer.append(btnPlay, btnStop);
    app.appendChild(btnContainer);

    btnPlay.addEventListener("click", startClock);
    btnStop.addEventListener("click", stopClock);

    // Botons ajuda
    const btnAjuda = document.createElement("button");
    btnAjuda.textContent = "Obrir ajuda 🌍";
    const btnTancar = document.createElement("button");
    btnTancar.textContent = "Tancar ajuda ❌";

    const helpContainer = document.createElement("div");
    helpContainer.style.textAlign = "center";
    helpContainer.append(btnAjuda, btnTancar);
    app.appendChild(helpContainer);

    btnAjuda.addEventListener("click", obrirAjuda);
    btnTancar.addEventListener("click", tancarAjuda);
}

// ==========================
// (c) VALIDACIÓ D’INPUTS
// ==========================
function validarInputs() {
    const h = document.getElementById("hours");
    const m = document.getElementById("minutes");
    const s = document.getElementById("seconds");

    [h, m, s].forEach(inp => {
        const val = parseInt(inp.value);
        const min = parseInt(inp.min);
        const max = parseInt(inp.max);
        if (isNaN(val)) return;

        if (val < min || val > max) {
            inp.style.backgroundColor = "red";
            alert(`⚠️ Valor incorrecte a "${inp.id}". Ha de ser entre ${min} i ${max}.`);
        } else {
            inp.style.backgroundColor = "white";
        }
    });
}

// ==========================
// (d) PLAY / STOP
// ==========================
function startClock() {
    stopClock(); // Evitar duplicats
    intervalId = setInterval(() => {
        const h = document.getElementById("hours");
        const m = document.getElementById("minutes");
        const s = document.getElementById("seconds");

        let hours = parseInt(h.value) || 0;
        let minutes = parseInt(m.value) || 0;
        let seconds = parseInt(s.value) || 0;

        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
        if (hours > 12) hours = 1;

        h.value = hours;
        m.value = minutes;
        s.value = seconds;

        drawClock();
    }, 1000);
}

function stopClock() {
    if (intervalId) clearInterval(intervalId);
    intervalId = null;
}

// ==========================
// (e) i (f) AJUDA
// ==========================
function obrirAjuda() {
    if (!helpWindow || helpWindow.closed) {
        helpWindow = window.open(
            "https://junior-report.cat/les-hores-del-mon/",
            "help",
            "width=600,height=400"
        );
    } else {
        helpWindow.focus();
    }
}

function tancarAjuda() {
    try {
        if (helpWindow && !helpWindow.closed) {
            helpWindow.close();
        } else {
            alert("⚠️ No hi ha cap finestra oberta.");
        }
    } catch (err) {
        alert("Error al tancar la finestra d’ajuda.");
    }
}

// ==========================
// INICIALITZAR
// ==========================
crearInterficie();
