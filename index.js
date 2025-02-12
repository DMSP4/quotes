import quotes from "./src/quotes.js";
import { toggleFavoriteIcon, showFavoriteCard, hideFavoriteCard } from "./src/favoritesHandler.js";

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");
const toggleFavoriteBtn = document.getElementById("toggle-favorite-btn");
const favoriteContainer = document.getElementById("favorites-container");

let currentQuoteIndex;



function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const quote = randomQuote.quote;
  const quoteAuthor = randomQuote.author;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = quoteAuthor;
  toggleFavoriteIcon(randomQuote.isFavorite, toggleFavoriteBtn);
  toggleFavoriteBtn.style.display = "inline-block";
}



function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(currentQuote.quote, currentQuote.author, favoriteContainer);
  } else {
    hideFavoriteCard(currentQuote.quote);
  }
}

generateBtn.addEventListener("click", generateRandomQuote);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);

// generateRandomQuote();
