import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const App = (props) => {
  return (
    <h2 className='text-center text-muted'>
      {props.headerMessage}
    </h2>
  );
};

App.propTypes = {
  headerMessage: PropTypes.string.isRequired
};

App.defaultProps = {
  headerMessage: 'Default Props at work.'
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
