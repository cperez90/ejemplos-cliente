export function User(username,nom,cognoms,transport_idtransport)
{
    this.nom = nom;
    this.cognoms = cognoms;
    this.idTransport = transport_idtransport;
    this.nomComplet = function (){
        return this.nom + " " + this.cognoms;
    }
}