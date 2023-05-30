
const URL = 'https://jsonplaceholder.typicode.com/posts';

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    //console.log(xhr.readyState)

    if (xhr.readyState == 4 && xhr.status==200) {
        const OGGETTO = JSON.parse( xhr.responseText );

        for (const post of OGGETTO) {

            const TITOLO = document.createElement('h2');
            TITOLO.textContent = post.title

            document.body.append(TITOLO)


            
        }

    }

}


xhr.open('get', URL);
xhr.send();

