import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Joke } from '../types';
import JokeRow from './JokeRow';

type Props = { jokes: Joke[] };

export function JokeTable({ jokes }: Props) {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Setup</TableCell>
                        <TableCell>Punchline</TableCell>
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
