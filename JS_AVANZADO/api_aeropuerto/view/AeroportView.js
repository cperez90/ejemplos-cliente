
export class AeroportView{

    paintAeroport(aeroports, map, service){
        const app = document.querySelector('#app');
        app.innerHTML = "";

        const labelSearch = document.createElement('label');
        labelSearch.innerText = "Search: ";

        const searchInput = document.createElement('input');

        app.appendChild(labelSearch);
        app.appendChild(searchInput);

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        thead.innerHTML = `
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>City</th>
            </tr>
        `;

        table.appendChild(thead);
        table.appendChild(tbody);
        app.appendChild(table);

        const markers = {};

        aeroports.forEach(a => {
            const marker = L.marker([a.lat, a.lon])
                .addTo(map)
                .bindPopup(`<b>${a.name}</b><br>${a.city}`);
            markers[a.code] = marker;
        });

        const paintRows = (data) => {
            tbody.innerHTML = "";
            data.forEach(a => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${a.code}</td>
                    <td>${a.name}</td>
                    <td>${a.lat}</td>
                    <td>${a.lon}</td>
                    <td>${a.city}</td>
                `;
                tbody.appendChild(tr);
            });
        };

        paintRows(aeroports);

        searchInput.addEventListener('input', () => {
            const filtered = service.search(aeroports, searchInput.value);
            paintRows(filtered);

            if (filtered.length > 0) {
                const first = filtered[0];

                map.setView([first.lat, first.lon], 10);

                markers[first.code].openPopup();
            }
        });
    }

    paintTable(aeroports){

    }

    paintMap(aeroports) {
        const app = document.querySelector("#app");

        const mapDiv = document.createElement('div');

        mapDiv.id="map";
        mapDiv.style.height='180px';
        app.appendChild(mapDiv);

        const map = L.map('map').setView([41.3851, 2.1734], 6);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png')
            .addTo(map);

        for(const aeroport of aeroports){
            L.marker([aeroport.lat,aeroport.lon]).addTo(map);
        }
    }

    paintInput(callBackFilter,aeroports){
        const app = document.querySelector("#app");
        const input = document.createElement('input');
        input.addEventListener('input', async () => {
           const aeroportsFilters = await callBackFilter(aeroports,this.value);
           this.paintTable(aeroportsFilters);
           this.paintMap(aeroportsFilters);
        });
        app.appendChild(input);
    }
}