import React, {Component} from 'react';
import { connect } from 'react-redux';
import { EXPAND_LEFT_PANEL } from 'store/actions/PanelActions';

class BackAndDone extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    <div>
      <span>{"<"}</span>
      <span>Back</span>
    </div>)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    expandLeftPanel: () => dispatch({type: EXPAND_LEFT_PANEL})
  }
}

export default connect(null, mapDispatchToProps)(BackAndDone);