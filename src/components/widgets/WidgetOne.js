import React, { Component } from 'react';
import SingleSelectCell from 'components/common/SingleSelectCell';
class WidgetOne extends Component {
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
    const list = ["A", "B", "C", "D", "E", "F"];
    return(
    <div>
      <div className="widget-header">
        <div className="header">Number of Meals per Day</div>
        <div className="sub-header">{this.state.selected!==null?"1":"0"} items selected</div>
      </div>
      <div className="widget-body">
        {list.map((element, key) => {
          return <SingleSelectCell key={key} index={key} handleClick={this.handleClick.bind(this)} selected={key===this.state.selected}/>
        })}
      </div>
      <div className="widget-footer">
        Footer
      </div>
    </div>)
  }
}

export default WidgetOne;