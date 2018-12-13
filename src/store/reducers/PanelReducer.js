import {
  SHOW_RIGHT_PANEL,
  HIDE_RIGHT_PANEL,
  EXPAND_LEFT_PANEL,
  COLLAPSE_LEFT_PANEL,
  TOGGLE_LEFT_PANEL,
  SET_MIDDLE_ROUTE,
  SET_CURRENT_WIDGET
 } from '../actions/PanelActions';

const expanded = true;
const collapsed = false;

const initialPanelState = {
  leftPanel: expanded,
  middlePanel: expanded,
  rightPanel: collapsed
}

export function PanelReducer(state = initialPanelState, action){
  switch(action.type){
    case SHOW_RIGHT_PANEL:
      return {...state, leftPanel: collapsed, rightPanel: expanded};
    case HIDE_RIGHT_PANEL:
      return {...state, rightPanel: collapsed};
    case EXPAND_LEFT_PANEL:
      return {...state, leftPanel: expanded, rightPanel: collapsed};
    case COLLAPSE_LEFT_PANEL:
      return {...state, leftPanel: collapsed};
    case TOGGLE_LEFT_PANEL:
      return {...state, leftPanel: !state.leftPanel, rightPanel: collapsed}
    default:
      return state;
  }
}

const initialMiddleState = {
  path: '/'
}

export function MiddleReducer(state = initialMiddleState, action){
  switch(action.type){
    case SET_MIDDLE_ROUTE:
      return {...state, path:action.payload.path};
    default:
      return state;
  }
}

const initialRightSidePanel = {
  currentWidget: null,
  rightPanelData: null
}

export function RightSidePanelReducer(state = initialRightSidePanel, action){
  switch(action.type){
    case SET_CURRENT_WIDGET:
      return {...state, currentWidget: action.payload.widget, rightPanelData: action.payload.rightPanelData};
    default:
      return state;
  }

}