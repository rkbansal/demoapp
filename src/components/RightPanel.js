import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import widgetCollection from 'utils/helpers/widgetCollection'
class RightPanel extends Component {
  render(){
    const {rightPanel, rightSidePanelReducer} = this.props;
    const currentWidget = widgetCollection[rightSidePanelReducer.currentWidget]
    const WidgetComponent = Loadable({
      loader: () => import(`components/widgets/${currentWidget}`),
      loading() {return <div>Loading...</div>}
    });
    return(
    <div className={`right-panel ${rightPanel?"":"disabled"}`}>
      <WidgetComponent />
    </div>)
  }
}

const mapStateToProps = state => {
  return {
    rightPanel: state.PanelReducer.rightPanel,
    rightSidePanelReducer: state.RightSidePanelReducer
  }
}
export default connect(mapStateToProps)(RightPanel);