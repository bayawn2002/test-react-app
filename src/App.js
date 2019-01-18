import React, { Component } from 'react';
//import logo from './logo.svg';
import 'App.css';

// Roles
import Admin from 'roles/admin/Admin';
import ServiceAdvisor from 'roles/serviceAdvisor/ServiceAdvisor';
import Generic from 'roles/generic/Generic';

const userRole = "admin";

class App extends Component {
  render() {

    switch(userRole){
      case "admin":
        return ( <Admin/> );
      case "serviceadvisor":
        return ( <ServiceAdvisor/> );
      default:
        return ( <Generic/> );
    }
  }
}

export default App;
