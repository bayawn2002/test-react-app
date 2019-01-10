import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

// Roles
import Admin from './Roles/Admin/Admin';
import ServiceAdvisor from './Roles/ServiceAdvisor/ServiceAdvisor';
import Generic from './Roles/Generic/Generic';

const userRole = "serviceadvisor";

class App extends Component {
  render() {

    switch(userRole){
      case "admin":
        return ( <Admin/> );
      case "serviceadvisor":
        return ( <ServiceAdvisor/> );
      default:
        return ( <Generic/> );
    };
  }
}

export default App;
