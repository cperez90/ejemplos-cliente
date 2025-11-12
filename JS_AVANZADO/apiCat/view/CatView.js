export function paintResult(cat){
    const name = cat.name;
    const race = cat.race;

    const app = document.querySelector('#app');
    const nameP = document.createElement('p');
    const raceP = document.createElement('p');
    nameP.innerHTML= name;
    raceP.innerHTML = race;
    app.appendChild(nameP);
    app.appendChild(raceP);


    console.log(name,race);
}