import { Hono } from 'hono';
import { UserRouter } from './routes/user.routes';
const app = new Hono();
app.route('/', UserRouter);
export default app;
