export function translateRNA(rna) {
  const codonMap = {
    'UCU': 'Sérine', 'UCC': 'Sérine', 'UCA': 'Sérine', 'UCG': 'Sérine', 'AGU': 'Sérine', 'AGC': 'Sérine',
    'CCU': 'Proline', 'CCC': 'Proline', 'CCA': 'Proline', 'CCG': 'Proline',
    'UUA': 'Leucine', 'UUG': 'Leucine',
    'UUU': 'Phénylalanine', 'UUC': 'Phénylalanine',
    'CGU': 'Arginine', 'CGC': 'Arginine', 'CGA': 'Arginine', 'CGG': 'Arginine', 'AGA': 'Arginine', 'AGG': 'Arginine',
    'UAU': 'Tyrosine', 'UAC': 'Tyrosine'
  };

  const codons = rna.match(/.{1,3}/g); // regex to split string into array of 3 characters
  const aminoAcids = codons.map(codon => codonMap[codon] || 'Inconnu'); // map each codon to its amino acid or 'Inconnu' if not found
  const protein = aminoAcids.join('-');

  console.log(protein);
  return protein;
}

/*Dans le fichier script_6.js, j'ai créé une fonction translateRNA qui prend une chaîne de caractères représentant une séquence d'ARN et la traduit en une séquence d'acides aminés.

La fonction commence par définir un objet codonMap qui mappe les codons (groupes de trois lettres de l'ARN) aux acides aminés correspondants. Cet objet est utilisé comme une table de recherche pour traduire les codons en acides aminés.

Ensuite, la fonction divise la chaîne d'ARN en codons en utilisant la méthode match de la chaîne avec une expression régulière qui correspond à tous les groupes de trois caractères. Le résultat est un tableau de codons.

Pour chaque codon dans le tableau, la fonction utilise la méthode map pour remplacer le codon par l'acide aminé correspondant dans l'objet codonMap. Si le codon n'est pas dans l'objet codonMap, il est remplacé par la chaîne 'Inconnu'.

Enfin, la fonction joint les acides aminés en une seule chaîne avec des tirets entre eux en utilisant la méthode join, et retourne cette chaîne.

La fonction translateRNA est exportée pour pouvoir être utilisée dans d'autres fichiers. Dans votre application, vous pouvez l'importer et l'utiliser pour traduire des séquences d'ARN en séquences d'acides aminés.

*/