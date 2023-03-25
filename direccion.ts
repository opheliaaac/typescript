export class Direccion {
    private calle:string;
    private numero:number;
    private piso:string;
    private letra: string;
    private codigo: string; //se guarda en string para evitar problemas con los cp que empiezan por 0
    private poblacion:string;
    private provincia:string;
    constructor (a:string,b:number, c:string, d:string, e:string, f: string, g: string){
        this.calle = a;
        this.numero = b;
        this.piso = c;
        this.letra = d;
        this.codigo = e;
        this.poblacion = f;
        this.provincia = g;
    }

    printDireccion(){
        return (this.calle + " " + this.numero + " " + this.piso + " " +
        this.letra + " " + this.codigo + " - " + this.poblacion + ", " + this.provincia)
    }
}
