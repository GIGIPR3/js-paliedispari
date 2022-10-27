/* 
! Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

/* let parola = prompt("inserisci una parola, scoprirò se è palidroma");
console.log("la parola è:" + parola);

let parolaReverse = '';

for (let i = parola.length -1; i >= 0; i--){
    parolaReverse += parola[i]
}

console.log("La tua parola al contrario è:" + parolaReverse);

if (parola = parolaReverse){
    console.log("LA TUA PAROLA E' POLIDROMA!!");
} else{
    console.log("la tua parola non è polidroma!");
} */

/* let parolaElement = parola.value;


parolaReverse = ''; */

function analizzaParola(){

    let parolaElement = parola.value;

    parolaReverse = '';

    for (let i = parolaElement.length -1; i >= 0; i--){
        parolaReverse += parolaElement[i];
    }

    if (parolaElement == parolaReverse){
        console.log("la parola è polidroma!!");

    }else (parolaElement != parolaReverse);{
        console.log("la parola non è polidroma!!!");
    }

}

