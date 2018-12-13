import React, { Component } from 'react';
import Styled from 'styled-components';
import UnitTab from 'components/common/UnitTab';

class UnitMenu extends Component {

  constructor(props){
    super(props);
    this.state = {
      selected: this.props.selected || 0
    }
    this.callback = this.callback.bind(this);
  }

  callback = (selected) => {
    this.setState({
      selected
    });
  }
  
  render() {
    return(
      <Menu>
        {this.props.titles.map((title, key)=>{
          return <UnitTab
              key={key}
              index={key}
              title={title}
              active={this.state.selected === key}
              callback={this.callback}
            />
        })}
      </Menu>);
  }
}

export default UnitMenu;

const Menu = Styled.div`
  margin-top: 40px;
  border-bottom: 1px solid rgb(238, 238, 238);
`;