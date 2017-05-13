import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contest extends Component {
  render() {
    return (
      <div className='Contest'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>Contest Description</h3>
          </div>
          <div className='panel-body'>
            <div className='contest-description'>
              {this.props.description}
            </div>
          </div>
        </div>

        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>Proposed Names</h3>
          </div>
          <div className='panel-body'>
            <ul className='list-group'>
              <li className='list-group-item'>Name one...</li>
              <li className='list-group-item'>Name two...</li>
            </ul>
          </div>
        </div>

        <div className='panel panel-info'>
          <div className='panel-heading'>
            <h3 className='panel-title'>Propse a new name.</h3>
          </div>
          <div className='panel-body'>
            <form>
              <div className='input-group'>
                <input
                  className="form-control"
                  type='text'
                  placeholder="New name here..."
                />
                <span className='input-group-btn'>
                  <button className='btn btn-info'>Submit</button>
                </span>
              </div>
            </form>
          </div>
        </div>

        <div
          className='home-link link'
          onClick={this.props.contestListClick}>
          Contest List
        </div>
      </div>
    );
  }
}

Contest.propTypes = {
  description: PropTypes.string.isRequired,
  contestListClick: PropTypes.func.isRequired
};

export default Contest;
