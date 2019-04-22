"use strict";
var Coche = /** @class */ (function () {
    function Coche() {
        this.velocidad = 0;
        this.color = "Blanco";
        this.modelo = "BMW";
        /*
        if(color == null){
            this.color = "Blanco";
        }else{
            this.color = color;
        }
        
        if (modelo == null) {
            this.modelo = "BMW";
        }else{
            this.modelo = modelo;
        }*/
    }
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
var coche1 = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();
coche2.setColor("Verde");
coche3.setColor("Azul");
console.log("El modelo del coche 1 es " + coche1.getModelo() + " y su color es " + coche1.getColor());
console.log("El color del coche 2 es " + coche2.getColor());
console.log("El color del coche 3 es " + coche3.getColor());
coche1.acelerar();
coche1.acelerar();
coche1.acelerar();
console.log("La velocidad del coche 1 es " + coche1.getVelocidad());
coche1.frenar();
console.log("La velocidad del coche 1 despues de frenar es " + coche1.getVelocidad());
