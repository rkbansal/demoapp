import React from 'react';
import { shallow } from 'enzyme';
import LeftPanel from './LeftPanel';

import { createStore, combineReducers } from 'redux';
import { PanelReducer, MiddleReducer } from '../store/reducers/PanelReducer';

let combinedReducers = combineReducers({PanelReducer, MiddleReducer})
let store = createStore(combinedReducers);

describe('<LeftPanel />',()=>{
  it('renders without crashing', () => {
    const leftPanel = shallow(<LeftPanel />);
    expect(leftPanel.find('textarea').length).toEqual(1);
  });
});
