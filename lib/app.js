const { createServer } = require('http');
const { parse } = require('url');
const fs = require('fs');

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  const { pathname } = parse(req.url);
  let page;
  if(pathname === '/') {
    page = 'index';
  } else {
    page = '404';
  }
  fs.readFile(`./public/${page}.html`, { encoding: 'utf8'}, (err, data) => {
    if(err) console.error(err);
    res.end(data);
  })
})

module.exports = app;