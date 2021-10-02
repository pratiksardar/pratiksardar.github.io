import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './home';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <BrowserRouter>
          <div>
            <nav>
              <ul id="navigation">
                {/* <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li> */}
              </ul>
            </nav>
          </div>
          
            <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
          </BrowserRouter>
          </div>
            );
  }
}

export default App;