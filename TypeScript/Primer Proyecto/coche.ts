class Coche{
    private color:string;
    private modelo:string;
    private velocidad:number;

    constructor(){
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

    public getModelo():string{
        return this.modelo;
    }

    public setModelo(modelo:string){
        this.modelo = modelo;
    }

    public getColor():string{
        return this.color;
    }

    public setColor(color:string){
        this.color = color;
    }

    public getVelocidad():number{
        return this.velocidad;
    }

    public acelerar(){
        this.velocidad++;
    }

    public frenar(){
        this.velocidad--;
    }
}

var coche1 = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();

coche2.setColor("Verde");
coche3.setColor("Azul");
console.log("El modelo del coche 1 es "+coche1.getModelo()+" y su color es "+coche1.getColor());
console.log("El color del coche 2 es "+coche2.getColor());
console.log("El color del coche 3 es "+coche3.getColor());

coche1.acelerar();
coche1.acelerar();
coche1.acelerar();
console.log("La velocidad del coche 1 es "+coche1.getVelocidad());
coche1.frenar();
console.log("La velocidad del coche 1 despues de frenar es "+coche1.getVelocidad());
