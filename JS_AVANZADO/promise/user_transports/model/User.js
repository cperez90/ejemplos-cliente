export class User
{
    #username;
    #nom;
    #cognoms;
    #transport;

    constructor(username,nom,cognoms,transport_idtransport)
    {
        this.#username = username;
        this.#nom = nom;
        this.#cognoms = cognoms;
        this.nomComplet = this.#nom + " " + this.#cognoms;
        this.#transport = transport_idtransport;

    }

    get transport() {
        return this.#transport;
    }

    set transport(value) {
        this.#transport = value;
    }

    get username() {
        return this.#username;
    }

    set username(value) {
        this.#username = value;
    }

    get nom() {
        return this.#nom;
    }

    set nom(value) {
        this.#nom = value;
    }

    get cognoms() {
        return this.#cognoms;
    }

    set cognoms(value) {
        this.#cognoms = value;
    }
}