const btn=document.createElement("button");
btn.addEventListener("click",function() {
    console.log("Hai cliccato");
})
btn.textContent="Cliccami";
document.body.append(btn);

const righe=document.getElementsByClassName("row");
for (const riga of righe) {
    const btn1=document.createElement("button");
    btn1.textContent="Cliccami";
    riga.innerHTML="";
    riga.append(btn1);
}