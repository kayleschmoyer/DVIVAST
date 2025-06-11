import { Request, Response, NextFunction } from 'express';
import { saveInspection, InspectionPayload } from '../services/inspectionService';
import Logger from '../utils/Logger';

export async function postInspection(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body as InspectionPayload;
    await saveInspection(payload);
    res.status(201).json({ message: 'Inspection saved.' });
  } catch (err) {
    Logger.error(`Failed to save inspection`, err);
    next(err);
  }
}
