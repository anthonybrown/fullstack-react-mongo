import config from './config';
// import fs from 'fs';
import apiRouter from './api';
import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.send('Hello Express\n');
});

server.use('/api', apiRouter);
server.use(express.static('public'));

// server.get('/about.html', (req, res) => {
//   fs.readFile('./about.html', (err, data) => {
//     res.send(data.toString());
//   });
// });

server.listen(config.port, () => {
  console.info('Express is listening on port ', config.port);
});

// import config, { nodeEnv, logStars } from './config';
//
// console.info(config, nodeEnv,);
// logStars('My message');



// import http from 'http';
//
// const server = http.createServer((req, res) => {
//   res.write('Hello HTTP node module, you are so awesome!\n');
//   setTimeout(() => {
//     res.write('[After 3 seconds]...I can stream too!\n');
//     res.end();
//   }, 3000);
// });
//
//
// server.listen(8080);

// server.on('request', (req, res) => {
//   res.write('Hello HTTP node module, you are so awesome!\n');
//   setTimeout(() => {
//     res.write('[after 3 seconds]...I can stream too!\n');
//     res.end();
//   }, 3000);
// });


// import https from 'https';
//
// https.get('https://www.lynda.com', res => {
//   console.log('Response status code: ', res.statusCode);
//
//   res.on('data', chunk => {
//     console.log(chunk.toString());
//   });
// });
