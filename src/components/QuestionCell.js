import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHOW_RIGHT_PANEL } from 'store/actions/PanelActions'
import QuestionButton from 'components/common/QuestionButton';

class QuestionCell extends Component {
  constructor(props){
    super(props);
  }

  handleClick() {
    console.log(this.props);
    this.props.toggleLeftPanel();
  }
  
  render(){
    const {title, buttons} = this.props.question
    const {prefix} = this.props
    return(
      <div className="question-cell">
        <span className="question-cell-text">{`${prefix}. ${title} ? .......`}</span>
        <span>
          {buttons?buttons.map((button, key)=>{
            return <QuestionButton key={key} button={button} handleClick={this.handleClick.bind(this)}/>
          }):null}
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    leftpanel: state.PanelReducer.leftPanel
  }
}
const mapDispatchToProps = dispatch => {
  return {
    toggleLeftPanel: () => dispatch({type: SHOW_RIGHT_PANEL})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCell);