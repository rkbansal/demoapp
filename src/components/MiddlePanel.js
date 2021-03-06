import React, { Component } from 'react';
import Questionnaire from '../data/q2.json';
import TitlePanel from './TitlePanel';
import QuestionCell from './QuestionCell';

class MiddlePanel extends Component {
  constructor(props){
    super(props);
  }


  render() {
    const { cards } = Questionnaire;
    let questions = [];
    let name = ""
    let cardNumber = 0;
    const pathName = this.props.location.pathname.split('/');
    const path = pathName[pathName.length-1];
    for(let i=0, len=cards.length; i<len; i++){
      if(path == cards[i].acronym.replace(/\//g,'_')){
        questions = cards[i].questions;
        name = cards[i].name
        cardNumber = i+1;
        break;
      }
    }
    return(
      <div className="middle-panel">
        <TitlePanel cardNumber={cardNumber} name={name}/>
        {questions.map((question, key)=>{
          const prefix = String.fromCharCode(key+65);
          return <QuestionCell key={key} prefix={prefix} question={question} />
        }) || "Not Correct Route"}
      </div>
    )
  }
};

export default MiddlePanel;