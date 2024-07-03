const request = require("supertest");
const { app, server } = require("./server");

describe("Testes das rotas do mf_video", () => {
  afterAll(() => {
    server.close();
  });

  it("Should respond with index.html in '/' route", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/text\/html/);
  });

  it("Should have response.status '200' in '/show-favorites' route", async () => {
    const response = await request(app).get("/show-favorites");
    expect(response.status).toBe(200);
  });

  it("Should have response.status '200' in '/show-default' route", async () => {
    const response = await request(app).get("/show-default");
    expect(response.status).toBe(200);
  });
});
