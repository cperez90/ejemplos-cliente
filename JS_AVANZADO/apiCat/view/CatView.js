export function paintResult(cat){
    const imagen = cat.imagen;
    const race = cat.race;

    const app = document.querySelector('#app');
    const imagenP = document.createElement('img');
    const raceP = document.createElement('p');
    imagenP.src = imagen;
    imagenP.alt = "Cat";
    imagenP.width = 300;
    raceP.innerHTML = race;
    app.appendChild(imagenP);
    app.appendChild(raceP);

    console.log(imagen,race);
}