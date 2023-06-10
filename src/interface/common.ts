import { IgenericErrormessage } from './error';

export type Igenericresponce = {
  statusCode: number;
  message: string;
  errorMessage: IgenericErrormessage[];
};
