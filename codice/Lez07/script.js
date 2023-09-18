//Es block scope variables

/* for (let index = 0; index < 5; index++) {
    console.log(index);;

    for (let i = 0; i < 5; i++) {
        console.log(index);
        
    }

}
 */

// //template literal

// const nome = 'pippo'

// console.log(`Benvenuto ${nome}

// come va?

// `);

//arrow function

const test =  params => console.log('test');

const note = ['do', 're', 'mi', 'fa', 'do#'] 

// for (const nota of note) {
//     console.log(nota.toUpperCase());
// }

const noted = note
    .filter(n => n.startsWith("d"));

    console.log(noted);


//spread operator

let a = ['a', 'b', 'c']

let b = [...a, 'd','e']

console.log(b);

//rest parameters
function avg(...params) {
    let totale = 0;
    for (let index = 0; index < params.length; index++) {
        totale += params[index];
        
    }
    return totale / params.length;

}



console.log(avg(25,26,27,28,29,30));
console.log(avg(28,29,30));

const totale = [25,26,27,28,29,30].reduce((a, b)=>a+b,0)/6;
console.log(totale);

















