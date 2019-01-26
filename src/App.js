import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
// import { SELECT } from './actions/select'



class App extends Component {
  render() {
    const key = this.props.select
    const computers = key.map(computer => {
      return (
        <option key={computer.year}>{computer.manufacturer} ({computer.year})</option>
      )
    })

    return(
      <div className="App">
        <h1>COMPUTER MODELS</h1>
        <select onClick={this.handleSubmit}>
          <option value="">-- pick a model --</option>
          {computers}
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    select: state
  }
}

export default connect(mapStateToProps)(App)