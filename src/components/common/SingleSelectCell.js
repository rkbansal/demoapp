import React, {Component} from 'react';
import selectedRadioButton from 'static/img/RadioButton_Selected.png';
import notSelectedRadioButton from 'static/img/RadioButton_NotSelected.png';
// sfui-display-xxxx
class SingleSelectCell extends Component {
  constructor(props){
    super(props);
    this.toggleRadioButton = this.toggleRadioButton.bind(this);
  }

  toggleRadioButton(){
    this.props.handleClick(this.props.index);
  }

  render(){
    return(
    <div className="single-select-cell" onClick={this.toggleRadioButton}>
      <div className="single-select-left">
        {this.props.title?this.props.title:"Eating Inconsistenly"}
      </div>
      <div className="single-select-right">
        <img className="single-select-radio-icon" src={this.props.selected?selectedRadioButton:notSelectedRadioButton}/>
      </div>
    </div>);
  }
}

export default SingleSelectCell;