import { Request, Response, NextFunction } from 'express';
import { fetchWorkOrders } from '../services/workorderService';
import Logger from '../utils/Logger';

export async function getWorkOrders(req: Request, res: Response, next: NextFunction) {
  try {
    const mechanicId = req.query.mechanicId as string;
    const orders = await fetchWorkOrders(mechanicId);
    res.json(orders);
  } catch (err) {
    Logger.error('Failed to get work orders', err);
    next(err);
  }
}
