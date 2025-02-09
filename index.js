const quotes = [
  "Phantasie ist wichtiger als Wissen, denn Wissen ist begrenzt. - Albert Einstein",
  "Erfolg hat drei Buchstaben: TUN. - Johann Wolfgang von Goethe",
  "Ohne Musik wäre das Leben ein Irrtum. - Friedrich Nietzsche",
  "Wer kämpft, kann verlieren. Wer nicht kämpft, hat schon verloren. - Bertolt Brecht",
  "Gesundheit ist nicht alles, aber ohne Gesundheit ist alles nichts. - Arthur Schopenhauer",
  "Habe den Mut, dich deines eigenen Verstandes zu bedienen. - Immanuel Kant",
  "Man muss mit den richtigen Leuten zusammenarbeiten, sie achten und motivieren. - Theodor Fontane",
  "Was wir wissen, ist ein Tropfen; was wir nicht wissen, ein Ozean. - Marie von Ebner-Eschenbach",
  "Nehmen Sie die Menschen, wie sie sind, andere gibt’s nicht. - Konrad Adenauer",
  "Dort, wo man Bücher verbrennt, verbrennt man am Ende auch Menschen. - Heinrich Heine"
];


const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener("click", generateRandomQuote);

generateRandomQuote();