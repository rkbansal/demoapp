import React, { Component } from 'react';

class QuestionButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    const { button } = this.props
    if (button.title){
      this.setState({title:button.title});
    }else if(button.states){
      const states = button.states;
      for(let state in states){
        if(states[state].active){
          this.setState({title:states[state].title});
          break;
        }
      }
    }
  }

  handleClick(){
    this.props.handleClick();
  }
  
  render(){
    return(
        <button className="question-button" onClick={this.handleClick}>{this.state.title}</button>
    )
  }
}

export default QuestionButton;