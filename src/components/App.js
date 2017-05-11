import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
// Since we are using babel-preset-stage-2
// we can use a shorter syntax
  state = {
    pageHeader: 'Naming Contests'
  };

  componentDidMount() {
    // usually listen & make Ajax calls
    // listen for events, listeners
    console.info('component did mount.');
  }

  componentWillUnmount() {
    // usually cleanup the listeners and events
    console.info('component unmounted.');
  }

  render() {
    return (
      <div className='App'>
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.test}
        </div>
      </div>
    );
  }
}
export default App;
