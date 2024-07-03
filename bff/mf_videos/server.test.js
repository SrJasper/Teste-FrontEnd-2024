const request = require('supertest');
const { app } = require('./server'); // Importe o app do seu server.js

describe('Testes das rotas do mf_video', () => {
  it('Should respond with index.html in "/" route', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/text\/html/);
  });
});
