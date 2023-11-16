import { displayHelloWorld, askName } from './script_1.js';
import { calculateFactorial } from './script_2.js';
import { createPyramid } from './script_3.js';

displayHelloWorld(); // Affiche "Bonjour, monde!" dans la console en appelant la fonction displayHelloWorld() du fichier script_1.js

askName();// Demande le prénom de l'utilisateur en appelant la fonction askName() du fichier script_1.js

document.getElementById('factorialButton').addEventListener('click', calculateFactorial); // Affiche la factorielle d'un nombre en appelant la fonction calculateFactorial() du fichier script_2.js

document.getElementById('pyramidButton').addEventListener('click', createPyramid); // Affiche une pyramide en appelant la fonction createPyramid() du fichier script_3.js