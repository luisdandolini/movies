import create from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteState {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const useFavoritesStore = create(
  persist<FavoriteState>(
    (set) => ({
      favorites: [],
      addFavorite: (id: string) =>
        set((state) => ({
          favorites: [...state.favorites, id],
        })),
      removeFavorite: (id: string) =>
        set((state) => ({
          favorites: state.favorites.filter((favoriteId) => favoriteId !== id),
        })),
    }),
    {
      name: "favorites-storage",
    }
  )
);
