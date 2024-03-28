export const addToFavorites = (id: number) => {
  const favorites = getFromFavorites() ?? [];

  return localStorage.setItem("favorites", JSON.stringify([...favorites, id]));
};

export const getFromFavorites = (): number[] => {
  const favoritesJSON = localStorage.getItem("favorites");
  if (favoritesJSON) {
    return JSON.parse(favoritesJSON);
  } else {
    return [];
  }
};

export const getFromFavoritesById = (id: number) => {};

export const removeFromFavorites = (id: number) => {
  const favorites = getFromFavorites() ?? [];
  const updatedFavorites = favorites.filter((favId: number) => favId !== id);
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
};
