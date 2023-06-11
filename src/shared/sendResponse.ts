import { Response } from 'express';

type Iapiresponse<T> = {
  statusCode: number;
  success: boolean;
  massege: string | null;
  data?: T | null;
};

const sendResponse = <T>(res: Response, data: Iapiresponse<T>): void => {
  const jsondata: Iapiresponse<T> = {
    statusCode: data?.statusCode,
    success: data?.success,
    massege: data?.massege || null,
    data: data?.data || null,
  };
  res.send(data?.statusCode).json(jsondata);
};

export default sendResponse;
