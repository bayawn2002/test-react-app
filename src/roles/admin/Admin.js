import React, { Component } from "react";

import { BrowserRouter as Router, Route/*, Redirect, withRouter*/} from 'react-router-dom';

import { PrivateRoute }  from 'helpers/PrivateRoute';

import Header from 'roles/admin/components/ui/common/Header';

import Login from 'roles/admin/components/ui/pages/login/Login';
import Home from 'roles/admin/components/ui/pages/home/Home';
import Test from 'roles/admin/components/ui/pages/test/Test';

//import auth from 'helpers/Auth';

class Admin extends Component {

  render(){
    return (
      <div className="App">
        Admin
        <Router>
           <div>
              <Header/>

              <PrivateRoute exact path='/test' component={Test} />
              <Route path="/home" component={Home} />
              <Route path="/login" component={Login} />
           </div>
         </Router>
      </div>
    );
  }
}

export default Admin;
