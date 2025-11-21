const request = require('supertest');
const app = require('../src/app');

describe('GET /saludo', () => {
  it('debe responder con el mensaje correcto', async () => {
    const res = await request(app).get('/saludo');
    expect(res.statusCode).toBe(200);
    expect(res.body.mensaje).toBe('Hola desde Express');
  });
});
