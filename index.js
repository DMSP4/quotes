// const quotes = [
//   "Phantasie ist wichtiger als Wissen, denn Wissen ist begrenzt. - Albert Einstein",
//   "Erfolg hat drei Buchstaben: TUN. - Johann Wolfgang von Goethe",
//   "Ohne Musik wäre das Leben ein Irrtum. - Friedrich Nietzsche",
//   "Wer kämpft, kann verlieren. Wer nicht kämpft, hat schon verloren. - Bertolt Brecht",
//   "Gesundheit ist nicht alles, aber ohne Gesundheit ist alles nichts. - Arthur Schopenhauer",
//   "Habe den Mut, dich deines eigenen Verstandes zu bedienen. - Immanuel Kant",
//   "Man muss mit den richtigen Leuten zusammenarbeiten, sie achten und motivieren. - Theodor Fontane",
//   "Was wir wissen, ist ein Tropfen; was wir nicht wissen, ein Ozean. - Marie von Ebner-Eschenbach",
//   "Nehmen Sie die Menschen, wie sie sind, andere gibt’s nicht. - Konrad Adenauer",
//   "Dort, wo man Bücher verbrennt, verbrennt man am Ende auch Menschen. - Heinrich Heine"
// ];
const compliments = [
  "Татьяна, твоя улыбка освещает даже самый пасмурный день!",
  "Ты обладаешь удивительной харизмой и теплом, которые притягивают людей.",
  "Твоя доброта и искренность делают мир вокруг ярче и добрее.",
  "Ты не только красива, но и невероятно умна – редкое сочетание!",
  "Твои глаза сияют, как звезды, отражая твою внутреннюю красоту.",
  "С тобой всегда легко и приятно – твоя энергия заряжает позитивом!",
  "Ты вдохновляешь окружающих своей уверенностью и целеустремленностью.",
  "Твоя грация и утонченность делают тебя по-настоящему уникальной.",
  "Ты словно весенний луч солнца – согреваешь и даришь радость.",
  "С Татьяной каждый день становится особенным и незабываемым!"
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