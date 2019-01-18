import React from 'react';

import { Route, Redirect} from 'react-router-dom';

import auth from 'helpers/Auth';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ props => {
       if(props.location.pathname !== '/login'){
         return auth.isAuthenticated() //localStorage.getItem('authToken') !== null
         ?  <Component />
         : ( <Redirect to={{
             pathname: '/login',
             state: { from: props.location }
           }} /> )
         }else{
           console.log('already on login page')
           return null;
         }
       }
     } />
)
