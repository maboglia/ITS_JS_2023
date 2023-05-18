const titoli = [];

titoli.push('io, robot');

let altriLibri = ['ho malavoglia', 'promessi sposi'];

let tutti = [...titoli, ...altriLibri];

console.log(tutti);

for (let index = 0; index < tutti.length; index++) {
    console.log(tutti[index]);
    
}

for (const titolo of titoli) {
    console.log(titolo);
}

tutti
    .filter(t => t.startsWith('i'))
    .forEach(t => console.log(t));
