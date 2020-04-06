import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <h2>Hello World</h2>
         <Route path='/' component={HelloWorld} />
        <h2>Bomb</h2>
        <Route path='/' component={Bomb} />
        <h2>Roulette Gun</h2>
        <Route path='/' component={RouletteGun} />
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
