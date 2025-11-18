
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

export function paintCats(cats, onNext, onPrev){

    const app = document.querySelector('#app');
    app.innerHTML = "";

    const nav = document.createElement("div");

    const btnPrev = document.createElement("button");
    btnPrev.textContent = "<";
    btnPrev.addEventListener("click", onPrev);

    const btnNext = document.createElement("button");
    btnNext.textContent = ">";
    btnNext.addEventListener("click", onNext);

    nav.appendChild(btnPrev);
    nav.appendChild(btnNext);

    const list = document.createElement("ul");

    for (const cat of cats) {
        const li = document.createElement("li");

        li.innerHTML = `
            <img src="${cat.imagen}" style="width:300px">
            <p>${cat.race}</p>
        `;

        list.appendChild(li);
    }

    app.appendChild(nav);
    app.appendChild(list);

}