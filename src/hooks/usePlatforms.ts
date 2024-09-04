import { Platform } from '../models/game';

import useData, { Payload } from './useData';

export default (): Payload<Platform> => useData<Platform>({
  endpoint: 'platforms/lists/parents'
});