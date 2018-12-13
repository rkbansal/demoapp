import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LeftPanel from 'components/LeftPanel';
import MiddlePanel from 'components/MiddlePanel';
import RightPanel from 'components/RightPanel';
import questionnaire from 'data/q2.json';
const leftPanelData = questionnaire.cards.map((card)=>{return{name: card.name, acronym: card.acronym}});
class Questionnaire extends Component {
  render(){
    return(
      <div className="questionnaire-container">
        <LeftPanel cards={leftPanelData} path={this.props.match.path}/>
        <Switch>
          <Route path={this.props.match.path} component={MiddlePanel}></Route>
        </Switch>
        <RightPanel />
      </div>
      );
  }
};

export default Questionnaire;