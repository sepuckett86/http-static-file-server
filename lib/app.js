const { createServer } = require('http');
const { parse } = require('url');

const app = createServer((req, res) => {
  const { pathname } = parse(req.url);
  console.log(pathname);
  res.end('Hi');
})

module.exports = app;