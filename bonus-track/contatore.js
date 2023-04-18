const RESULT = document.getElementById('result')


let counter = 0;

function inc() {
    counter++;
    render()
}

function dec() {
    counter--;
    render()
}

function render() {
    RESULT.innerHTML = '<h1>' + counter + '</h1>'
}