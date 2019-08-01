import React, { Component } from 'react';
import airplane from './content/images/airplane.png';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import './styles/dicezone.css';

import Constants from './content/constants';
import Title from './components/molecules/Title';
import Game from './container/Game';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: Constants.title
    }
  }
  // componentDidMount() {
  //   // console.log("CDM");
  //   setTimeout(() => {
  //     // console.log("setTimeout inside CDM");
  //     this.setState({ name: "Bazinga" });
  //   }, 4000);
  // }
  render() {
    // console.log("render App.js: ", this.state);
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        <img src={airplane} className="App-logo" alt="logo" />
        <Title name={this.state.name}></Title>


        <Game />

      </div>
    )
  }
}
