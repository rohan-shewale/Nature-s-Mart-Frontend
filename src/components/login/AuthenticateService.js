import { Component } from "react";

class AuthenticateService extends Component {
  userLogin(username) {
    const type = "users";
    sessionStorage.setItem("authenticatedUser", username);
    sessionStorage.setItem("userType", type);


    console.log(type)
  }

  AdminLogin(username) {
    const type = "admin";
    sessionStorage.setItem("authenticatedUser", username);
    sessionStorage.setItem("userType", type);
    console.log(type)
  }
  FarmerLogin(username) {
    const type = "farmer";
    sessionStorage.setItem("authenticatedUser", username);
    sessionStorage.setItem("userType", type);
    console.log(type)
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
    sessionStorage.removeItem("userType");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");

    if (user === null) {
      return false;
    } else {
      return true;
    }
  }

  getUserType() {
    return sessionStorage.getItem("userType");
  }
}

export default new AuthenticateService();
