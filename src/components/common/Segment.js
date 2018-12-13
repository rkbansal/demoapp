import React, {Component} from 'react';
import NormalSegmentTab from './NormalSegmentTab';

const classDict = {
  "tab_selected": "tab_selected",
  "tab_unselected_center": "tab_unselected_center",
  "tab_unselected_left": "tab_unselected_left",
  "tab_unselected_right": "tab_unselected_right",
  "tab_unselected": "tab_unselected"
}

class Segment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      width: 0
    }
    this.getClassName = this.getClassName.bind(this);
  }

  callback = (selected) => {
    this.setState({
      active: selected
    });
  }
  
  componentWillMount() {
    if(this.props.type === "full-width"){
      this.setState({width: 80/this.props.segments.length});
    }
  }

  getClassName(index) {
    if(this.props.segments.length === 1){
      return classDict["tab_unselected_center"];
    }
    else if(this.state.active == index){
      return classDict["tab_selected"];
    }
    else if(index === 0){
      return classDict["tab_unselected_left"];
    }
    else if(this.props.segments.length-1 === index){
      return classDict["tab_unselected_right"];
    }
    else {
      return classDict["tab_unselected_center"];
    }
  }
  
  render() {
    console.log(this.state.width);
    return(
    <div className={`segment ${this.props.type}`}>
      {this.props.segments.map((segment, key) => {
        return <NormalSegmentTab
                key={key}
                title={segment}
                index={key}
                active={key===this.state.active}
                callback={this.callback}
                width={this.state.width}
                class={this.getClassName(key)}
                />
      })}
    </div>)
  }
}

export default Segment;