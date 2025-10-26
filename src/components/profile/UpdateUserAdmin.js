import { useState, useEffect } from "react";
import axios from "axios";
import Image from "../../assets/images/user-icon.jpg";
import "../../assets/css/farmerprofile.css";

import { Link, useParams } from "react-router-dom";

function UpdateUserAdmin() {
  const [personalInfo, setPersonalInfo] = useState([]);
  //   const [productInfo, setProductInfo] = useState([]);

  const [nameflag, setNameflag] = useState(false);
  const [aadharNoflag, setAadharNoflag] = useState(false);
  const [emailflag, setEmailflag] = useState(false);
  const [streetAddressflag, setStreetAddressflag] = useState(false);
  const [passwordflag, setPasswordflag] = useState(false);
  const [mobileNoflag, setMobileNoflag] = useState(false);
  const [usernameflag, setUserNameflag] = useState(false);
  const [dateOfBirthflag, setDateOfBirthflag] = useState(false);
  const [districtflag, setDistrictflag] = useState(false);
  const [genderflag, setGenderflag] = useState(false);
  const [stateflag, setStateflag] = useState(false);
  const [pincodeflag, setPincodeflag] = useState(false);
  const [isSellerflag, setIsSellerflag] = useState(false);

  function handleFlag(e) {
    if (e.target.name === "name") {
      setNameflag(true);
    }

    if (e.target.name === "username") {
      setUserNameflag(true);
    }

    if (e.target.name === "email") {
      setEmailflag(true);
    }
    if (e.target.name === "streetAddress") {
      setStreetAddressflag(true);
    }
    if (e.target.name === "mobileNo") {
      setMobileNoflag(true);
    }

    // if (e.target.name === "password") {
    //   setPasswordflag(true);
    // }

    if (e.target.name === "dateOfBirth") {
      setDateOfBirthflag(true);
    }

    if (e.target.name === "aadharNo") {
      setAadharNoflag(true);
    }

    if (e.target.name === "gender") {
      setGenderflag(true);
    }

    if (e.target.name === "district") {
      setDistrictflag(true);
    }

    if (e.target.name === "state") {
      setStateflag(true);
    }

    if (e.target.name === "pincode") {
      setPincodeflag(true);
    }
  }

  function handleCancel() {
    setNameflag(false);
    setUserNameflag(false);
    setEmailflag(false);
    setStreetAddressflag(false);
    setMobileNoflag(false);
    setAadharNoflag(false);
    setPasswordflag(false);
    setGenderflag(false);
    setDistrictflag(false);
    setStateflag(false);
    setPincodeflag(false);
    setDateOfBirthflag(false);
  }

  const [changeInfo, setChangeInfo] = useState({
    username: personalInfo.username,
    email: personalInfo.email,
    mobileNo: personalInfo.mobileNo,
    name: personalInfo.name,
    streetAddress: personalInfo.streetAddress,
    password: personalInfo.password,
    dateOfBirth: personalInfo.dateOfBirth,
    aadharNo: personalInfo.aadharNo,
    state: personalInfo.state,
    district: personalInfo.district,
    pincode: personalInfo.pincode,
  });

  sessionStorage.setItem("userId", personalInfo.id);

  console.log(changeInfo);

  function changeProfile() {
    const url = "http://localhost:7575/users/change-profile";
    axios
      .put(url, {
        name: changeInfo.name,
        username: changeInfo.username,
        email: changeInfo.email,
        mobileNo: changeInfo.mobileNo,
        dateOfBirth: changeInfo.dateOfBirth,
        streetAddress: changeInfo.streetAddress,
        password: changeInfo.password,
        aadharNo: changeInfo.aadharNo,
        pincode: changeInfo.pincode,
        state: changeInfo.state,
        district: changeInfo.district,
        gender: changeInfo.gender,
      })
      .then((response) => {
        handleCancel();

        window.location = "/farmerProfile";
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setChangeInfo({ ...personalInfo, [name]: value });
  };
  console.log(changeInfo);
  const userId = parseInt(useParams().userId);
  useEffect(() => {


    ;
    console.log(userId);
    axios
      .get(`http://localhost:7575/users/byid?userId=${userId}`, {})
      .then((response) => {
        console.log(response.data.seller);
        if (JSON.stringify(response.data.seller) === "true") {
          console.log(response.data.name + " is seller");
          setIsSellerflag(true);
        }
        setPersonalInfo(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <br />
        <div class="row">
          {/* <div class="col-12">
            <div class="card">
              <div class="card-body-main" id="farmerdp">
                <div class="d-flex flex-column align-items-center text-center">
                  <img src={Image} alt="user-icon" style={{height:"180px"}}></img>
                  <div class="mt-3">
                    <h4 className="text text-dark">
                      {personalInfo.firstname}
                    </h4>
                    <p class=" text-dark mb-1">{personalInfo.mobileNo}</p>
                    <p class=" text-dark font-size-sm">{personalInfo.email}</p>
                    
                    {(isSellerflag)&&(<Link to={"/addgroceryproduct"}><button class="btn btn-primary">Add Product</button></Link>)}

                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div class="col-12">
            <div class="card-profile">
              <div class="card-body-main" id="farmerdp">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    src={Image}
                    alt="user-icon"
                    style={{ height: "180px" }}
                  ></img>
                  <div class="mt-3">
                    <h4 className="text text-dark">{personalInfo.name}</h4>
                    <p class=" text-dark mb-1">{personalInfo.mobileNo}</p>
                    <p class=" text-dark font-size-sm">{personalInfo.email}</p>

                    {isSellerflag && (
                      <Link to={"/addproduct"}>
                        <button class="btn btn-dark">Add Product</button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12" style={{ marginTop: "10px" }}>
            <div class="card-body d-flex justify-content-center col-lg-12">
              <div class="card-text col-12">
                <div class="col-md-12">
                  <div class="card mb-3">
                    <div class="card-body-main">
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0 mt-3">Full Name :</h6>
                        </div>
                        <div class="col-sm-3 mt-3 text-secondary">
                          {personalInfo.name}
                        </div>

                        <div class="col-sm-4 mt-2 text-secondary">
                          {!nameflag && (
                            <button
                              type="button"
                              name="name"
                              class="btn btn-link"
                              onClick={handleFlag}
                            >
                              change
                            </button>
                          )}
                          {nameflag && (
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              placeholder="Enter New Name"
                              value={changeInfo.name}
                              onChange={handleChange}
                            />
                          )}
                        </div>

                        <button
                          type="button"
                          class="btn btn-success"
                          id="saveButton"
                          onClick={changeProfile}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          id="cancleButton"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0 mt-3">User Name:</h6>
                        </div>
                        <div class="col-sm-3 mt-3 text-secondary">
                          {personalInfo.username}
                        </div>

                        {/* <div class="col-sm-6 mt-2 text-secondary">
                                                    {!usernameflag && <button type="button" name="username" class="btn btn-link" onClick={handleFlag}>change</button>}
                                                    {usernameflag && <input type="text" class="form-control" name="username" placeholder="Enter New Username"
                                                        value={changeInfo.username}
                                                        onChange={handleChange} />}
                                                </div> */}
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0 mt-3">Mobile Number :</h6>
                        </div>
                        <div class="col-sm-3 mt-3 text-secondary">
                          {personalInfo.mobileNo}
                        </div>

                        <div class="col-sm-4 mt-2 text-secondary">
                          {!mobileNoflag && (
                            <button
                              type="button"
                              name="mobileNo"
                              class="btn btn-link"
                              onClick={handleFlag}
                            >
                              change
                            </button>
                          )}
                          {mobileNoflag && (
                            <input
                              type="text"
                              name="mobileNo"
                              class="form-control"
                              placeholder="Enter New mobile Number"
                              value={changeInfo.mobileNo}
                              onChange={handleChange}
                            />
                          )}
                        </div>

                        <button
                          type="button"
                          class="btn btn-success"
                          id="saveButton"
                          onClick={changeProfile}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          id="cancleButton"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      </div>

                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0 mt-3">Date of birth :</h6>
                        </div>
                        <div class="col-sm-3 mt-3 text-secondary">
                          {personalInfo.dateOfBirth}
                        </div>

                        <div class="col-sm-4 mt-2 text-secondary">
                          {!dateOfBirthflag && (
                            <button
                              type="button"
                              name="dateOfBirth"
                              class="btn btn-link"
                              onClick={handleFlag}
                            >
                              change
                            </button>
                          )}
                          {dateOfBirthflag && (
                            <input
                              type="date"
                              name="dateOfBirth"
                              class="form-control"
                              value={changeInfo.dateOfBirth}
                              onChange={handleChange}
                            />
                          )}
                        </div>

                        <button
                          type="button"
                          class="btn btn-success"
                          id="saveButton"
                          onClick={changeProfile}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          id="cancleButton"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      </div>

                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0 mt-3">Email :</h6>
                        </div>
                        <div class="col-sm-3 mt-3 text-secondary">
                          {personalInfo.email}
                        </div>

                        <div class="col-sm-4 mt-2 text-secondary">
                          {!emailflag && (
                            <button
                              type="button"
                              name="email"
                              class="btn btn-link"
                              onClick={handleFlag}
                            >
                              change
                            </button>
                          )}
                          {emailflag && (
                            <input
                              type="text"
                              class="form-control"
                              name="email"
                              placeholder="Enter New Email"
                              value={changeInfo.email}
                              onChange={handleChange}
                            />
                          )}
                        </div>

                        <button
                          type="button"
                          class="btn btn-success"
                          id="saveButton"
                          onClick={changeProfile}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          id="cancleButton"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0 mt-3">Address :</h6>
                        </div>
                        <div class="col-sm-3 mt-3 text-secondary">
                          {personalInfo.streetAddress}
                        </div>

                        <div class="col-sm-4 mt-2 text-secondary">
                          {!streetAddressflag && (
                            <button
                              type="button"
                              name="streetAddress"
                              class="btn btn-link"
                              onClick={handleFlag}
                            >
                              change
                            </button>
                          )}
                          {streetAddressflag && (
                            <input
                              type="text"
                              class="form-control"
                              name="streetAddress"
                              placeholder="Enter New Address"
                              value={changeInfo.streetAddress}
                              onChange={handleChange}
                            />
                          )}
                        </div>

                        <button
                          type="button"
                          class="btn btn-success"
                          id="saveButton"
                          onClick={changeProfile}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          id="cancleButton"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0 mt-3">Aadhar No :</h6>
                        </div>
                        <div class="col-sm-3 mt-3 text-secondary">
                          {personalInfo.aadharNo}
                        </div>

                        <div class="col-sm-4 mt-2 text-secondary">
                          {!aadharNoflag && (
                            <button
                              type="button"
                              name="aadharNo"
                              class="btn btn-link"
                              onClick={handleFlag}
                            >
                              change
                            </button>
                          )}
                          {aadharNoflag && (
                            <input
                              type="text"
                              class="form-control"
                              name="aadharNo"
                              placeholder="Enter New Address"
                              value={changeInfo.aadharNo}
                              onChange={handleChange}
                            />
                          )}
                        </div>

                        <button
                          type="button"
                          class="btn btn-success"
                          id="saveButton"
                          onClick={changeProfile}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          id="cancleButton"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      </div>

                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0 mt-3">Gender:</h6>
                        </div>
                        <div class="col-sm-3 mt-3 text-secondary">
                          {personalInfo.gender}
                        </div>

                        <div class="col-sm-4 mt-2 text-secondary">
                          {!genderflag && (
                            <button
                              type="button"
                              name="gender"
                              class="btn btn-link"
                              onClick={handleFlag}
                            >
                              change
                            </button>
                          )}
                          {genderflag && (
                            <input
                              type="text"
                              class="form-control"
                              name="gender"
                              placeholder="Enter Gender"
                              value={changeInfo.gender}
                              onChange={handleChange}
                            />
                          )}
                        </div>

                        <button
                          type="button"
                          class="btn btn-success"
                          id="saveButton"
                          onClick={changeProfile}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          id="cancleButton"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      </div>

                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0 mt-3">State:</h6>
                        </div>
                        <div class="col-sm-3 mt-3 text-secondary">
                          {personalInfo.state}
                        </div>

                        <div class="col-sm-4 mt-2 text-secondary">
                          {!stateflag && (
                            <button
                              type="button"
                              name="state"
                              class="btn btn-link"
                              onClick={handleFlag}
                            >
                              change
                            </button>
                          )}
                          {stateflag && (
                            <input
                              type="text"
                              class="form-control"
                              name="state"
                              placeholder="Enter state"
                              value={changeInfo.stateflag}
                              onChange={handleChange}
                            />
                          )}
                        </div>

                        <button
                          type="button"
                          class="btn btn-success"
                          id="saveButton"
                          onClick={changeProfile}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          id="cancleButton"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      </div>

                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0 mt-3">District:</h6>
                        </div>
                        <div class="col-sm-3 mt-3 text-secondary">
                          {personalInfo.district}
                        </div>

                        <div class="col-sm-4 mt-2 text-secondary">
                          {!districtflag && (
                            <button
                              type="button"
                              name="district"
                              class="btn btn-link"
                              onClick={handleFlag}
                            >
                              change
                            </button>
                          )}
                          {districtflag && (
                            <input
                              type="text"
                              class="form-control"
                              name="district"
                              placeholder="Enter District"
                              value={changeInfo.district}
                              onChange={handleChange}
                            />
                          )}
                        </div>

                        <button
                          type="button"
                          class="btn btn-success"
                          id="saveButton"
                          onClick={changeProfile}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          id="cancleButton"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      </div>

                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0 mt-3">pincode:</h6>
                        </div>
                        <div class="col-sm-3 mt-3 text-secondary">
                          {personalInfo.pincode}
                        </div>

                        <div class="col-sm-4 mt-2 text-secondary">
                          {!pincodeflag && (
                            <button
                              type="button"
                              name="pincode"
                              class="btn btn-link"
                              onClick={handleFlag}
                            >
                              change
                            </button>
                          )}
                          {pincodeflag && (
                            <input
                              type="text"
                              class="form-control"
                              name="pincode"
                              placeholder="Enter picode"
                              value={changeInfo.pincode}
                              onChange={handleChange}
                            />
                          )}
                        </div>

                        <button
                          type="button"
                          class="btn btn-success"
                          id="saveButton"
                          onClick={changeProfile}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          id="cancleButton"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      </div>

                      <hr />
                      {/* <div class="row">
                        <div class="col-sm-12">
                          {!passwordflag && (
                            <button
                              type="button"
                              name="password"
                              class="btn btn-link"
                              onClick={handleFlag}
                            >
                              change password
                            </button>
                          )}
                          {passwordflag && (
                            <input
                              type="text"
                              name="password"
                              class="form-control"
                              placeholder="Enter New password"
                              value={changeInfo.password}
                              onChange={handleChange}
                            />
                          )}
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {(isSellerflag)&&(
        <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
            <table>
                <tr>
                    <th>product id</th>
                    <th>title</th>
                    <th>quantity</th>
                    <th>price</th>
                    <th>description</th>
                </tr>
                {/* {getAllProducts} */}
        {/*  
            </table>
        </div>
        <div className="col-md-2"></div>
        </div>
        )} */}
      </div>
    </div>
  );
}

export default UpdateUserAdmin;
