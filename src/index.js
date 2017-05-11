import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Header = ({message}) => {
  return (
    <h2 className='Header text-center text-muted'>
      {message}
    </h2>
  );
};

Header.propTypes = {
  message: PropTypes.string.isRequired
};

const App = () => {
  return (
    <div className='App'>
      <Header message='Naming Contest' />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
