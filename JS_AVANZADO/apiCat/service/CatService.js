import {Cat} from "../model/Cat.js";

export function getCat()
{
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "live_53VmMRrKFF608qPvLfYxxBznyeK1u0oQK3srd2Xu9jNgJksIBea8HttyOhxNdz61"
    });

    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };
    return fetch("https://api.thecatapi.com/v1/images/0XYvRd7oD", requestOptions)
        .then(function (resposta){
            return resposta.json();
        }).then(function (result){
            return new Cat(
                result.url,
                result.breeds[0].name);
        })
}