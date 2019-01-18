import React,  { Component } from 'react';
import './list.css';
import ListItem from "./listItem/ListItem";

/*function List(props){
    return (
      <div className="list">
        {props.listItems.map(i => <ListItem key={i.id} action={i.action} type={i.type} customer={i.customer} vehicle={i.vehicle} />)}

        <button>Load More</button>
      </div>
    );
}*/

class List extends Component{
  //constructor(props){
  //   super(props);
  //}

  //loadMore(){
  //    this.props.loadMore();
  //}

  render(){
    return (
      <div className="list">
        {this.props.listItems.map(i => <ListItem key={i.id} action={i.action} type={i.type} customer={i.customer} vehicle={i.vehicle} />)}

        <button onClick={ () => this.props.loadMore(this.props.page+1) }>Load More</button>
      </div>
    );
  }
}

export default List;
