import { Request, Response, NextFunction } from 'express';
import { log, LogLevel } from '../utils/logger';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  log(LogLevel.ERROR, `${err.code || 'SERVER_ERROR'} - ${err.message}`);
  res.status(err.status || 500).json({ error: 'An unexpected error occurred.' });
}
