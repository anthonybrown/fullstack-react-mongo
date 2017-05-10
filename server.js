import config from './config';
import apiRouter from './api';
import express from 'express';

const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content:'<h4>Hello Express and <em><b>EJS</b></em>!!!</h4>'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express is listening on port ', config.port);
});
