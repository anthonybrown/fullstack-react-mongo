import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: []
  };

  componentDidMount() {
    axios.get('/api/contests')
      .then(response => {
        this.setState({
          contests: response.data.contests
        });
      })
      .catch(console.error);

  }

  componentWillUnmount() {
    //console.info('component unmounted.');
  }

  render() {
    return (
      <div className='App'>
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>
    );
  }
}

ContestPreview.propTypes = {
  contests: PropTypes.object,
};


export default App;
