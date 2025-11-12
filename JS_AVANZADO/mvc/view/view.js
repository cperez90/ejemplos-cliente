export function paintResult(persona){
    /*const nom = result.results[0].name.first;
    const cognoms = result.results[0].name.last;
    const email = result.results[0].email;
    const genere = result.results[0].gender;*/
    const nom = persona.nom;
    const cognoms = persona.cognoms;
    const email = persona.email;
    const genere = persona.genere;

    let genereMap = "Femení";
    let isFemeni = true;
    if (genere === "male"){
        genereMap = "Masculí";
        isFemeni = false;
    }

    document.querySelector('#app p:nth-child(1) span').innerHTML= nom;
    document.querySelector('#app p:nth-child(2) span').innerHTML = cognoms;
    document.querySelector('#app p:nth-child(3) span').innerHTML = email;
    document.querySelector('#app p:nth-child(4) span').innerHTML = genereMap;

    if (isFemeni){
        document.querySelector('#app p:nth-child(4) span').style.color = "orange";
    }else {
        document.querySelector('#app p:nth-child(4) span').style.color = "yellow";
    }

    console.log(nom,cognoms,email,genere);
}