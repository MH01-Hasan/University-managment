import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globelErrorHandlers from './app/middelware/globelErrorHandlers';
import router from './app/routes';
import status from 'http-status';
import cookieParser from 'cookie-parser';

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// api Routes use ....................................

app.use('/api/v1/', router);

app.get('/', async (req: Request, res: Response) => {
  res.send('hello World University managnent');
});

// Global Error Handel ...........................................
app.use(globelErrorHandlers);

// Handel  Note Pound .........................................
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: 'Not Pound',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API note Pound',
      },
    ],
  });

  next();
});

export default app;
