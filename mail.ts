export class Mail {
    private tipo:string;
    private direccion:string;
    constructor (a: string, b: string){
        this.tipo = a;
        this.direccion = b;
    }
    printMail(){
        return (this.tipo + " - " + this.direccion);
    }
}