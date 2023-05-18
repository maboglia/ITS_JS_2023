const TITOLO = document.getElementById('titolo');
const btn = document.getElementById('btn');
const output = document.getElementById('output');
const nome_serie = document.getElementById('nome_serie');
const foto = document.getElementById('foto');

const URL = 'https://api.tvmaze.com/singlesearch/shows?q=';

btn.onclick = function () {
    
    fetch(URL + TITOLO.value )
        .then(   res => res.json()   )
        .then(serie => {

            nome_serie.innerHTML =serie.name +'<span>'+  serie.rating.average+'</span>'
            foto.src = serie.image.medium

        })

}