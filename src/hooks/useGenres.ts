import genres from '../assets/data/genres';
import { Genre } from '../models/game';

import { Payload } from './useData';

export default (): Payload<Genre> => ({ data: genres, isLoading: false, error: null });