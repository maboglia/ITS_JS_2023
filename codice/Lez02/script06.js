
let i = 0;

for (const studente of STUDENTI) {
    
    let nome = studente[1]
    let cognome = studente[2]

    const DIV = document.createElement('div');
    DIV.setAttribute('class', 'card')
    DIV.innerHTML = '<p>' + nome + ' ' + cognome + '</p>'

    document.body.append(DIV)


    if (studente[3] % 5 == 0){
        console.log('---');
    }

}