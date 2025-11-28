import {User} from "../model/User.js";
import {Transport} from "../model/Transport.js";

export async function findAll() {
    const usuarisFetch = await fetch('https://theteacher.codiblau.com/public/exercicis/other/usuaris/list')
    const usuaris = await usuarisFetch.json();
    return usuaris.map(u => clientToUser(u));
}

export async function getTransportById(){
    const transportFetch = await fetch('https://theteacher.codiblau.com/public/exercicis/other/usuaris/transport?idtransport=1', {
        method: 'POST',
        headers:{
            "ContentType": "application/x-www-form-urlencoded"
        }

    });

    const transport = await transportFetch.json();
    return clientToTransport(transport);
}

function clientToUser(result){
    return new User(
        result.username,
        result.nom,
        result.cognom1 + " " + result.cognom2,
        null);
}

function clientToTransport(json){
    return new Transport(json.id,json.nom,json.url);
}