const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
export function analyzeBooks() {
  var dataDisplay = document.getElementById('dataDisplayBooks');
  if (dataDisplay.style.display === 'block') {
    dataDisplay.style.display = 'none';
  } else {
    var searchParam = prompt("Quel paramètre de recherche souhaitez-vous utiliser ? (1: Empruntés au moins une fois, 2: Le plus emprunté, 3: Le moins emprunté, 4: Trouver par ID, 5: Supprimer par ID, 6: Ordre alphabétique)");
    var result = '';
    switch (searchParam) {
      case '1':
        result = books.every(book => book.rented > 0) ? 'Tous les livres ont été empruntés au moins une fois.' : 'Tous les livres n\'ont pas été empruntés.';
        break;
      case '2':
        result = books.reduce((max, book) => max.rented > book.rented ? max : book).title;
        break;
      case '3':
        result = books.reduce((min, book) => min.rented < book.rented ? min : book).title;
        break;
      case '4':
        result = books.find(book => book.id === 873495)?.title || 'Aucun livre trouvé avec cet ID.';
        break;
      case '5':
        result = 'Pour supprimer le livre avec l\'ID 133712, utilisez la méthode splice sur le tableau de livres.';
        break;
      case '6':
        result = books.sort((a, b) => a.title.localeCompare(b.title)).map(book => book.title).join(', ');
        break;
      default:
        result = 'Option non valide.';
    }
    console.log(result);
    dataDisplay.textContent = result;
    dataDisplay.style.display = 'block';
  }
}