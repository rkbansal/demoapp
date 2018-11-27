import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { PanelReducer, MiddleReducer } from './store/reducers/PanelReducer';

let combinedReducers = combineReducers({PanelReducer, MiddleReducer})
let store = createStore(combinedReducers);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App store={store}/></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
