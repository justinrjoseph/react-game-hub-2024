import { Genre } from '../models/game';

import useData, { Payload } from './useData';

export default (): Payload<Genre> => useData<Genre>('genres');