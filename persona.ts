import {Direccion} from './direccion';
import {Telefono} from './telefono';
import {Mail} from './mail';

export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumple: Date;
    private _colorFavorito: string;
    private _sexo: string;
    private _direcciones: Direccion[];
    private _mails: Mail[];
    private _telefonos: Telefono[];
    private _notas: string | undefined;

  // Constructor
    constructor(a: string, b: string, c: number, d: string, e: string, f: string, g: string, h: Direccion, i: Mail, j: Telefono, k?: string) {
        this._nombre = a;
        this._apellidos = b;
        this._edad = c;
        this._dni = d;
        this._cumple = new Date(e);
        this._colorFavorito = f;
        this._sexo = g;
        this._direcciones = [];
        this._direcciones.push(h);
        this._mails = [];
        this._mails.push(i);
        this._telefonos = [];
        this._telefonos.push(j);
        this._notas = k;
    }

    //Getters y Setters

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }

    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }

    public get dni(): string {
        return this._dni;
    }
    public set dni(value: string) {
        this._dni = value;
    }

    public get cumple(): Date {
        return this._cumple;
    }
    public set cumple(value: Date) {
        this._cumple = value;
    }

    public get colorFavorito(): string {
        return this._colorFavorito;
    }
    public set colorFavorito(value: string) {
        this._colorFavorito = value;
    }

    public get sexo(): string {
        return this._sexo;
    }
    public set sexo(value: string) {
        this._sexo = value;
    }

    public get direcciones(): Direccion[] {
        return this._direcciones;
    }
    public set direcciones(value: Direccion[]) {
        this._direcciones = value;
    }

    public get mails(): Mail[] {
        return this._mails;
    }
    public set mails(value: Mail[]) {
        this._mails = value;
    }

    public get telefonos(): Telefono[] {
        return this._telefonos;
    }
    public set telefonos(value: Telefono[]) {
        this._telefonos = value;
    }

    public get notas(): string | undefined {
        return this._notas;
    }
    public set notas(value: string | undefined) {
        this._notas = value;
    }

  // Método que imprime los datos del objeto
    printPersona(): void {
        console.log("Nombre: " + this.nombre);
        console.log("Apellidos: " + this.apellidos);
        console.log("Edad: " + this.edad);
        console.log("DNI: " + this.dni);
        var dd = this.cumple.getDate();
        var mm = this.cumple.getMonth() + 1;
        var yyyy = this.cumple.getFullYear();
        var dateString = `${dd}/${mm}/${yyyy}`;
        console.log("Cumpleaños: " + dateString);
        console.log("Color favorito: " + this.colorFavorito);
        console.log("Sexo: " + this.sexo);
        console.log("Direcciones: ");
        this.direcciones.forEach(function (direccion, index) {console.log(index + 1 + " - " + direccion.printDireccion());});
        console.log("Teléfonos: ");
        this.telefonos.forEach(function (telefono, index) {console.log(index + 1 + " - " + telefono.printTelefono());});
        console.log("Mails: ");
        this.mails.forEach(function (mail, index) {console.log(index + 1 + " - " + mail.printMail());});
        console.log("Notas: " + this.notas);
    }
}
