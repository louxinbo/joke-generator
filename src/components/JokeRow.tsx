import React, { useCallback } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Joke } from '../types';
import { usePersistState } from '../hooks/usePersistState';
import Checkbox from '@mui/material/Checkbox';

type Props = { joke: Joke };
function App({ joke }: Props) {
    const { setup, punchline, id } = joke;
    const [favorite, setFavorite] = usePersistState<Joke[]>([], 'favorite');

    const isInFavorite = favorite.some((fav) => fav.id === id);

    const markAsFavorite = useCallback(() => {
        setFavorite((fav) => {
            if (isInFavorite) {
                return favorite.filter((fav) => fav.id === id);
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
