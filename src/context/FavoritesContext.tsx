import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

const STORAGE_KEY = 'algueye_favorites_v1';

interface FavoritesContextValue {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  removeFavorite: (id: string) => void;
  clearAll: () => void;
  count: number;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    // Lazy initial state : on lit le localStorage une seule fois au montage
    if (typeof window === 'undefined') return [];
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.filter(x => typeof x === 'string') : [];
    } catch {
      return [];
    }
  });

  // Persistance à chaque changement
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      // Silencieux : si localStorage est plein ou bloqué, on perd juste la persistance
    }
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const removeFavorite = (id: string) => {
    setFavorites(prev => prev.filter(x => x !== id));
  };

  const isFavorite = (id: string) => favorites.includes(id);

  const clearAll = () => setFavorites([]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        removeFavorite,
        clearAll,
        count: favorites.length,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextValue => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error('useFavorites must be used inside a FavoritesProvider');
  }
  return ctx;
};
