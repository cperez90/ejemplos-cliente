import {Car} from "../model/Car.js";

export function findAll()
{
    return fetch("https://raw.githubusercontent.com/vega/vega/refs/heads/main/docs/data/cars.json")
        .then(response => response.json())
        .then(result => {
            return result
                .map(jsonCar => clientToCar(jsonCar))
        }).catch(error => console.log('error',error));
}
function clientToCar(result){
    return new Car(result.Name, result.Horsepower,result.Year);
}

function findByName (cars, txt){
    if (!txt){
        return cars;
    }
    return cars.filter(car=>car.name.toLowerCase().includes(txt.toLowerCase()));
}

function findByMinHP(cars,minHP){
    if (!minHP){
        return cars;
    }
    return cars.filter(car=>car.horsepower>=minHP);
}

function findByMaxHP(cars,max){
    if (!max){
        return cars;
    }
    return cars.filter(car=>car.horsepower<=max);
}

export function cerca(cars,txt,min,max){
    const carsName = findByName(cars,txt);
    const carsMinHP = findByMinHP(carsName,min);
    const carsMaxHP = findByMaxHP(carsMinHP,max);
    return carsMaxHP;
}