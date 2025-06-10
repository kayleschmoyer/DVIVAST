import { Request, Response, NextFunction } from 'express';
import { fetchWorkOrders } from '../services/workorderService';
import { log, LogLevel } from '../utils/logger';

export async function getWorkOrders(req: Request, res: Response, next: NextFunction) {
  try {
    const mechanicId = req.query.mechanicId as string;
    const orders = await fetchWorkOrders(mechanicId);
    res.json(orders);
  } catch (err) {
    log(LogLevel.ERROR, `Failed to get work orders: ${(err as Error).message}`);
    next(err);
  }
}
