import React from 'react';
import AuthenticateService from '../login/AuthenticateService';

class LoginLogoutButton extends React.Component {
  handle = () => {
    if (!AuthenticateService.isUserLoggedIn()) {
      this.props.onLogin();
    } else {
      this.props.onLogout();
    }
  }

  render() {
    return (
      <button className='btn text-dark' onClick={this.handle} style={{ fontSize: "15pt" }}>
        {AuthenticateService.isUserLoggedIn() ? 'Sign Out' : 'Sign In'}
      </button>
    );
  }
}

export default LoginLogoutButton;