import React, { Component } from 'react';

import { Route, Redirect} from 'react-router-dom';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //loggedIn : false
    };
  }

  render(){
    console.log(this.props)
    const PageComponent = this.props.component;
    return (
       <Route render={ props => {
         if(props.location.pathname !== '/login'){
           return localStorage.getItem('token') === 'test' //fakeAuth.isAuthenticated === true
           ?  <PageComponent />
           : ( <Redirect to={{
               pathname: '/login',
               state: { from: props.location }
             }} /> )
           }else{
             return null;
           }
         }
       } />
    );
  }
}

export default Auth;
