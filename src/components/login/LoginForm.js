/* eslint-disable no-lone-blocks */
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import AuthenticateService from "./AuthenticateService";
import axios from "axios";

function LoginForm() {
  {
    const [login, setLogin] = useState({ user_name: "", currentpassword: "" });
    const [userData, setUserData] = useState();
    const [loginErr, setLoginErr] = useState("");

    const [passwordType, setPasswordType] = useState("password");

    const showPassword = () => {
      if (passwordType === "password") {
        setPasswordType("text");
        return;
      }
      setPasswordType("password");
    };

    const handleChange = (e) => {
      e.preventDefault();
      var name = e.target.name;
      var value = e.target.value;
      setLogin({ ...login, [name]: value });
    };

    const onSubmit = (e) => {
      e.preventDefault();

      axios
        .post(`http://localhost:7575/login`, {
          password: login.currentpassword,
          username: login.user_name,
        })
        .then((response) => {
          setUserData(response.data);

          if (
            response.data.password === login.currentpassword &&
            response.data.username === login.user_name
          ) {
            if (userData.user === "ADMIN") {
              AuthenticateService.AdminLogin(userData.username);
            }
            if (userData.user === "NORMAL_USER") {
              AuthenticateService.userLogin(userData.username);
            }
            if (userData === "FARMER") {
              AuthenticateService.FarmerLogin(userData.username);
            }

            window.location = "/farmerProfile";
          } else {
            setLoginErr("Invalid UserName or Password");
          }
        })

        .catch((error) => {
          console.log(error.response);
        });
    };

    return (
      <div>
        <section>
          <div
            className="container-fluid h-custom"
            style={{ paddingTop: "40px" }}
          >
            <div className="row d-flex justify-content-center  h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://farms.io/uploads/solutions_page/ser_1655898822.svg"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div
                className="col-md-8 col-xl-4"
                style={{ fontSize: "12pt", fontWeight: "bold" }}
              >
                <form>
                  <span className="text-danger">{loginErr}</span>
                  <div
                    className="form-outline mb-4"
                    id="username_box_login"
                    style={{ textAlign: "left" }}
                  >
                    <h6
                      className="form-label text-body"
                      style={{ fontSize: "13pt" }}
                    >
                      Username
                    </h6>
                    <input
                      type="text"
                      id="username"
                      name="user_name"
                      className="form-control form-control-lg"
                      placeholder="Enter username"
                      value={login.user_name}
                      onChange={handleChange}
                      autoFocus
                    />
                  </div>

                  <div
                    className="form-outline mb-3"
                    id="passwword_box_login"
                    style={{ textAlign: "left" }}
                  >
                    <h6
                      className="form-label text-body"
                      style={{ fontSize: "13pt" }}
                    >
                      Password
                    </h6>
                    <input
                      type={passwordType}
                      id="passwords"
                      name="currentpassword"
                      value={login.password}
                      className="form-control"
                      placeholder="Enter password"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        value=""
                        onClick={showPassword}
                      />
                      <h6 className="form-check-label">show password</h6>
                    </div>
                    <a href="/forgotpassword" className="text-body">
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="button"
                      className="btn btn-success btn-lg"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                      onClick={onSubmit}
                    >
                      Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <a href="/register" className="link-danger">
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default LoginForm;
