import {AeroportService} from "../service/AeroportService.js";

export class AeroportView{

    paintAeroport(aeroports){
        const service = new AeroportService();
        const app = document.querySelector('#app');
        const list = document.createElement('td');

        const labelSearch = document.createElement('label');
        labelSearch.innerText= "Search";
        app.appendChild(labelSearch);

        const searchInput = document.createElement('input');
        searchInput.addEventListener('input',function (){
            const aeroportsFilter = service.search(aeroports,searchInput.value);
            list.innerHTML = "";
            paintlistCars(list,aeroportsFilter);
            console.log(aeroportsFilter);
        });
        app.appendChild(searchInput);

        const table = document.createElement('table');

        const trHeader = document.createElement('tr');

        const thAeroCode = document.createElement('th');
        thAeroCode.innerText = "Code";

        const  thAeroName = document.createElement('th');
        thAeroName.innerText = "Name";

        const thAeroLat = document.createElement('th');
        thAeroLat.innerText = "Latitude";

        const thAeroLon = document.createElement('th');
        thAeroLon.innerText = "Longitude";

        const thAeroCity = document.createElement('th');
        thAeroCity.innerText = "City";

        trHeader.appendChild(thAeroCode);
        trHeader.appendChild(thAeroName);
        trHeader.appendChild(thAeroLat);
        trHeader.appendChild(thAeroLon);
        trHeader.appendChild(thAeroCity);

        table.appendChild(trHeader);

        for (const aeroport of aeroports) {
            const trHeader = document.createElement('tr');

            const tdAeroCode = document.createElement('td');
            tdAeroCode.innerText = aeroport.code;

            const tdAeroName = document.createElement('td');
            tdAeroName.innerText = aeroport.name;

            const tdAeroLat = document.createElement('td');
            tdAeroLat.innerText = aeroport.lat;

            const tdAeroLon = document.createElement('td');
            tdAeroLon.innerText = aeroport.lon;

            const tdAeroCity = document.createElement('td');
            tdAeroCity.innerText = aeroport.city;

            trHeader.appendChild(tdAeroCode);
            trHeader.appendChild(tdAeroName);
            trHeader.appendChild(tdAeroLat);
            trHeader.appendChild(tdAeroLon);
            trHeader.appendChild(tdAeroCity);

            table.appendChild(trHeader);
        }

        app.appendChild(table);
    }
}