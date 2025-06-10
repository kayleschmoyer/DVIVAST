import { Request, Response, NextFunction } from 'express';
import { saveInspection, InspectionPayload } from '../services/inspectionService';
import { log, LogLevel } from '../utils/logger';

export async function postInspection(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body as InspectionPayload;
    await saveInspection(payload);
    res.status(201).json({ message: 'Inspection saved.' });
  } catch (err) {
    log(LogLevel.ERROR, `Failed to save inspection: ${(err as Error).message}`);
    next(err);
  }
}
