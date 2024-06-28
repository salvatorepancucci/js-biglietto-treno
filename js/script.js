let chilometri = prompt("Inserisci il numero di chilometri da percorrere:");
let eta = prompt("Inserisci l'età del passeggero:");
let prezzoPerKm = 0.21;
let prezzoTotale = chilometri * prezzoPerKm;
if (eta < 18) {
    prezzoTotale *= 0.8;
} else if (eta > 65) {
    prezzoTotale *= 0.6;
}
prezzoTotale = prezzoTotale.toFixed(2);
document.getElementById("risultato").innerText = `Il prezzo finale del biglietto è €${prezzoTotale}`;
