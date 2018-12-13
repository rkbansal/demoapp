import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleSelectCell from 'components/common/SingleSelectCell';

class SingleSelectWidget extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: false
    }
  }
  
  handleClick(selected) {
    this.setState({
      selected: selected
    });
  }

  render(){
    // console.log('SingleSelectWidget loaded..................');
    const { items } = this.props.rightPanelData
    return(
    <div>
      <div className="widget-header">
        <div className="header">Number of Meals per Day</div>
        <div className="sub-header">{this.state.selected?"1":"0"} items selected</div>
      </div>
      <div className="widget-body">
        {items.map((element, key) => {
          return <SingleSelectCell key={key} index={key} title={element.title} handleClick={this.handleClick.bind(this)} selected={key===this.state.selected}/>
        })}
      </div>
      <div className="widget-footer">
        Footer
      </div>
    </div>)
  }
}

const mapStateToProps = state => {
  return {
    rightPanelData: state.RightSidePanelReducer.rightPanelData
  }
}

export default connect(mapStateToProps)(SingleSelectWidget);