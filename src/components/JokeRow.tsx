import React, { useCallback, useContext } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Joke } from '../types';
import Checkbox from '@mui/material/Checkbox';
import { FavoriteContext } from '../pages/util';

type Props = { joke: Joke };
function App({ joke }: Props) {
    const { setup, punchline, id } = joke;
    const { favorite, setFavorite } = useContext(FavoriteContext);

    const isInFavorite = favorite.some((fav) => fav.id === id);

    const markAsFavorite = useCallback(() => {
        setFavorite((fav) => {
            if (isInFavorite) {
                return favorite.filter((fav) => fav.id !== id);
            } else {
                return [...fav, joke];
            }
        });
    }, [favorite, id, isInFavorite, joke, setFavorite]);

    return (
        <TableRow>
            <TableCell>{setup}</TableCell>
            <TableCell>{punchline}</TableCell>
            <TableCell>
                <Checkbox checked={isInFavorite} onChange={markAsFavorite} />
            </TableCell>
        </TableRow>
    );
}

export default App;
