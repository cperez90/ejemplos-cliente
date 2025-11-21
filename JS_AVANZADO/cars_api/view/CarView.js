import {cerca} from "../service/CarService.js";

export function paintCars(cars){
    const app = document.querySelector('#app');
    const list = document.createElement("ul");

    const  labelName = document.createElement('LABEL');
    labelName.innerText = 'Name';
    app.appendChild(labelName);
    let inputName = document.createElement("input");
    inputName.addEventListener('input',function (){
        const carsFilters = cerca(cars,inputName.value,inputMin.value,inputMax.value);
        list.innerHTML = "";
        paintlistCars(list,carsFilters);
        console.log(carsFilters);
    });
    app.appendChild(inputName);
    /*
    inputName.addEventListener('input',() =>{
        const valor = document.querySelector("input").value;
        console.log(valor);
    });
    inputName.addEventListener('input',cercar);
    */

    //POTENCIA
    const  minHPLabel = document.createElement('LABEL');
    minHPLabel.innerText = 'Min HP';
    let inputMin = document.createElement("input");
    app.appendChild(minHPLabel);
    inputMin.addEventListener('input',function (){
        list.innerHTML = "";
        const carsFilters = cerca(cars,inputName.value,inputMin.value,inputMax.value);
        paintlistCars(list,carsFilters);
        console.log(carsFilters);
    });
    app.appendChild(inputMin);

    const  maxHPLabel = document.createElement('LABEL');
    maxHPLabel.innerText = 'Max HP';
    app.appendChild(maxHPLabel);
    let inputMax = document.createElement("input");
    inputMax.addEventListener('input',function (){
        list.innerHTML = "";
        const carsFilters = cerca(cars,inputName.value,inputMin.value,inputMax.value);
        paintlistCars(list,carsFilters);
        console.log(carsFilters);
    });
    app.appendChild(inputMax);



    paintlistCars(list,cars);

    app.appendChild(list);
}

function paintlistCars(list,cars){

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

/*function cercar(ev){
    console.log("cercar: ")
    console.log(ev.target.value);
}*/