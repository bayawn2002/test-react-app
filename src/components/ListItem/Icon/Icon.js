import React from "react";
import './Icon.css';

function Icon(props) {
  var icon = '',
  iconText = '';

  if(props.type === 'target'){
    icon = 'fa fa-edit';
    iconText = props.type.toUpperCase();
  }else if(props.type === 'visit'){
    icon = 'fa fa-calendar';
    iconText = '9:00 AM';
  }

  return (
    <div className="section icon-section">
      <span className={icon}>{iconText}</span>
    </div>
  );
}

export default Icon;
