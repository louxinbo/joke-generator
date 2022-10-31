export type JokeType = 'general' | 'programming';

export type Joke = {
    id: number;
    type: JokeType;
    setup: string;
    punchline: string;
};
