import config from './config';
import apiRouter from './api';
import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender';

const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get(['/', '/contest/:contestId'], (req, res) => {
  serverRender(req.params.contestId)
    .then(({ initialMarkup, initialData }) => {
      res.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch(console.error);

});

// API endpoints
server.use('/api', apiRouter);
// use static middlewares
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express is listening on port ', config.port);
});
