import { getConnection } from './dbService';
import { tableNames } from '../config/config';

export interface PartStatus {
  part: string;
  quadrant: string;
  status: string;
  note?: string;
  photoUrl?: string;
}

export interface InspectionPayload {
  estimateId: string;
  mechanicId: string;
  parts: PartStatus[];
  timestamp: string;
}

export async function saveInspection(payload: InspectionPayload) {
  const db = await getConnection();
  const table = tableNames.lineItem;
  for (const part of payload.parts) {
    const request = db.request();
    request.input('estimateId', payload.estimateId);
    request.input('mechanicId', payload.mechanicId);
    request.input('part', part.part);
    request.input('quadrant', part.quadrant);
    request.input('status', part.status);
    request.input('note', part.note || null);
    request.input('photoUrl', part.photoUrl || null);
    request.input('timestamp', payload.timestamp);
    await request.query(
      `INSERT INTO ${table} (EstimateId, MechanicId, Part, Quadrant, Status, Note, PhotoUrl, Timestamp)
       VALUES (@estimateId, @mechanicId, @part, @quadrant, @status, @note, @photoUrl, @timestamp)`
    );
  }
}
