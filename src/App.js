import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
// import { SELECT } from './actions/select'



class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>COMPUTER MODELS</h1>
        <select>
          <option value="">-- pick a model --</option>
          <option>{this.props.select.map(computer)}</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    select: state.select
  }
}

export default connect(mapStateToProps)(App)