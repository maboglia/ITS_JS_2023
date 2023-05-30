
//oggetto literal

const Libro = {
    titolo: 'Io, robot',
    prezzo: 16.5,
    pagine: 120,
    disponibile: true,
    autori:['asimov'],
    copertina: {
        big: 'img/asimov.jpg',
        small: 'thumb/asimov.jpg'
    }
};

const libroJson = JSON.stringify(Libro);//convert un oggetto in una stringa

const Libro2 = JSON.parse(libroJson);//converte una stringa in un obj

console.log(Libro2);
