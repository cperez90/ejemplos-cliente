import {getCats, nextPage} from "../service/CatService.js";

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

export function paintCats(cats){

    const app = document.querySelector('#app');

    const botoalante = document.createElement("button");
    const botoatras = document.createElement("button");
    botoalante.innerHTML= ">";
    botoatras.innerHTML= "<";
    botoalante.addEventListener('click',function (){
        nextPage();
        getCats()
    })


    let result = '<ul>';
    for (const  cat of cats){
        result += `<li><img src="${cat.imagen}" style="width: 300px">${cat.race}</li>`
    }
    result += '</ul>'

    app.appendChild(botoatras);
    app.appendChild(botoalante);
    app.innerHTML += result;

}