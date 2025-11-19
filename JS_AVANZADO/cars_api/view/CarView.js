import {findByName} from "../service/CarService.js";

export function paintCars(cars){
    const app = document.querySelector('#app');

    const list = document.createElement("ul");
    let inputName = document.createElement("input");
    inputName.addEventListener('input',function (){
        const  carsFilters = findByName(cars,this.value);
        list.innerHTML = "";
        lista(list,carsFilters);
        console.log(carsFilters);
    });
    /*inputName.addEventListener('input',() =>{
        const valor = document.querySelector("input").value;
        console.log(valor);
    });
    inputName.addEventListener('input',cercar);*/

    app.appendChild(inputName);

    lista(list,cars);

    app.appendChild(list);
}

function lista(list,cars){

    for (const car of cars) {
        const li = document.createElement("li");

        li.innerHTML = `
            <p>${car.name}</p>
            <p>${car.horsepower}</p>
            <p>${car.year}</p>
        `;

        list.appendChild(li);
    }
    return list;
}

function cercar(ev){
    console.log("cercar: ")
    console.log(ev.target.value);
}