export function Persona(nom,cognoms,email,genere,dni)
{
    this.nom = nom;
    this.cognoms = cognoms;
    this.email = email;
    this.genere = genere;
    this.dni = dni;
    this.nomComplet = function (){
        return this.nom + " " + this.cognoms;
    }
}