import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import LeftPanel from './components/LeftPanel';
import './App.css';
import MiddlePanel from './components/MiddlePanel';
import questionnaire from './data/q2.json';
import RightPanel from './components/RightPanel';

const leftPanelData = questionnaire.cards.map((card)=>{return{name: card.name, acronym: card.acronym}});
console.log(questionnaire);
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="questionnaire-container">
          <LeftPanel cards={leftPanelData}/>
          <Switch>
            <Route component={MiddlePanel}></Route>
          </Switch>
          <RightPanel />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
