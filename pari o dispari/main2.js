/* 
!Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

function giochiamo(){
    let numeroElement = numero.value;

    let scommessaElement = pariDispari.value; 

    let scommessapc = Math.floor(Math.random() * 100)
    document.getElementById("risultatopc").innerHTML = (scommessapc);

    let risultato = numeroElement + scommessapc;

    let dispariElement
}