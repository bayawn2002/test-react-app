import React from "react";
import './Action.css';

function Action(props) {
  var actionText = "";

  if(props.action === 'check-in')
    actionText = 'CHECKIN';
  else if(props.action === 'to-do')
    actionText = 'TODO';
  else {
    actionText = props.action.toUpperCase();
  }

  return (
    <div className="section action-section">
      <button className="fa fa-check" onClick={handleButtonClick}>{actionText}</button>
    </div>
  );
}

function handleButtonClick(){

}

export default Action;
