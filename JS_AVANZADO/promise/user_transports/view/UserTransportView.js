export class UserTransportView {

   paintUser(users) {
        const app = document.querySelector('#app');
        const table = document.createElement('table');

        const trHeader = document.createElement('tr');

        const thUsername = document.createElement('th');
        thUsername.innerText = "Nom user";

        const thCognoms = document.createElement('th');
        thCognoms.innerText = "Cognoms";

        const thTransport = document.createElement('th');
        thTransport.innerText = "Transport";

        trHeader.appendChild(thUsername);
        trHeader.appendChild(thCognoms);
        trHeader.appendChild(thTransport);

        table.appendChild(trHeader);

        for (const user of users){
            const trHeader = document.createElement('tr');

            const tdUsername = document.createElement('td');
            tdUsername.innerText = user.username;

            const tdCognoms = document.createElement('td');
            tdCognoms.innerText = user.cognoms;

            const tdTransport = document.createElement('td');
            const transportImage = document.createElement('img');
            transportImage.src = user.transport.url;
            tdTransport.innerText = user.transport.nom;
            tdTransport.appendChild(transportImage);

            trHeader.appendChild(tdUsername);
            trHeader.appendChild(tdCognoms);
            trHeader.appendChild(tdTransport);

            table.appendChild(trHeader);
        }

        app.appendChild(table);
    }


}