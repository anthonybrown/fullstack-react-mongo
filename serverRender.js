import axios from 'axios';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import config from './config';
import App from './src/components/App';

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
    .then(response => {
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialContests={response.data.contests} />
        ),
        initialData: response.data
      };
    });

export default serverRender;
