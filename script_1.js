export function displayHelloWorld() { // permet d'exporter la fonction displayHelloWorld() pour pouvoir l'utiliser dans un autre fichier
  // Récupère le bouton et l'élément pour afficher le code
  let button = document.getElementById('helloButton'); // récupère l'élément ayant l'id "helloButton"
  let codeDisplay = document.getElementById('codeDisplay'); // récupère l'élément ayant l'id "codeDisplay"

  button.onclick = function() {
    // Si le code est déjà affiché, le cache
    if (codeDisplay.textContent) { 
      codeDisplay.textContent = ''; // ici le code est vide
      codeDisplay.style.display = 'none'; // cache le code
    } else {
      // Sinon, affiche "Bonjour, monde!" dans la console
      console.log("Bonjour, monde!");
  
      // Et affiche le code JavaScript dans l'élément <pre>
      codeDisplay.textContent = 'console.log("Bonjour, monde!");'; // ici le code est "console.log("Bonjour, monde!");" est affiché dans l'élément ayant l'id "codeDisplay"
      codeDisplay.style.display = 'block'; // affiche le code
    }
  }
}

//___________________________________________________//

export function askName() {
  // Récupère le bouton et l'élément pour afficher le prénom
  var button = document.getElementById('nameButton');
  var nameDisplay = document.getElementById('nameDisplay');

  button.onclick = function() {
    // Si le prénom est déjà affiché, le cache
    if (nameDisplay.textContent) {
      nameDisplay.textContent = '';
      nameDisplay.style.display = 'none';
    } else {
      // Sinon, demande le prénom de l'utilisateur
      var name = prompt("Quel est votre prénom ?");

      // Affiche "Bonjour, (prénom)!" dans la console
      console.log("Bonjour, " + name + "!");

      // Et affiche "Bonjour, (prénom)!" dans l'élément <pre>
      nameDisplay.textContent = 'console.log("Bonjour, ' + name + '!");';
      nameDisplay.style.display = 'block';
    }
  }
}