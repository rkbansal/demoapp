import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHOW_RIGHT_PANEL, SET_CURRENT_WIDGET } from 'store/actions/PanelActions'
import QuestionButton from 'components/common/QuestionButton';

class QuestionCell extends Component {
  constructor(props){
    super(props);
  }

  handleClick({event_name, event_data}) {
    this.props.toggleLeftPanel();
    if(this.props.question.widgets[event_data]){
      this.props.setCurrentWidget(this.props.question.widgets[event_data].type, this.props.question.widgets[event_data]);
    }
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
    leftpanel: state.PanelReducer.leftPanel,
    currentWidget: state.RightSidePanelReducer.currentWidget
  }
}
const mapDispatchToProps = dispatch => {
  return {
    toggleLeftPanel: () => dispatch({type: SHOW_RIGHT_PANEL}),
    setCurrentWidget: (currentWidget, widegtData) => dispatch({type: SET_CURRENT_WIDGET, payload:{widget: currentWidget, rightPanelData: widegtData}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCell);