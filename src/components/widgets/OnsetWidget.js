import React, { Component } from 'react';
import Segment from 'components/common/Segment';
import WidgetDisplay from '../common/WidgetDisplay';
import UnitMenu from 'components/common/UnitMenu';
import Numpad from '../common/Numpad';
import BackAndDone from 'components/global/BackAndDone';

class OnsetWidget extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null
    }
  }
  
  handleClick(selected) {
    this.setState({
      selected: selected
    });
  }

  render(){
    console.log('Onset Widget');
    return(
    <div>
      <div className="widget-header">
        <div className="header">
          <span>Onset</span>
          <button className="unknown">UNKNOWN</button></div>
      </div>
      <div className="widget-body">
        <Segment segments={["HOW LONG AGO","AT AGE","ON DATE"]} type="full-width" />
        <WidgetDisplay />
        <UnitMenu titles={["Days", "Weeks", "Months", "Years"]}/>
        <Numpad />
      </div>
      <div className="widget-footer">
        <BackAndDone type={"done"}/>
      </div>
    </div>)
  }
}

export default OnsetWidget;