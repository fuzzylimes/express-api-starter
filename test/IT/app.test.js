const app = require('supertest');

const api = require('../../src/app');

describe('The entire REST API', () => {
  it('responds to requests to default route', (done) => {
    app(api)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { message: 'It\'s working!' }, done);
  });

  it('responds to requests to v1 api route', (done) => {
    app(api)
      .get('/api/v1/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { message: 'v1 base route' }, done);
  });

  it('responds to requests to api/v1/subroute/', (done) => {
    app(api)
      .get('/api/v1/subroute/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { message: 'hello from /api/v1/subroute!' }, done);
  });
});
