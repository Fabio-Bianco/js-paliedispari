// Chiede all'utente di inserire una parola;
const userInput = prompt("Inserisci una parola:");

function isPalindrome(word) {
  word = word.toLowerCase(); // Converte tutto in minuscolo per evitare errori;

  return word === word.split("").reverse().join(""); //Inverte la parola e confronta con l'originale;
}
// Istruzioni condizionali;
if (userInput) {
  if (isPalindrome(userInput)) {
    alert("La parola è palindroma!");
  } else {
    alert("La parola NON è palindroma!");
  }
} else {
  alert("Inserisci una parola valida.");
}
