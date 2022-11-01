import { JokeQuantity, JokeType } from '../types';

const baseUrl = 'https://official-joke-api.appspot.com/jokes';

export const getUrl = (quantity: JokeQuantity, type?: JokeType) =>
    `${baseUrl}/${type ? type + '/' : ''}${quantity}`;
