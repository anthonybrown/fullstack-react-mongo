import React, { Component } from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';
import data from '../testData';

class App extends Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: []
  };

  componentDidMount() {
    this.setState({
      contests: data.contests
    });
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
