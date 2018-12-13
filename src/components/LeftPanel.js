import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import QuestionnaireCell from './QuestionnaireCell';
import {TOGGLE_LEFT_PANEL} from '../store/actions/PanelActions';

class LeftPanel extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {toggleLeftPanel, leftpanel, path} = this.props;
    return(
    <div className={`leftPanel ${leftpanel? "leftpanel-expand":"leftpanel-collapse" }`}>
      <div className="leftpanel-heading"><span className={`leftpanel-heading-title ${leftpanel?"":"disabled"}`}>QUESTIONNAIRE STEPS</span><span onClick={toggleLeftPanel}><FontAwesomeIcon icon={faChevronLeft} size="lg" rotation={leftpanel?null:180} color="#70a1ba"/></span></div>
      {this.props.cards.map((card, i)=>{
        return <Link to={`${path}/${card.acronym.replace(/\//g,'_')}`} key={i}><QuestionnaireCell data={card} /></Link>
      })}
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    leftpanel: state.PanelReducer.leftPanel
  }
}
const mapDispatchToProps = dispatch => {
  return {
    toggleLeftPanel: () => dispatch({type: TOGGLE_LEFT_PANEL})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);