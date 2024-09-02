import { Game } from '../models/game';

import useData, { Payload } from './useData';

export default (): Payload<Game> => useData<Game>('games');