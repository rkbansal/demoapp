import React from 'react';
import styled from 'styled-components'
const TappableButton = (props) => {
  console.log(props);
  const { img, blank } = props;
  if(blank){
    return <BlankButton />
  }
  else if(img){
    return <Button withImg={img} />;
  } else{
    return <Button>{props.title}</Button>;
  }
}

const Button = styled.button`
  background: ${props => props.withImg?`center`:`rgb(248, 248, 248) center`};
  border: ${props => props.withImg?`rgb(255, 255, 255)`:`rgb(238, 238, 238)`} 1px solid;
  color: rgb(111, 160, 186);
  font-size: 24px;
  margin: 0px 14px 18px 14px;
  width: 75px;
  height: 75px;
  border-radius: ${props => props.withImg?`0px`:`37.5px`};
  background-image: url(${props => props.withImg});
  background-repeat: no-repeat;
  background-size: 40px;
`;

const BlankButton = styled.div`
  background: #fff;
  width: 75px;
  height: 75px;
  margin: 0px 14px 18px 14px;
`;
export default TappableButton;