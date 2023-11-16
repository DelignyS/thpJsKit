
// script_2.js
export function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

export function calculateFactorial() {
  var factorialDisplay = document.getElementById('factorialDisplay');
  if (factorialDisplay.style.display === 'block') {
    factorialDisplay.style.display = 'none';
  } else {
    var number = prompt("De quel nombre veux-tu calculer la factorielle ?");
    var result = factorial(number);
    console.log('Le résultat est : ' + result);
    factorialDisplay.textContent = 'console.log("Le résultat est : ' + result + '");';
    factorialDisplay.style.display = 'block';
  }
}