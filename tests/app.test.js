const request = require('supertest');
const app = require('../lib/app');

describe('app', () => {
  it('takes the / path and returns index.html', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Home Page'));
      });
  });
});

