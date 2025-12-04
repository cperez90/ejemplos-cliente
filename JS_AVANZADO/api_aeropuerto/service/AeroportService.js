import {Aeroport} from "../model/aeroport.js";


export class AeroportService{

    async findAll() {
        const aeroportFetch = await fetch('https://theteacher.codiblau.com/public/exercicis/airports')
        const aeroports = await aeroportFetch.json();
        return  aeroports.map(a => this.#clientToAeroport(a));
    }

    #clientToAeroport(result){
        return new Aeroport(
            result.code,
            result.name,
            result.lat,
            result.lon,
            result.city);
    }

    findByName (aeroports, txt){
        if (!txt){
            return aeroports;
        }
        return aeroports
            .filter(
            aeroport=>aeroport.name.toLowerCase().includes(txt.toLowerCase()) ||
            aeroport.code.toLowerCase().includes(txt.toLowerCase()) ||
            aeroport.city.toLowerCase().includes(txt.toLowerCase())
            );
    }

    search(aeroports,txt){
        return this.findByName(aeroports,txt);
    }
}