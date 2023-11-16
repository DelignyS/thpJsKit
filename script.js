// script.js
import { displayHelloWorld, askName } from './script_1.js';
import { calculateFactorial } from './script_2.js';
import { createPyramid } from './script_3.js';
import { analyzeData } from './script_4.js';
import { analyzeBooks } from './script_5.js';

document.addEventListener('DOMContentLoaded', (event) => {
    displayHelloWorld();
    askName();
    document.getElementById('factorialButton').addEventListener('click', calculateFactorial);
    document.getElementById('pyramidButton').addEventListener('click', createPyramid);
    document.getElementById('analyzeDataButton').addEventListener('click', analyzeData);
    document.getElementById('analyzeBooksButton').addEventListener('click', analyzeBooks);

});