//console.log('hello finestra');

const DADO1 = document.getElementById('dado1');
const DADO2 = document.getElementById('dado2');

let random1 = 'https://raw.githubusercontent.com/maboglia/ProgrammingResources/master/images/dadi/f' +  (parseInt(Math.random() * 6) + 1) + '.jpg';
let random2 = 'https://raw.githubusercontent.com/maboglia/ProgrammingResources/master/images/dadi/f' +  (parseInt(Math.random() * 6) + 1) + '.jpg';

console.log(random1);
console.log(random2);

DADO1.src = random1;
DADO2.src = random2;


let a = 5;

if (a < 5 ){
    console.log("minore");
} else {
    console.log('maggiore');
}
console.log(typeof a);
a = true;
for (let i = 0; i < 10; i++) {
    
   // document.write('<h2>  ciao ' + i + '</h2>');


}
