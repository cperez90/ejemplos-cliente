import {User} from "../model/User.js";
import {Transport} from "../model/Transport.js";

export class UserTransportService{

    async findAll() {
        const usuarisFetch = await fetch('https://theteacher.codiblau.com/public/exercicis/other/usuaris/list')
        const usuaris = await usuarisFetch.json();
        const usuarisObject = usuaris.map(u => this.#clientToUser(u));
        const transportsPromise = usuarisObject.map(u=>u.transport);
        const transportsPromiseResoleve = await Promise.all(transportsPromise);

        for (let i = 0; i < usuarisObject.length; i++){
            usuarisObject[i].transport = transportsPromiseResoleve[i];
        }
        return usuarisObject;
    }

     async getTransportById(id){
        return fetch('https://theteacher.codiblau.com/public/exercicis/other/usuaris/transport', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'idtransport='+id

        })
            .then(x => x.json())
            .then(transport=>this.#clientToTransport(transport));
    }

    #clientToUser(result){
        const transport = this.getTransportById(result.transport_idtransport);
        return new User(
            result.username,
            result.nom,
            result.cognom1 + " " + result.cognom2,
             transport);
    }

    #clientToTransport(json){
        return new Transport(json.id,json.nom,json.url);
    }
}

