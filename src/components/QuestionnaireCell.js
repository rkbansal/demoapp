import React, {Component} from 'react';
import { connect } from 'react-redux';
class QuestionnaireCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {leftpanel} = this.props;
    let {name, acronym} = this.props.data;
    let isExpanded = leftpanel;
    return (
    <div className="questionnaire-cell">
      <div className={`questionnaire-short-form ${isExpanded?"disabled":""}`}>{acronym}</div>
      <div className={`questionnaire-full-form ${!isExpanded?"disabled":""}`}>{name}</div>
    </div>);
  }
}

const mapStateToProps = state => {
  return {
    leftpanel: state.PanelReducer.leftPanel
  };
};

export default connect(mapStateToProps)(QuestionnaireCell);