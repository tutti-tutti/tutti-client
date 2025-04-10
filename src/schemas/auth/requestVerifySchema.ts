import { z } from 'zod';

import { authSchema } from './authSchema';

export const requestVerifySchema = z.object({
  email: authSchema.shape.email,
  type: authSchema.shape.type,
});
