import {AeroportService} from "../service/AeroportService.js";

export class AeroportView{

    paintAeroport(aeroports, map){
        const service = new AeroportService();
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
}