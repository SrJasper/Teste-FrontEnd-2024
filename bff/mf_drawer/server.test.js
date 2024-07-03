const request = require('supertest');
const { app } = require('./server'); // Caminho para o seu arquivo server.js

describe('Testes das rotas do mf_drawer', () => {
  it('Should respond index.html in "/" route', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/text\/html/);
  });

  it('Should respond with cachedIds in routes .send param', async () => {
    const cachedIds = 'example_cached_ids';
    const response = await request(app)
      .post('/get-string')
      .send({ cachedIds });

    expect(response.status).toBe(200);
    expect(response.body.cachedIds).toBe(cachedIds);
  });

  
  it('Should respond with the last cachedIds in "/get-string" route', async () => {
    const response = await request(app).post('/get-string');
    expect(response.status).toBe(200);
    expect(response.body.cachedIds).toBe('example_cached_ids'); // Verifica se é igual ao último valor de cachedIds
  });
});
