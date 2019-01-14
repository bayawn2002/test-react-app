import React, { Component } from "react";

import { BrowserRouter as Router, Route/*, Redirect, withRouter*/} from 'react-router-dom';

import { PrivateRoute }  from '../../helpers/PrivateRoute';

import Header from '../../components/UI/common/Header';

import Login from '../../components/UI/pages/Login/Login';
import Home from '../../components/UI/pages/Home/Home';
import Test from '../../components/UI/pages/Test/Test';

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
