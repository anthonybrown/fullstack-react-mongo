import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
// Since we are using babel-preset-stage-2
// we can use a shorter syntax
  state = {
    pageHeader: 'Naming Contests'
  };
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { test: 42 };
  // }

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
