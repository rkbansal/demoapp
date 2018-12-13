import React from 'react';
import styled from 'styled-components'

const UnitTab = (props) => {
  if(!props.active){
    return <Tab onClick={()=>{props.callback(props.index)}}>{props.title}</Tab>
  }else{
    return <Tab active onClick={()=>{props.callback(props.index)}}>{props.title}</Tab>
  }
};

export default UnitTab;

const Tab = styled.span`
  border: none;
  margin: 0px 20px;
  border-bottom: ${props => props.active? `1px rgb(168, 168, 168) solid`:``};
  color: ${props => props.active?`rgb(168, 168, 168)`:`rgb(111, 160, 186)`};
  font-size: 18px;
  cursor: pointer;
`;