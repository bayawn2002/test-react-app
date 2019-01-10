import React from 'react';
import './list.css';
import ListItem from "./ListItem/ListItem";

function List(props){
    return (
      <div className="list">
        {props.listItems.map(i => <ListItem key={i.id} action={i.action} type={i.type} customer={i.customer} vehicle={i.vehicle} />)}
      </div>
    );
}

export default List;
