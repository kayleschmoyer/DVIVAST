import { log } from '../utils/Logger';

const API_BASE = 'http://localhost:3000/api';

async function request(url: string, options?: RequestInit) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error('Network response was not ok');
    return await res.json();
  } catch (err) {
    log('ERROR', (err as Error).message);
    throw err;
  }
}

export function fetchWorkOrders(mechanicId: string) {
  return request(`${API_BASE}/workorders?mechanicId=${mechanicId}`);
}

export function submitInspection(payload: any) {
  return request(`${API_BASE}/inspection`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
}
