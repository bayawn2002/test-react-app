import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    localStorage.setItem('token', 'test');
    this.setState(() => ({
      redirectToReferrer: true
    }))
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <p>You must log in to view the page</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }

  /*render() {
    return (
      <div className="Login">
        <form onSubmit={this.onSubmit}>
          <input type="submit" value="Submit" />//
        </form>
      </div>
    );
  }*/
}

export default Login;
