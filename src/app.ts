import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globelErrorHandlers from './app/middelware/globelErrorHandlers';
import router from './app/routes';

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', router);

app.get('/', async (req: Request, res: Response) => {
  res.send('hello World University managnent');
});

// Global Error Handel ...........................................
app.use(globelErrorHandlers);

export default app;
