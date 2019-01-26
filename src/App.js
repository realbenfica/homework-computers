import React, { Component } from 'react';
import './App.css';
// import { connect } from 'react-redux';

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

const array = Object.keys(data).map(i => data[i])

class App extends Component {
  state = {
  }

  updateSelection = () => {
    let {manufacturer, year} = this.props
    let nextState = Object.assign( {}, this.state, {manufacturer, year} )
    this.setState(nextState);
}

  render() {
    const key = Object.keys(data)

    const computers = array.map(computer => {
      return (
        <option value={key} key={computer.year}>{computer.manufacturer} ({computer.year})</option>
      )
    })

    return (
      <div className="App">
        <h1>COMPUTER MODELS</h1>
        <select onClick={this.updateSelection}>
          <option value="">-- pick a model --</option>
          {computers}
        </select>
      </div>
    );
  }
}

export default App;
// export default connect(null, { })(App)