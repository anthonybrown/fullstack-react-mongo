import axios from 'axios';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import config from './config';
import App from './src/components/App';

const getApiUrl = (contestId) => {
  if (contestId) {
    return `${config.serverUrl}/api/contests/${contestId}`;
  }

  return `${config.serverUrl}/api/contests`;
};

const getInitialData = (contestId, apiData) => {
  if (contestId) {
    return {
      currentContestId: apiData.id,
      contests: {
        [apiData.id]: apiData
      }
    };
  }
  return {
    contests: apiData.contests
  };
};

const serverRender = (contestId) =>
  axios.get(getApiUrl(contestId))
    .then(response => {
      const initialData = getInitialData(contestId, response.data);
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={initialData} />
        ),
        initialData
      };
    });

export default serverRender;