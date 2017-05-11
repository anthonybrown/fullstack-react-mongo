import config from './config';
import apiRouter from './api';
import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content:'<h4>Hello Express and <em><b>EJS</b></em>!!!</h4>'
  });
});

// API endpoints
server.use('/api', apiRouter);
// use static middlewares
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express is listening on port ', config.port);
});
