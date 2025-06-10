import mssql from 'mssql';
import { dbConfig } from '../config/config';

export async function getConnection() {
  return await mssql.connect(dbConfig);
}
