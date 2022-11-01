export type JokeType = 'general' | 'programming';
export type JokeQuantity = 'random' | 'ten';

export type Joke = {
    id: number;
    type: JokeType;
    setup: string;
    punchline: string;
};
