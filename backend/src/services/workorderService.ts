import { getConnection } from './dbService';
import { tableNames } from '../config/config';

export async function fetchWorkOrders(mechanicId: string) {
  const db = await getConnection();
  const request = db.request();
  request.input('mechanicId', mechanicId);
  const result = await request.query(`SELECT * FROM ${tableNames.estimateHeader} WHERE MechanicId = @mechanicId`);
  return result.recordset;
}
