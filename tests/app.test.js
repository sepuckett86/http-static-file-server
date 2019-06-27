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
  it('takes the /bananas path and returns bananas.html', () => {
    return request(app)
      .get('/bananas')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('bananas'));
      });
  });
  it('takes the /bananas.html path and returns bananas.html', () => {
    return request(app)
      .get('/bananas.html')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('bananas'));
      });
  });
  it('takes paths with no html page and returns 404.html', () => {
    return request(app)
      .get('/does-not-exist')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('not found'));
      });
  });
});

