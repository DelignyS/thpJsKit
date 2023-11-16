
// script_2.js
export function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

export function calculateFactorial() { // permet d'exporter la fonction calculateFactorial() pour pouvoir l'utiliser dans un autre fichier
  let factorialDisplay = document.getElementById('factorialDisplay');
  if (factorialDisplay.style.display === 'block') {
    factorialDisplay.style.display = 'none';
  } else {
    let number = prompt("De quel nombre veux-tu calculer la factorielle ?"); // demande le nombre dont on veut calculer la factorielle
    let result = factorial(number); // calcule la factorielle du nombre
    console.log('Le résultat est : ' + result); // affiche le résultat dans la console
    factorialDisplay.textContent = 'console.log("Le résultat est : ' + result + '");'; // affiche le résultat dans l'élément ayant l'id "factorialDisplay"
    factorialDisplay.style.display = 'block'; // affiche le résultat
  }
}