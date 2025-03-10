import quotes from "./src/data/quotes.js";
import { handleQuote } from "./src/handlers/quote.js";
import { toggleFavorite, hideFavoriteBtn } from "./src/handlers/favorites.js";
import { localStorageSetItem } from "./src/utils/localStorage.js";

let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
  localStorageSetItem("currentQuote", quote);
}

const favoriteContainer = document.getElementById("favorites-container");
const quoteFavoriteBtn = document.getElementById("quote-favorite-btn");
hideFavoriteBtn();
quoteFavoriteBtn.addEventListener("click", () =>
  toggleFavorite(currentQuote, quoteFavoriteBtn, favoriteContainer)
);

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", () =>
  handleQuote(quotes, setCurrentQuote)
);

export { quoteFavoriteBtn };
