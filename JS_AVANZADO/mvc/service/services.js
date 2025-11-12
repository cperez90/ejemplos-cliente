/*
* return Promise<Persona>
*/
import {Persona} from "../model/models.js";

export function getPersona()
{
    return fetch('https://randomuser.me/api/')
        .then(function (resposta){
            return resposta.json();
        }).then(function (result){
            return new Persona(
                result.results[0].name.first,
                result.results[0].name.last,
                result.results[0].email,
                result.results[0].gender,
                "no dni");
        })
}