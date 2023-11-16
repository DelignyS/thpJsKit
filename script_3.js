export function createPyramid() { // permet d'exporter la fonction createPyramid() pour pouvoir l'utiliser dans un autre fichier
  var pyramidDisplay = document.getElementById('pyramidDisplay'); // récupère l'élément ayant l'id "pyramidDisplay"
  if (pyramidDisplay.style.visibility === 'visible') { // si la pyramide est visible
    pyramidDisplay.style.visibility = 'hidden'; // cache la pyramide
  } else { 
    var floors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"); // demande le nombre d'étages de la pyramide
    var pyramid = ''; // initialise la variable pyramid
  for (var i = 1; i <= floors; i++) { // pour i allant de 1 à floors
      pyramid += ' '.repeat(floors - i) + '#'.repeat(i) + '\n'; // ajoute à pyramid les espaces et les # nécessaires pour créer la pyramide
    }
    console.log(pyramid); // affiche la pyramide dans la console
    pyramidDisplay.textContent = pyramid + "\nC'est vraiment un gros tas de Merde ! - Ian Malcolm, Jurassic Park 1"; // affiche la pyramide dans l'élément ayant l'id "pyramidDisplay"
    pyramidDisplay.style.visibility = 'visible'; // affiche la pyramide
  }
}