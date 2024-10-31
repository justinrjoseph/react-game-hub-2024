import Game from '../models/game';

import HttpClient from './http-client';

export default new HttpClient<Game>('/games');