import request from 'supertest';
import app from '../src/app';

describe('GET /api/workorders', () => {
  it('returns 200', async () => {
    const res = await request(app).get('/api/workorders?mechanicId=test');
    expect(res.status).toBe(200);
  });
});
