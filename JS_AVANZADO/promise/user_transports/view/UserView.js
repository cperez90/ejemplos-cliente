export function paintUser(users){
    const app = document.querySelector('#app');
    const list = document.createElement("ul");

    for (const user of users){
        const li = document.createElement("li");

        li.innerHTML = `
            <p>${user.username}</p>
            <p>${user.nom}</p>
            <p>${user.cognom1}</p>
        `;

        list.appendChild(li);
    }
}