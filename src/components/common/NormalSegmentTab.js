import React from 'react';

const NormalSegmentTab = (props) => (
  <span style={{width: props.width? props.width+"%":""}} className={`normal-segment-tab ${props.active? "active":""} ${props.class}`} onClick={()=>{props.callback(props.index)}}>
    <span className="normal-segment-tab-text">{props.title}</span>
  </span>
)

export default NormalSegmentTab;