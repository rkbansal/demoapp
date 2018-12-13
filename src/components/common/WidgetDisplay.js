import React from 'react';

const WidgetDisplay = (props) => (
  <div className="widget-display mg-tp-38">
    <span className="widget-display-prefix">For:</span>
    <span><input className="widget-display-text dir-rtl" type="text"/></span>
    <span className="widget-display-suffix">Years ago</span>
  </div>
)

export default WidgetDisplay;