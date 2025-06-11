import { Request, Response, NextFunction } from 'express';
import { MSSQLError as SqlError } from 'mssql';
import Logger from '../utils/Logger';

export function errorHandler(err: any, req: Request, res: Response, _next: NextFunction) {
  const prefix = err instanceof SqlError ? '[SQL ERROR]' : '[SERVER ERROR]';
  Logger.error(`${prefix} ${err.message}`, err);
  res.status(err.status || 500).json({
    error: 'Something went wrong. Please try again or contact support.',
    code: 'INTERNAL_SERVER_ERROR'
  });
}
