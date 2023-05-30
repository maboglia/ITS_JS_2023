const URL = 'https://jsonplaceholder.typicode.com/posts';

fetch(URL)//promise
    .then(      risposta => risposta.json()         )//ricevo la risposta e la trasformo da JSON in JS
    .then(      risposta => {  
        
        const UL = document.createElement('ul');

        for (const post of risposta) {
            
            const PAR = document.createElement('li');

            const ANCHOR = document.createElement('a')

            ANCHOR.setAttribute('href', '#');

            PAR.onclick = function () {
                fetch(URL +'/'+post.id)
                    .then(res => res.json())
                    .then(singolo => {
                        console.log(singolo);
                    })



            }


            ANCHOR.textContent = post.title;
           
            PAR.append(ANCHOR)
            UL.append(PAR)
        }
    
        document.body.append(UL);

        // risposta.forEach(post => {
        //     console.log(post.title);
        // });
    
    })