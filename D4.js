/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

// let l1 = prompt("Inserisci la misura del primo lato del rettangolo: ");
// let l2 = prompt("Inserisci la misura del secondo lato: ");

function area(l1,l2){
    return l1*l2;
}
// console.log(area(l1, l2));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

// let num1 = parseInt(prompt("Inserisci il primo numero intero: "));
// let num2 = parseInt(prompt("Inserisci il secondo numero intero: "));

function crazySum(num1, num2){
    if (num1 === num2){
        return (num1 + num2)*3;
    } else {
        return num1 + num2
    }
}

// console.log(crazySum(num1,num2))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
// let num1 = prompt("Inserisci un numero: ");

function crazyDiff (num1){
    if (num1 <= 19){
        return Math.abs(num1 - 19);
    } else {
        return Math.abs(num1 - 19) * 3;
    }
}

// console.log(crazyDiff(num1));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

// let n = parseInt(prompt("Inserisci un numero intero: "));

function boundary(n) {
    return (n >= 20 && n <= 100) || n === 400;
}

// console.log(boundary(n));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

// let str = prompt("Inserisci una parola: ")

function epify(str) {
    if (str.startsWith("EPICODE")){
        return str;
    } else {
        return ("EPICDOE") + str;
    }
}

// console.log(epify(str));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

// let num = prompt("Inserisci un numero, se divisibile per 3 o 7 ricevi TRUE: ");

function check3and7 (num){
    return Math.abs(num) % 3 === 0 || Math.abs(num) % 7 === 0;
}

// console.log(check3and7(num));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

// let str = prompt("Inserisci del testo: ");

function reverseString(str){
    return str.split("").reverse().join("");
}

// console.log(reverseString(str));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

// let str = prompt("Inserisci una frase: ");

function upperFirst(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
// console.log(upperFirst(str));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

// let str = prompt("Inserisci una parola: ");

function cutString(str) {
    return str.slice(1, -1);
}

// console.log(cutString(str));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

// let n = prompt("Inserisci un numero: "); 

function giveMeRandom (n){
    const randomNumbers = [];
    for (let i = 0; i < n; i++){
        randomNumbers.push(Math.floor(Math.random() * 11))
    }

    return randomNumbers;
}

// console.log(giveMeRandom(n));
