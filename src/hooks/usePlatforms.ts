import platforms from '../assets/data/platforms';
import { Platform } from '../models/platform';

import { Payload } from './useData';

export default (): Payload<Platform> => ({ data: platforms, isLoading: false, error: null });