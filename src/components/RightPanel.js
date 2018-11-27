import React, { Component } from 'react';
import { connect } from 'react-redux';
import WidgetOne from 'components/widgets/WidgetOne';
class RightPanel extends Component {
  render(){
    const {rightPanel} = this.props;
    return(
    <div className={`right-panel ${rightPanel?"":"disabled"}`}>
      <WidgetOne />
    </div>)
  }
}

const mapStateToProps = state => {
  return {
    rightPanel: state.PanelReducer.rightPanel
  }
}
export default connect(mapStateToProps)(RightPanel);