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
    return fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
        .then(function (resposta){
            return resposta.json();
        }).then(function (result){
            return new Cat(
                result.url,
                result.breeds[0].name);
        });
}

export function getCats(limit)
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
    return fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit="+limit, requestOptions)
        .then(function (resposta){
            return resposta.json();
        }).then(function (result){
            const cats = [];
            for (let i = 0; i <limit; i++) {
                cats.push(new Cat(
                    result[i].url,
                    result[i].breeds[0].name));
            }
            return cats;
        })
}