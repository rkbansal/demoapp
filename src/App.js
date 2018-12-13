import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Questionnaire from 'pages/questionnaire';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route path="/questionnaire" component={Questionnaire}></Route>
          <Route path="/test" component={Questionnaire}></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
