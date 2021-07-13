import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Webapi from './components/Webapi';
import Todos from './components/Todos';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
          render() {
            return (
              <Router>        
                <Header/>
                  <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/webapi">
                        <Webapi />
                    </Route>
                    
                    <Route exact path="/todo">
                        <Todos />
                    </Route>
                </Switch>

           </Router>
            )
          }
}