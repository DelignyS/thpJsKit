// script.js
import { displayHelloWorld, askName } from './script_1.js';
import { calculateFactorial } from './script_2.js';
import { createPyramid } from './script_3.js';
import { analyzeData } from './script_4.js';
import { analyzeBooks } from './script_5.js';
import { translateRNA } from './script_6.js';
import { respondToUser } from './script_7.js';

document.addEventListener('DOMContentLoaded', (event) => {
    displayHelloWorld();
    askName();
    document.getElementById('factorialButton').addEventListener('click', calculateFactorial);
    document.getElementById('pyramidButton').addEventListener('click', createPyramid);
    document.getElementById('analyzeDataButton').addEventListener('click', analyzeData);
    document.getElementById('analyzeBooksButton').addEventListener('click', analyzeBooks);
    //
    const dataDisplay = document.getElementById('dataDisplayRNA');

    document.getElementById('translateRNAButton').addEventListener('click', () => {
        if (dataDisplay.style.display === 'block') {
            dataDisplay.style.display = 'none';
        } else {
            const rna = prompt("Entrez la séquence d'ARN à traduire :");
            const protein = translateRNA(rna);
            dataDisplay.textContent = protein;
            dataDisplay.style.display = 'block';
        }
      });

        const chatBotButton = document.getElementById('chatBotButton');
        const chatBotDisplay = document.getElementById('chatBotDisplay');

  chatBotButton.addEventListener('click', () => {
    if (chatBotDisplay.style.display === 'block') {
      chatBotDisplay.style.display = 'none';
    } else {
      const userInput = prompt("Parlez au bot :");
      const botResponse = respondToUser(userInput);
      console.log(botResponse);
      chatBotDisplay.textContent = botResponse;
      chatBotDisplay.style.display = 'block';
    }
  });
});
