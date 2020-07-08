const app = require('supertest');

const api = require('../../src/app');

describe('REST API Error Handling', () => {
  it('responds with a not found message for bad route', (done) => {
    app(api)
      .get('/test')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});
