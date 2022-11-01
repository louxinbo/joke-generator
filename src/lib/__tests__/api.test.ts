import { JokeQuantity, JokeType } from '../../types';
import { getUrl } from '../api';

describe('get api', () => {
    it('should return unfiltered api', () => {
        let quantity: JokeQuantity = 'random';
        const url = getUrl(quantity);
        expect(url).toEqual(
            'https://official-joke-api.appspot.com/jokes/random'
        );
    });

    it('should return filtered api', () => {
        let quantity: JokeQuantity = 'random';
        let category: JokeType = 'general';
        const url = getUrl(quantity, category);
        expect(url).toEqual(
            'https://official-joke-api.appspot.com/jokes/general/random'
        );
    });

    it('should return right quantity api', () => {
        let quantity: JokeQuantity = 'ten';
        let category: JokeType = 'programming';
        const url = getUrl(quantity, category);
        expect(url).toEqual(
            'https://official-joke-api.appspot.com/jokes/programming/ten'
        );
    });
});
