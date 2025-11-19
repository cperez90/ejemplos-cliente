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

export function findByName (cars, txt){
    return cars.filter(car=>car.name.includes(txt));
}