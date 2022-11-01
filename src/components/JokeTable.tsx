import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Joke } from '../types';
import JokeRow from './JokeRow';

type Props = { jokes: Joke[]; id: string; loading: boolean };

export function JokeTable({ jokes, id, loading }: Props) {
    return (
        <TableContainer id={id} aria-busy={loading ? 'true' : 'false'}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Setup</TableCell>
                        <TableCell>Punchline</TableCell>
                        <TableCell>Star</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {jokes.map((joke) => (
                        <JokeRow key={joke.id.toString()} joke={joke} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
