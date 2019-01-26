import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { SELECT } from './actions/select'



class App extends Component {
  render() {
    
    return (
      <div className="App">
        <h1>COMPUTER MODELS</h1>
        <select>
          <option value="">-- pick a model --</option>
          {this.props.select}
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      select: state.select
  }
}

export default connect(mapStateToProps, { SELECT })(App)