import { PanelReducer } from './PanelReducer';

describe('Panel Reducer',()=>{
  it('has a default state',()=>{
    expect(PanelReducer(undefined, {type:'unexpected'})).toEqual({
      leftPanel: true,
      middlePanel: true,
      rightPanel: false
    });
  });

  it('Show right panel',()=>{
    const initialPanelState = {
      leftPanel: true,
      middlePanel: true,
      rightPanel: false
    }

    const expectedOutput = {
      leftPanel: false,
      middlePanel: true,
      rightPanel: true
    }
    expect(PanelReducer(initialPanelState, {type:'SHOW_RIGHT_PANEL'})).toEqual(expectedOutput);
  });
});