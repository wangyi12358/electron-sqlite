import { zValidator } from '@hono/zod-validator';
import { createInsertSchema } from 'drizzle-zod';
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { z } from 'zod';
import type { Env } from './db';
import DB from './db';
import type { NewUser } from './schema';
import { user } from './schema';

const app = new Hono<Env>();

app.use(logger());
app.use(DB());

app
  .get('/user', async (c) => {
    const data = c.var.db.select().from(user).all();
    return c.json({ data });
  })
  .post('/user', zValidator('json', createInsertSchema(user, { id: z.undefined() })), async (c) => {
    const data = c.req.valid('json');
    data.updateAt = new Date();
    const res = await c.var.db
      .insert(user)
      .values(data as NewUser)
      .execute();
    return c.json({ data: res });
  });

export default app;
