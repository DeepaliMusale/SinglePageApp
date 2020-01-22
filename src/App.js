import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Actors from './components/actors';
import Actress from './components/actress';
import Films from './components/films';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar title="IFFA 2019"/>
          <Route exact path="/" render={() => <Home title="IFFA Awards"/>} />
          <Route path="/actors" render={() => <Actors title="Best Actors"/>} />
          <Route path="/actress" render={() => <Actress title="Best Actress"/>} />
          <Route path="/films" render={() => <Films title="Best Films"/>} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
