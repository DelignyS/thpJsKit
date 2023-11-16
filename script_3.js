export function createPyramid() {
  let pyramidDisplay = document.getElementById('pyramidDisplay');
  if (pyramidDisplay.style.display === 'block') {
    pyramidDisplay.style.display = 'none';
  } else {
    let floors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
    let pyramid = '';
    for (var i = 1; i <= floors; i++) {
      pyramid += ' '.repeat(floors - i) + '#'.repeat(i) + '\n';
    }
    console.log(pyramid);
    pyramidDisplay.textContent = pyramid + "\nC'est vraiment un gros tas de Merde ! \n- Ian Malcolm, Jurassic Park 1";
    pyramidDisplay.style.display = 'block';
  }
}