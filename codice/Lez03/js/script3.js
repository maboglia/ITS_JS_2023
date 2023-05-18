function Pizza(nome,prezzo) {
    this.nome=nome;
    this.prezzo=prezzo;
    this.display=function () {
        return this.nome+" "+this.prezzo;
    }
}

let pizza1= new Pizza("Margherita",5) ;
let pizza2= new Pizza("Napoli",6);

const menu=[];
menu.push(pizza1);
menu.push(pizza2);

for (const pizza of menu) {
    console.log(pizza.display());
}