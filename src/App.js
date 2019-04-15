import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './components/History';

class App extends Component {
    render() {
        return (
          <BrowserRouter>
          <div className="navigation">
          <NavLink exact to="/" activeStyle={{color:"crimson"}}> Accueil </NavLink>
          <NavLink to="/notre-histoire" activeStyle={{color:"crimson"}}> History </NavLink>
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/notre-histoire" component={History} />
            </Switch>
          </div>
        </BrowserRouter>
        );
    }
}

export default App;