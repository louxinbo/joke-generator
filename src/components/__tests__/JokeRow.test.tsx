import React from 'react';
import { render, screen } from '@testing-library/react';
import { Joke } from '../../types';
import JokeRow from '../JokeRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

describe('<JokeRow />', () => {
    it('Renders <JokeRow /> component correctly', () => {
        const testJoke: Joke = {
            id: 1,
            type: 'general',
            setup: 'setup',
            punchline: 'punchline',
        };
        render(
            <Table>
                <TableBody>
                    <JokeRow joke={testJoke} />
                </TableBody>
            </Table>
        );
        expect(screen.getByText(/setup/i)).toBeInTheDocument();
        expect(screen.getByText(/punchline/i)).toBeInTheDocument();
    });
});
