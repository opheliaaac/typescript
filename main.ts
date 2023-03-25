import {Persona} from './persona';
import {Direccion} from './direccion';
import {Telefono} from './telefono';
import {Mail} from './mail';

var personas:Array<Persona>=[];

var direccionPaco = new Direccion("C/ Olot",6,"Bajo","A","08923","Santa Coloma de Gramenet","Barcelona");
var telfPaco = new Telefono("Fijo", 931111111);
var mailPaco = new Mail("Personal", "PacoPaquito@gmail.com");
var paco = new Persona("Paco", "Pérez Sánchez", 40, "12345678X","1983-02-02","Azul","Hombre",direccionPaco,mailPaco,telfPaco,"Llamar a partir de las 16:00.");
personas.push(paco);

var direccionCarmen = new Direccion("Av. de la Circumval·lació",54,"1º","C","08913","Badalona","Barcelona");
var mailCarmen = new Mail("Personal", "carmen@gmail.com");
var telfCarmen = new Telefono("Móvil", 666666666);
var carmen = new Persona("Carmen", "Gonzalez Martinez", 36, "87654321C","1987-01-01","Negro","",direccionCarmen,mailCarmen,telfCarmen,"Disponible por las mañanas");
personas.push(carmen);

var direccionAna = new Direccion("C/ Major",14,"5º","B","08930","Sant Adrià del Besòs","Barcelona");
var mailAna = new Mail("Personal", "anaemail@gmail.com");
var telfAna = new Telefono("Fijo", 933333333);
var ana = new Persona("Ana", "Ortiz Pascal", 55, "22222222A","1967-11-22","Violeta","Mujer",direccionAna,mailAna,telfAna);
personas.push(ana);

console.log("---------- Antes de los cambios ----------");
paco.printPersona();
console.log("-----------------------------------------");
carmen.printPersona();
console.log("-----------------------------------------");
ana.printPersona();
console.log("-----------------------------------------");

personas.forEach(function (persona) {
    if (persona.dni == "22222222A"){
        var direccionNueva = new Direccion("C/ de las Piedras",42,"1","A","04006","Almería","Almería");
        var mailNuevo  = new Mail("Mail nuevo", "nuevomail@gmail.com");
        var telfNuevo  = new Telefono("Teléfono nuevo", 111111111);
        persona.direcciones.push(direccionNueva);
        persona.mails.push(mailNuevo);
        persona.telefonos.push(telfNuevo);
    }
});

console.log("------ Después de añadir nuevos datos ------")
paco.printPersona();
console.log("-----------------------------------------");
carmen.printPersona();
console.log("-----------------------------------------");
ana.printPersona();
console.log("-----------------------------------------");
