import React from 'react';
import AuthenticateService from '../login/AuthenticateService';
import LoginLogoutButton from '../../components/signout/SignOut';

class App extends React.Component {
  handleLogin = () => {
    window.location="/login"
  }

  handleLogout = () => {
    AuthenticateService.logout();
  }

  render() {
    return (
      <div>
        <LoginLogoutButton onLogin={this.handleLogin} onLogout={this.handleLogout} />
      </div>
    );
  }
}

export default App;
