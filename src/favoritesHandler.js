function toggleFavoriteIcon(isFavorite, toggleFavoriteBtn) {
  toggleFavoriteBtn.classList.toggle("fa-solid", isFavorite);
  toggleFavoriteBtn.classList.toggle("fa-regular", !isFavorite);
}

function showFavoriteCard(quote, author, favoriteContainer) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = `
    <p>${quote}</p>
    <p class="author">${author}</p>
  `;
  favoriteContainer.appendChild(favoriteCard);
}

function hideFavoriteCard(quote) {
  const favoriteCards = document.querySelectorAll(".favorite-card");
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
}

export { toggleFavoriteIcon, showFavoriteCard, hideFavoriteCard };
