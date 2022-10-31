import React from 'react';
import { render, screen } from '@testing-library/react';
import { Joke } from '../../types';
import { JokeTable } from '../JokeTable';

describe('<JokeTable />', () => {
    it('Renders <JokeTable /> component correctly', () => {
        const testJokes: Joke[] = [
            {
                id: 1,
                type: 'general',
                setup: 'setup1',
                punchline: 'punchline1',
            },
            {
                id: 2,
                type: 'programming',
                setup: 'setup2',
                punchline: 'punchline2',
            },
            {
                id: 3,
                type: 'general',
                setup: 'setup3',
                punchline: 'punchline3',
            },
        ];
        render(<JokeTable jokes={testJokes} />);
        //all rows with a header
        expect(screen.getAllByText(/setup/i)).toHaveLength(
            testJokes.length + 1
        );
        expect(screen.getAllByText(/punchline/i)).toHaveLength(
            testJokes.length + 1
        );

        testJokes.forEach((joke) => {
            expect(screen.getByText(joke.setup)).toBeInTheDocument();
            expect(screen.getByText(joke.punchline)).toBeInTheDocument();
        });
    });
});
