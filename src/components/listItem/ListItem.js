import React from "react";
import 'components/listItem/ListItem.css';

import CustomerInfo from 'components/listItem/customerInfo/CustomerInfo';
import Icon from 'components/listItem/icon/Icon';
import Action from 'components/listItem/action/Action';
import Note from 'components/listItem/note/Note';

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
