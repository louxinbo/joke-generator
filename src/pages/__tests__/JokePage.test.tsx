import React from 'react';
import { render, screen } from '@testing-library/react';
import { Joke } from '../../types';
import { JokePage } from '../JokePage';
import { act } from 'react-dom/test-utils';

describe('<JokePage />', () => {
    let originalFetch: any;

    beforeEach(() => {
        originalFetch = global.fetch;
    });

    afterEach(() => {
        global.fetch = originalFetch;
    });
    it('Renders <JokePage /> component correctly', async () => {
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
        // Mock successful api call
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(testJokes),
            })
        ) as any;

        render(<JokePage />);
        // Header of the page
        expect(screen.getByText(/Jokes Generator/i)).toBeInTheDocument();
        //loading progress circle while loading
        expect(screen.getByLabelText('loading-jokes')).toBeInTheDocument();
        //all rows with a table header
        expect(await screen.findAllByText(/setup/i)).toHaveLength(
            testJokes.length + 1
        );
        expect(await screen.findAllByText(/punchline/i)).toHaveLength(
            testJokes.length + 1
        );
        // loading progress circle should disappear
        expect(screen.queryByLabelText('loading-jokes')).toBeNull();

        testJokes.forEach((joke) => {
            expect(screen.getByText(joke.setup)).toBeInTheDocument();
            expect(screen.getByText(joke.punchline)).toBeInTheDocument();
        });

        //refresh button
        expect(screen.getByText(/refresh/i)).toBeInTheDocument();
    });

    it('Should display error message if failed to fetch joks', async () => {
        // Mock unsuccessful api call
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: false,
                json: () => Promise.resolve('Failed to fetch'),
            })
        ) as any;

        render(<JokePage />);

        //loading progress circle while loading
        expect(screen.getByLabelText('loading-jokes')).toBeInTheDocument();
        //Failed error message
        expect(await screen.findByText(/Failed to fetch/i)).toBeInTheDocument();
    });

    it('Should invoke refetch function when click on refresh button', async () => {
        // Mock unsuccessful api call
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: false,
                json: () => Promise.resolve('Failed to fetch'),
            })
        ) as any;

        render(<JokePage />);

        const refreshButton = await screen.findByText(/refresh/i);
        const fetchSpy = jest.spyOn(global, 'fetch');
        act(() => {
            refreshButton.click();
        });

        //Totally fetched twice
        expect(fetchSpy).toHaveBeenCalledTimes(2);

        expect(await screen.findByText(/Failed to fetch/i)).toBeInTheDocument();
    });

    it('Should render filter button groups and one line mode switch', async () => {
        // Mock unsuccessful api call
        global.fetch = jest.fn((url: string) =>
            Promise.resolve({
                ok: false,
                json: () => Promise.resolve('Failed to fetch'),
            })
        ) as any;
        const fetchSpy = jest.spyOn(global, 'fetch');

        render(<JokePage />);

        // all filter
        expect(fetchSpy).toHaveBeenLastCalledWith(
            'https://official-joke-api.appspot.com/jokes/random',
            { method: 'GET' }
        );
        expect(await screen.findByText(/Failed to fetch/i)).toBeInTheDocument();
        const generalFilterButton = screen.getByText(/general/i);
        const programmingFilterButton = screen.getByText(/programming/i);
        const quantitySwitch = screen.getByLabelText('one-line-mode-switch');

        // General filter
        //The filter button should change the url then trigger refetch
        act(() => {
            generalFilterButton.click();
        });
        expect(fetchSpy).toHaveBeenLastCalledWith(
            'https://official-joke-api.appspot.com/jokes/general/random',
            { method: 'GET' }
        );
        expect(await screen.findByText(/Failed to fetch/i)).toBeInTheDocument();

        // Programming filter
        //The filter button should change the url then trigger refetch
        act(() => {
            programmingFilterButton.click();
        });
        expect(fetchSpy).toHaveBeenLastCalledWith(
            'https://official-joke-api.appspot.com/jokes/programming/random',
            { method: 'GET' }
        );
        expect(await screen.findByText(/Failed to fetch/i)).toBeInTheDocument();

        //The switch should change the url then trigger refetch
        act(() => {
            quantitySwitch.click();
        });
        expect(fetchSpy).toHaveBeenLastCalledWith(
            'https://official-joke-api.appspot.com/jokes/programming/ten',
            { method: 'GET' }
        );
        expect(await screen.findByText(/Failed to fetch/i)).toBeInTheDocument();
    });
});
