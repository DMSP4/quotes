import { currentQuote } from "../../index.js";

const favoriteContainer = document.getElementById("favorites-container");
const toggleBtn = document.getElementById("toggle-favorite-btn");
toggleBtn.addEventListener("click", toggleFavorite);

hideBtn(toggleBtn);

function toggleFavorite() {
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, toggleBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(currentQuote.text, currentQuote.author, favoriteContainer);
  } else {
    hideFavoriteCard(currentQuote.text);
  }
}

function handleFavorite(isFavorite) {
  showBtn(toggleBtn);
  toggleFavoriteIcon(isFavorite, toggleBtn);
}

function toggleFavoriteIcon(isFavorite, toggleFavoriteBtn) {
  toggleFavoriteBtn.classList.toggle("fa-solid", isFavorite);
  toggleFavoriteBtn.classList.toggle("fa-regular", !isFavorite);
}

function showBtn(btn) {
  btn.style.display = "inline-block";
}

function hideBtn(btn) {
  btn.style.display = "none";
}

function showFavoriteCard(text, author, favoriteContainer) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = `
    <p>${text}</p>
    <p class="author">${author}</p>
  `;
  favoriteContainer.appendChild(favoriteCard);
}

function hideFavoriteCard(text) {
  const favoriteCards = document.querySelectorAll(".favorite-card");
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(text)) {
      card.remove();
    }
  });
}

export { handleFavorite };

// toggleFavoriteIcon,
// showFavoriteCard,
// hideFavoriteCard,
// showBtn,
