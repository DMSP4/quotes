const quotes = [
  {
    quote: "Phantasie ist wichtiger als Wissen, denn Wissen ist begrenzt.",
    author: "Albert Einstein",
  },
  {
    quote: "Erfolg hat drei Buchstaben: TUN.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote: "Ohne Musik wäre das Leben ein Irrtum.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Wer kämpft, kann verlieren. Wer nicht kämpft, hat schon verloren.",
    author: "Bertolt Brecht",
  },
  {
    quote: "Gesundheit ist nicht alles, aber ohne Gesundheit ist alles nichts.",
    author: "Arthur Schopenhauer",
  },
  {
    quote: "Habe den Mut, dich deines eigenen Verstandes zu bedienen.",
    author: "Immanuel Kant",
  },
  {
    quote:
      "Man muss mit den richtigen Leuten zusammenarbeiten, sie achten und motivieren.",
    author: "Theodor Fontane",
  },
  {
    quote: "Was wir wissen, ist ein Tropfen; was wir nicht wissen, ein Ozean.",
    author: "Marie von Ebner-Eschenbach",
  },
  {
    quote: "Nehmen Sie die Menschen, wie sie sind, andere gibt’s nicht.",
    author: "Konrad Adenauer",
  },
  {
    quote:
      "Dort, wo man Bücher verbrennt, verbrennt man am Ende auch Menschen.",
    author: "Heinrich Heine",
  },
];

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const quote = randomQuote.quote;
  const quoteAuthor = randomQuote.author;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = quoteAuthor;
}

generateBtn.addEventListener("click", generateRandomQuote);

// generateRandomQuote();
