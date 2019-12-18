import { init } from '@rematch/core';
import { profile } from './models/profile';

export const store = init({
  models: {
    profile,
  },
});
