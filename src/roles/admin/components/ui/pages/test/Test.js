import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import List from 'components/List';

import {get} from 'helpers/Ajax';

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
        searchText : '',
        listItems : [],
        limit : 5,
        page : 1
    };

    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.loadSearchResults = this.loadSearchResults.bind(this);
  }

  onSearchInputChange(e){
    if(e.target.value.length > 3){
      const { name, value } = e.target;
      this.setState(
        { [name]: value, page : 1 },
        function(){
          this.loadSearchResults(this.state.page)
        }
      );
    }
  }

  loadSearchResults(page){
    var q = this.state.searchText,
    onlyToday = false,
    onlyCustomers = true,
    start = (page-1) * this.state.limit,
    limit = this.state.limit;

    return get(process.env.REACT_APP_API_HOST + ':' + process.env.REACT_APP_API_PORT + '/' + process.env.REACT_APP_API_PATH + 'search?limit=' + limit +'&start=' + start + '&q=' + q + '&onlyToday=' + onlyToday + '&onlyCustomers=' + onlyCustomers)
    .then( data => {

      var list = [];
      if(data.customers && data.customers.length > 0){
        list = data.customers.map(i => {
          // rebuild the list data so it can be passed to react components easily
          return {
            id : i.id,
            type : i.type,
            action : '',
            data : {},
            customer : { name : i.firstName + ' ' + i.lastName},
            vehicle : { year : i.vehicleYear, make: i.vehicleMake, model: i.vehicleModel, vin : i.vin},
            note : {}
          }
        });
      }

      // keep appending to list
      if(start > 0)
        list = this.state.listItems.concat(list);

      this.setState({ listItems : list, page : page});
    });
  }

  render() {
    return (
      <div className="Search">
        <header className="App-header">
            Test page
        </header>

        <input type="text" name="searchText" onChange={this.onSearchInputChange} />

        <List listItems={this.state.listItems} page={this.state.page} loadMore={this.loadSearchResults} />
      </div>
    );
  }
}

export default Test;
