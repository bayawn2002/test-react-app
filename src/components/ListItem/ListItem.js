import React from "react";
import './ListItem.css';

import CustomerInfo from './CustomerInfo/CustomerInfo';
import Icon from './Icon/Icon';
import Action from './Action/Action';
import Note from './Note/Note';

function ListItem(props) {
  return (
    <div className="list-item">
      <Icon type={props.type}/>
      <CustomerInfo customer={props.customer} vehicle={props.vehicle}/>
      <Action action={props.action}/>
      <Note note={props.note}/>
    </div>
  );
}

export default ListItem;
