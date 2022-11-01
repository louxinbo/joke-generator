import { createContext } from 'react';
import { Joke } from '../types';

export const FavoriteContext = createContext<{
    favorite: Joke[];
    setFavorite: React.Dispatch<React.SetStateAction<Joke[]>>;
}>({
    favorite: [],
    setFavorite: () => {},
});
