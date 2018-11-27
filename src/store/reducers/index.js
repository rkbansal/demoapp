import { combineReducers } from 'redux';
import { PanelReducer, MiddleReducer, RightSidePanelReducer } from 'store/reducers/PanelReducer';

export default combineReducers({
  PanelReducer,
  MiddleReducer,
  RightSidePanelReducer
});