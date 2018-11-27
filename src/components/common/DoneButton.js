import React, { Component } from 'react';

class DoneButton extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <button className="done-button">{this.props.title}</button>
    )
  }
}

export default DoneButton;