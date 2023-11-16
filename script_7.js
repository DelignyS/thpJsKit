export function respondToUser(input) {
  if (!input) {
    return "t'es en PLS ?";
  } else if (input === input.toUpperCase()) {
    return "Pwa, calme-toi...";
  } else if (input.includes("Fortnite")) {
    return "on s' fait une partie soum-soum ?";
  } else if (input.endsWith("?")) {
    return "Ouais Ouais...";
  } else {
    return "balek.";
  }
}