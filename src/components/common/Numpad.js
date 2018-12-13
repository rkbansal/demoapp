import React from 'react';
import TappableButton from './TappableButton';
import ClearButton from '../../static/img/keypad_clear_blue.png';
const createNumpadGrid = () => {
  let rows = [[1,2,3],[4,5,6],[7,8,9]];
  let numberGrid = [];
  
  for(let row=0, len=rows.length; row<len; row++) {
    let numberRow = []
      for(let col=0, colLen=rows[row].length ; col<colLen; col++){
        numberRow.push(<TappableButton key={col} title={rows[row][col]} />);
      }
    numberGrid.push(<div key={row} className="numpad-row">{numberRow}</div>);
  }
  numberGrid.push(
  <div key={3} className="numpad-row">
    <TappableButton key={0} blank/>
    <TappableButton key={1} title={0} />
    <TappableButton key={2} img={ClearButton} />
  </div>);
  return numberGrid;
}

const Numpad = () => {
  return (
  <div className="numpad">
    {createNumpadGrid()}
  </div>
  )
};

export default Numpad;