import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Joke } from '../types';

type Props = { joke: Joke };
function App({ joke }: Props) {
    const { setup, punchline } = joke;
    return (
        <TableRow>
            <TableCell>{setup}</TableCell>
            <TableCell>{punchline}</TableCell>
        </TableRow>
    );
}

export default App;
