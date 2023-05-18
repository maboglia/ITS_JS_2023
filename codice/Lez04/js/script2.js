/*const auto = {
    marca: 'fiat',
    modello: 'punto',

    stampa: function () {
        return this.cilindrata + ' ' + this.modello;
    }
}
*/
/*
function Auto(_marca, _modello) {
    return {
        marca: _marca,
        modello: _modello,
    
        stampa: function () {
            return this.marca + ' ' + this.modello;
        }   
    }
}
*/
/*
function Auto(marca, modello){
    this.marca = marca;
    this.modello = modello;
    this.stampa = function () {
        //return "marca: " + this.marca + ", modello: " + this.modello;
        return `marca: ${this.marca}, modello: ${this.modello}`
    }
}
*/

class Auto{
    constructor(marca, modello){
        this.marca = marca;
        this.modello = modello;
    }

    
}

//auto.cilindrata = 1100;
const a = new Auto('fiat', 'punto')
const b = new Auto('mercedes', 'classe b')
console.info(b.stampa())