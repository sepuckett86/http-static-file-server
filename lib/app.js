const { createServer } = require('http');
const { parse } = require('url');
const fs = require('fs');

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  // get all names of files in public
  fs.readdir('public', (err, data) => {
    if(err) console.error(err);
    let { pathname } = parse(req.url);

    // remove .html if path contains it
    if(/\w+.html/.test(pathname)) {
      pathname = pathname.slice(0, -5);
    }

    let page;
    if(data.includes(pathname.substring(1) + '.html')) {
      page = pathname.substring(1);
    } else if(pathname === '/') {
      page = 'index';
    } else {
      page = '404';
    }
    
    // read file specified by path
    fs.readFile(`./public/${page}.html`, { encoding: 'utf8' }, (err, data) => {
      if(err) console.error(err);
      res.end(data);
    });
  });
  
});

module.exports = app;
