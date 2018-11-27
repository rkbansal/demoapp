import React, { Component } from 'react';
import DoneButton from './common/DoneButton';
class TitlePanel extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {cardNumber, name} = this.props;
    return(<div className="title-panel">
    <span>{cardNumber}.{name}</span>
    <DoneButton title="DONE"/>
    </div>);
  }
}

export default TitlePanel;