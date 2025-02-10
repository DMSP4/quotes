import quotes from "./quotes.js";

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
  toggleFavoriteBtn.textContent = randomQuote.isFavorite
    ? "Remove from favorites"
    : "Add to favorites";
  
    toggleFavoriteBtn.style.display = "inline-block";
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteBtn.textContent = currentQuote.isFavorite
    ? "Remove from favorites"
    : "Add to favorites";

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement("div");
    favoriteCard.classList.add("favorite-card");
    favoriteCard.innerHTML = `
      <p>${currentQuote.quote}</p>
      <p class="author">${currentQuote.author}</p>
    `;
    favoriteContainer.appendChild(favoriteCard);
  } else {
    const favoriteCards = document.querySelectorAll(".favorite-card");
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
}

generateBtn.addEventListener("click", generateRandomQuote);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);

// generateRandomQuote();
