const app = document.getElementById("app");

// Variables del juego
let modo = "prompt"; // prompt o teclado
let estadistica = { parell: 0, senar: 0 };
let ayudaVentana = null;

// Crear título
const titulo = document.createElement("h1");
titulo.textContent = "Joc: Parell o Senars";
app.appendChild(titulo);

// Botones de modo de juego
const btnPrompt = document.createElement("button");
btnPrompt.textContent = "Prompt";
const btnTeclat = document.createElement("button");
btnTeclat.textContent = "Teclat";

const modoDiv = document.createElement("div");
modoDiv.append(btnPrompt, btnTeclat);
app.appendChild(modoDiv);

// Botón jugar
const btnJugar = document.createElement("button");
btnJugar.textContent = "Jugar";
app.appendChild(btnJugar);

// Botón reiniciar
const btnReiniciar = document.createElement("button");
btnReiniciar.textContent = "Reiniciar";
app.appendChild(btnReiniciar);

// Botones de ayuda y web
const btnAjuda = document.createElement("button");
btnAjuda.textContent = "Ajuda";
const btnWeb = document.createElement("button");
btnWeb.textContent = "Politécnic de Llevant";
app.append(btnAjuda, btnWeb);

// Contenedor de imágenes
const handsDiv = document.createElement("div");
handsDiv.style.display = "flex";
handsDiv.style.gap = "30px";
handsDiv.style.marginTop = "20px";

const handUser = document.createElement("img");
handUser.id = "hand1";
handUser.width = 200;
const handPc = document.createElement("img");
handPc.id = "hand2";
handPc.width = 200;

handsDiv.append(handUser, handPc);
app.appendChild(handsDiv);

// Estadísticas
const estadDiv = document.createElement("div");
estadDiv.innerHTML = `<h3>Estadístiques</h3>
<p>Parells: 0</p>
<p>Senars: 0</p>`;
app.appendChild(estadDiv);

function jugar() {
    let eleccioUsuari = "";

    if (modo === "prompt") {
        eleccioUsuari = prompt("Escriu 'parell' o 'senar'").toLowerCase();
    }

    if (eleccioUsuari !== "parell" && eleccioUsuari !== "senar") {
        alert("Has d'escriure 'parell' o 'senar'");
        return;
    }

    const eleccioMaquina = eleccioUsuari === "parell" ? "senar" : "parell";

    const numUsuari = Math.floor(Math.random() * 6);
    const numMaquina = Math.floor(Math.random() * 6);
    const suma = numUsuari + numMaquina;

    const resultat = suma % 2 === 0 ? "parell" : "senar";

    handUser.src = `./img/hand${numUsuari}.png`;
    handPc.src = `./img/hand${numMaquina}.png`;

    alert(
        `Tu: ${numUsuari}, Màquina: ${numMaquina}, Suma: ${suma} → ${resultat.toUpperCase()}`
    );

    if (resultat === "parell") estadistica.parell++;
    else estadistica.senar++;

    actualitzarEstadistiques();
}

function actualitzarEstadistiques() {
    estadDiv.innerHTML = `<h3>Estadístiques</h3>
    <p>Parells: ${estadistica.parell}</p>
    <p>Senars: ${estadistica.senar}</p>`;
}

document.addEventListener("keydown", (e) => {
    if (modo === "teclat") {
        if (e.key === "p") jugarTeclat("parell");
        else if (e.key === "s") jugarTeclat("senar");
    }
});

function jugarTeclat(eleccioUsuari) {
    const eleccioMaquina = eleccioUsuari === "parell" ? "senar" : "parell";
    const numUsuari = Math.floor(Math.random() * 6);
    const numMaquina = Math.floor(Math.random() * 6);
    const suma = numUsuari + numMaquina;
    const resultat = suma % 2 === 0 ? "parell" : "senar";

    handUser.src = `./img/hand${numUsuari}.png`;
    handPc.src = `./img/hand${numMaquina}.png`;

    alert(
        `Tu: ${numUsuari}, Màquina: ${numMaquina}, Suma: ${suma} → ${resultat.toUpperCase()}`
    );

    if (resultat === "parell") estadistica.parell++;
    else estadistica.senar++;

    actualitzarEstadistiques();
}

function reiniciar() {
    estadistica = { parell: 0, senar: 0 };
    handUser.src = "";
    handPc.src = "";
    actualitzarEstadistiques();
}

btnReiniciar.addEventListener("click", reiniciar);

btnAjuda.addEventListener("click", () => {
    ayudaVentana = window.open(
        "https://junior-report.cat/les-hores-del-mon/",
        "_blank",
        "width=600,height=400"
    );
});

btnWeb.addEventListener("click", () => {
    window.location.href = "https://politecnicllevant.cat";
});

btnPrompt.addEventListener("click", () => {
    modo = "prompt";
    alert("Mode: Prompt");
});

btnTeclat.addEventListener("click", () => {
    modo = "teclat";
    alert("Mode: Teclat (prem 'p' o 's')");
});

btnJugar.addEventListener("click", jugar);

function aplicarEfectoMano(img) {
    img.addEventListener("mouseenter", () => {
        img.src = "./img/hand5.png";
    });
    img.addEventListener("mouseleave", () => {
        img.src = "";
    });
}

aplicarEfectoMano(handUser);
aplicarEfectoMano(handPc);
