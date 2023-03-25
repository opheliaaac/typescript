export class Telefono {
    private tipo:string;
    private numero:number;
    constructor (a: string, b: number){
        this.tipo = a;
        this.numero = b;
    }

    printTelefono(){
        return (this.tipo + " - " + this.numero);
    }
}
