import {get} from 'helpers/Ajax';

class Auth {
  constructor(){
    this.isAuthenticated = this.isAuthenticated.bind(this);
    //this.
  }

  getAuthToken(){
      return localStorage.getItem('authToken');
  }

  isAuthenticated(){
    if(localStorage.getItem('authToken') !== null)
      return true;
    else {
      return false;
    }
  }

  login(username, password){
    return get(process.env.REACT_APP_API_HOST + ':' + process.env.REACT_APP_API_PORT + '/' + process.env.REACT_APP_API_PATH + 'login?u=' + username + '&p=' + password)
    .then( data => {

      if(!data.loginFailed)
        localStorage.setItem('authToken', data.sessionId);

      return data;
    });
  }

  logout(){
    localStorage.removeItem('authToken');
  }
}

const auth = new Auth();
export default auth;
