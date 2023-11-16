const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

export function analyzeData() {
  let dataDisplay = document.getElementById('dataDisplay');
  if (dataDisplay.style.display === 'block') {
    dataDisplay.style.display = 'none';
  } else {
    let searchParam = prompt("Quel paramètre de recherche souhaitez-vous utiliser ? (1: Nés dans les années 70, 2: Prénom et nom, 3: Âge aujourd'hui, 4: Ordre alphabétique)");
    let result = '';
    switch (searchParam) {
      case '1':
        result = entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year < 1980);
        break;
      case '2':
        result = entrepreneurs.map(entrepreneur => ({ first: entrepreneur.first, last: entrepreneur.last }));
        break;
      case '3':
        result = entrepreneurs.map(entrepreneur => ({ ...entrepreneur, age: new Date().getFullYear() - entrepreneur.year }));
        break;
      case '4':
        result = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
        break;
      default:
        alert("J'aurais pu faire d'autres parramètres de recherche même si l'exercice est interressant, j'ai hâte de m'attaquer à la suite, j'éspère que tu comprends, et que tu vas seulement choisir 1 - 4. Merci de ta compréhension, et j'éspère sincèrement que tu aimes passer du temps sur cette page d'exercices. Bien à toi, SySy ! L'adorateur de Ian Malcolm.");
        return;
    }
    console.log(result);
    dataDisplay.textContent = JSON.stringify(result, null, 2);
    dataDisplay.style.display = 'block';
  }
}