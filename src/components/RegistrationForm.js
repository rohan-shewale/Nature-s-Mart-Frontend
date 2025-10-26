/* eslint-disable no-lone-blocks */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/registration.css'

function RegistrationForm() {

  {

    const [shopNameFlag, setShopNameFlag] = useState(false);

    const [registration, setRegistration] = useState({
      name: "",
      username: "",
      email: "",
      mobileNo: "",
      aadharNo: "",
      streetAddress: "",
      password: "",
      pincode: "",
      gender: "",
      state: "",
      district: "",
      dateOfBirth: "",
      isSeller: "",
      shopName: "",
      user: "",
    });


    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setRegistration({ ...registration, [name]: value });

      // if(registration.isSeller === "true"){
      //   setShopNameFlag(true);
      // }else{
      //   setShopNameFlag(false);
      // }

    };

    const [isvalid, setIsvalid] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();

      if (isvalid) {
        axios
          .post("http://localhost:7575/users", {

            email: registration.email,
            name: registration.name,
            username: registration.username,
            password: registration.password,
            mobileNo: registration.mobileNo,
            aadharNo: registration.aadharNo,
            streetAddress: registration.streetAddress,
            pincode: registration.pincode,
            gender: registration.gender,
            state: registration.state,
            district: registration.district,
            dateOfBirth: registration.dateOfBirth,
            isSeller: registration.isSeller,
            shopName: registration.shopName,
            user: registration.user

          })
          .then((response) => {
            console.log(response.data);

            setRegistration({
              name: "",
              username: "",
              email: "",
              mobileNo: "",
              aadharNo: "",
              streetAddress: "",
              password: "",
              pincode: "",
              gender: "",
              state: "",
              district: "",
              dateOfBirth: "",
              isSeller: "",
              shopName: ""
            })

            alert("Registration successfully")

            window.location = "/login";


          })
          .catch((error) => {
            console.log(error.response);
          });
      }
      else {
        window.location = "/";
        alert("Registration failed")
      }

    }

    const [nameErr, setNameErr] = useState("")
    function nameValidation() {
      if (registration.name === "") {
        setNameErr("* Invalid name");
        setIsvalid(false);
      }
      else {
        setNameErr("");
        setIsvalid(true);
      }
    }


    const [emailErr, setEmailErr] = useState("")
    function emailValidation() {
      const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ;
      if (regex.test(registration.email)) {
        setEmailErr("");
        setIsvalid(true)
      }
      else {
        setEmailErr("* Invalid Email");
        setIsvalid(false);
      }
    }

    const [mobileNoErr, setMobileNoErr] = useState("")
    function mobileNoValidation() {

      if (isNaN(registration.mobileNo)) {
        setMobileNoErr(" Numbers only");
        setIsvalid(false);

      } else {
        if (registration.mobileNo.length != 10) {
          setMobileNoErr(" Invalid Conatact No");
          setIsvalid(false);
        }
        else {
          setMobileNoErr("");
          setIsvalid(true);
        }
      }
    }

    const [pincodeErr, setPincodeErr] = useState("")
    function pincodeValidation() {
      if (isNaN(registration.pincode)) {
        setPincodeErr(" Numbers only");
        setIsvalid(false);

      } else {
        if (registration.pincode.length != 6) {
          setPincodeErr(" Invalid pincode ");
          setIsvalid(false);
        }
        else {
          setPincodeErr("");
          setIsvalid(true);
        }
      }
    }


    const [userNameErr, setUserNameErr] = useState("")
    function userNameValidation() {
      if (registration.username === "") {
        setUserNameErr("* Invalid User Name");
        setIsvalid(false);
      }
      else {
        setUserNameErr("");
        setIsvalid(true);
      }
    }


    const [districtErr, setDistrictErr] = useState("")
    function districtValidation() {

      if (registration.district === "") {
        setDistrictErr("*please Enter District");
        setIsvalid(false);
      }
      else {
        if (isNaN) {
          setDistrictErr("");
          setIsvalid(true);
        } else {
          setDistrictErr("*please Enter characters");
          setIsvalid(false);
        }

      }
    }


    const [stateErr, setStateErr] = useState("")
    function stateValidation() {
      if (isNaN) {
        if (registration.state === "") {
          setStateErr("*please Enter State");
          setIsvalid(false);
        }
        else {
          setStateErr("");
          setIsvalid(true);
        }
      } else {
        setStateErr("*please Enter characters only");
        setIsvalid(false);
      }
    }



    const [passwordErr, setPasswordErr] = useState("")
    function passwordValidation() {
      if (registration.password === "") {
        setPasswordErr("* Invalid Password")
        setIsvalid(false);
      }
      else {
        setPasswordErr("");
        setIsvalid(true);
      }
    }

    const [aadharErr, setAadharErr] = useState("")
    function aadharValidation() {

      if (isNaN(registration.aadharNo)) {
        setAadharErr(" Numbers only");
        setIsvalid(false);

      } else {
        if (registration.aadharNo === "") {
          setAadharErr("* Invalid aadhar")
          setIsvalid(false);
        }
        else {
          if (registration.aadharNo.length != 12) {
            setAadharErr(" Invalid Aadhar No");
            setIsvalid(false);
          } else {
            setAadharErr("");
            setIsvalid(true);
          }
        }
      }
    }



    //   const check=()=>{
    //     var seller = registration.isSeller;

    //     if(seller === "true"){
    //       setDisabledType(!disabledType);
    //   }
    // }

    const [addressErr, setAddressErr] = useState("");
    function addressValidation() {
      if (registration.streetAddress === "") {
        setAddressErr("* Invalid Address");
        setIsvalid(false);
      }
      else {
        setAddressErr("");
        setIsvalid(true);
      }
    }


    return (
      // <div>
      //   <div className="register-body" >
      //     <section class="heading-page header-text" id="top">
      //       <div class="container">
      //         <div class="row">
      //           <div class="col-lg-12">
      //             <h2 className="text text-White" id="Farmer-Registration"> FARMER REGISTRATION</h2>
      //           </div>
      //         </div>
      //       </div>
      //     </section>


      //     <div className="body-register col-8">
      //       <div className="container-details-main">
      //         <div className="card">
      //           <div className="row" id="details-lable">
      //             <div className="col-3">
      //               <label for="name">Full Name<span className='required_fields'>*</span></label>
      //               <input type="text" name="name" placeholder="enter your full name" class="form-control" value={registration.name}
      //                 onChange={handleChange}
      //                 onInput={nameValidation} />
      //               <span className="text-danger">{nameErr}</span>
      //             </div>




      //             <div className="col-3">
      //               <label for="username">User Name<span className='required_fields'>*</span></label>
      //               <input type="text" name="username" placeholder="enter user Name" class="form-control" value={registration.username}
      //                 onChange={handleChange}
      //                 onInput={userNameValidation} />
      //               <span className="text-danger">{userNameErr}</span>
      //             </div>

      //             <div className="col-3">
      //               <label for="email">Email<span className='required_fields'>*</span></label>
      //               <input type="text" name="email" placeholder="example@gmail.com" class="form-control" value={registration.email}
      //                 onChange={handleChange}
      //                 onInput={emailValidation} />
      //               <span className="text-danger">{emailErr}</span>
      //             </div>

      //             <div className="col-3">
      //               <label for="password">Password<span className='required_fields'>*</span></label>
      //               <input type="password" name="password" placeholder="enter password" class="form-control" value={registration.password}
      //                 onChange={handleChange}
      //                 onInput={passwordValidation} />
      //               <span className="text-danger">{passwordErr}</span>
      //             </div>

      //             <div className="col-3">
      //               <label for="date">Date Of Birth</label>
      //               <input type="date" name="dateOfBirth" class="form-control" value={registration.dateOfBirth}
      //                 onChange={handleChange} />
      //             </div>

      //             <div className="col-3">
      //               <label for="pincode">Pincode<span className='required_fields'>*</span></label>
      //               <input type="number" name="pincode" placeholder="enter pincode" class="form-control" value={registration.pincode}
      //                 onChange={handleChange}
      //                 onBlur={pincodeValidation} required />
      //               <span className="text-danger">{pincodeErr}</span>
      //             </div>

      //             <div className="col-3">
      //               <label for="date">Address<span className='required_fields'>*</span></label>
      //               <input type="textbox" name="streetAddress" placeholder="Enter address" class="form-control" value={registration.streetAddress}
      //                 onChange={handleChange}
      //                 onInput={addressValidation} required />
      //               <span className="text-danger">{addressErr}</span>
      //             </div>

      //             <div className="col-3">
      //               <label for="email">Aadhar Number<span className='required_fields'>*</span></label>
      //               <input type="text" name="aadharNo" placeholder="Enter 12 digit aadhar number" class="form-control" value={registration.aadharNo}
      //                 onChange={handleChange}
      //                 onBlur={aadharValidation} required />
      //               <span className="text-danger">{aadharErr}</span>
      //             </div>

      //             <div className="col-3">
      //               <label for="email">Phone Number<span className='required_fields'>*</span></label>
      //               <input type="text" name="mobileNo" placeholder="Enter 10 digit number" class="form-control" value={registration.mobileNo}
      //                 onChange={handleChange}
      //                 onBlur={mobileNoValidation} />
      //               <span className="text-danger">{mobileNoErr}</span>
      //             </div>


      //             <div className="col-3">
      //               <label for="email">State</label>
      //               <input type="text" name="state" placeholder="Enter State" class="form-control" value={registration.state}
      //                 onChange={handleChange} onInput={stateValidation} />
      //               <span className="text-danger">{stateErr}</span>
      //             </div>


      //             <div className="col-3">
      //               <label for="district">District</label>
      //               <input type="text" name="district" placeholder="Enter District" class="form-control" value={registration.district} onChange={handleChange} onInput={districtValidation} />
      //               <span className="text-danger">{districtErr}</span>
      //             </div>





      //             <div className="col-3" id="Gender-radio">


      //               <lable for="gender" id="gender_lable">Gender</lable>
      //               <br />
      //               <input type="radio" name="gender" value="MALE" onClick={handleChange} /><span>Male</span>

      //               <input type="radio" name="gender" value="FEMALE" onChange={handleChange} /><span>Female</span>

      //             </div>
      //             <div className="col-3" id="Gender-radio">


      //               <lable for="gender" id="gender_lable">User Type</lable>
      //               <br />
      //               <input type="radio" name="user" value="NORMAL_USER" onClick={handleChange} /><span>NORMAL_USER</span>

      //               <input type="radio" name="user" value="ADMIN" onChange={handleChange} /><span>ADMIN</span>
      //               <br />
      //               <input type="radio" name="user" value="FARMER" onChange={handleChange} /><span>FARMER</span>

      //             </div>




      //             <div className="col-3" id="isSeller-radio">


      //               <lable for="gender" id="gender_lable">Account Type</lable>
      //               <br />
      //               <input type="radio" name="isSeller" value="false" id="farmer_seller_lable" onClick={handleChange} /><span>Farmer</span>
      //               <input type="radio" name="isSeller" value="true" id="farmer_seller_lable" onClick={handleChange} /><span>Seller</span>

      //             </div>


      //             <div className="col-3">
      //              {shopNameFlag && (
      //                       <div>
      //                       <lable for="shopName">Shop Name :</lable>
      //                       <input type="text"  class="form-control" placeHolder="Enter Shop Name"></input>
      //                       </div>
      //                     )}
      //                   </div>
      //             </div>



      //             <div className="col-4" id="btn-div_submit">
      //               <button className="form-control" id="btn-submit" onClick={handleSubmit}>Submit</button>
      //             </div>
      //           </div>
      //         </div>

      //       </div>
      //     </div>

      //   </div>
      //-----------------------------------------------------------------------------------------------------------------------------------
      <div className="register-body">
        <section class="heading-page header-text" id="top">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 className="text text-green" id="Farmer-Registration">
                  FARMER REGISTRATION
                </h2>
              </div>
            </div>
          </div>
        </section>

        <div className="body-register col-8 mx-auto">
          <div className="container-details-main">
            <div className="card registration-card">
              <div className="row" id="details-lable">
                <div className="col-3 mb-3">
                  <label id='label' for="name">Full Name<span className='required_fields'>*</span></label>
                  <input type="text" name="name" placeholder="enter your full name" class="form-control" value={registration.name}
                    onChange={handleChange}
                    onInput={nameValidation} />
                  <span className="text-danger">{nameErr}</span>
                </div>




                <div className="col-3 mb-3">
                  <label id='label' for="username">User Name<span className='required_fields'>*</span></label>
                  <input type="text" name="username" placeholder="enter user Name" class="form-control" value={registration.username}
                    onChange={handleChange}
                    onInput={userNameValidation} />
                  <span className="text-danger">{userNameErr}</span>
                </div>

                <div className="col-3 mb-3">
                  <label id='label' for="email">Email<span className='required_fields'>*</span></label>
                  <input type="text" name="email" placeholder="example@gmail.com" class="form-control" value={registration.email}
                    onChange={handleChange}
                    onInput={emailValidation} />
                  <span className="text-danger">{emailErr}</span>
                </div>

                <div className="col-3 mb-3">
                  <label id='label' for="password">Password<span className='required_fields'>*</span></label>
                  <input type="password" name="password" placeholder="enter password" class="form-control" value={registration.password}
                    onChange={handleChange}
                    onInput={passwordValidation} />
                  <span className="text-danger">{passwordErr}</span>
                </div>

                <div className="col-3 mb-3">
                  <label id='label' for="date">Date Of Birth</label>
                  <input type="date" name="dateOfBirth" class="form-control" value={registration.dateOfBirth}
                    onChange={handleChange} />
                </div>

                <div className="col-3 mb-3">
                  <label id='label' for="pincode">Pincode<span className='required_fields'>*</span></label>
                  <input type="number" name="pincode" placeholder="enter pincode" class="form-control" value={registration.pincode}
                    onChange={handleChange}
                    onBlur={pincodeValidation} required />
                  <span className="text-danger">{pincodeErr}</span>
                </div>

                <div className="col-3 mb-3">
                  <label id='label' for="date">Address<span className='required_fields'>*</span></label>
                  <input type="textbox" name="streetAddress" placeholder="Enter address" class="form-control" value={registration.streetAddress}
                    onChange={handleChange}
                    onInput={addressValidation} required />
                  <span className="text-danger">{addressErr}</span>
                </div>

                <div className="col-3 mb-3">
                  <label id='label' for="email">Aadhar Number<span className='required_fields'>*</span></label>
                  <input type="text" name="aadharNo" placeholder="Enter 12 digit aadhar number" class="form-control" value={registration.aadharNo}
                    onChange={handleChange}
                    onBlur={aadharValidation} required />
                  <span className="text-danger">{aadharErr}</span>
                </div>

                <div className="col-3 mb-3">
                  <label id='label' for="email">Phone Number<span className='required_fields'>*</span></label>
                  <input type="text" name="mobileNo" placeholder="Enter 10 digit number" class="form-control" value={registration.mobileNo}
                    onChange={handleChange}
                    onBlur={mobileNoValidation} />
                  <span className="text-danger">{mobileNoErr}</span>
                </div>


                <div className="col-3 mb-3">
                  <label id='label' for="email">State</label>
                  <input type="text" name="state" placeholder="Enter State" class="form-control" value={registration.state}
                    onChange={handleChange} onInput={stateValidation} />
                  <span className="text-danger">{stateErr}</span>
                </div>


                <div className="col-3 mb-3">
                  <label id='label' for="district">District</label>
                  <input type="text" name="district" placeholder="Enter District" class="form-control" value={registration.district} onChange={handleChange} onInput={districtValidation} />
                  <span className="text-danger">{districtErr}</span>
                </div>





                <div className="col-3" id="Gender-radio">


                  <label for="gender" id="gender_lable ">Gender</label>
                  <input className='radio-male' type="radio" name="gender" value="MALE" onClick={handleChange} /><span className='ms-1'>Male</span>

                  <input className='radio-female' type="radio" name="gender2" value="FEMALE" onChange={handleChange} /><span className='ms-1'>Female</span>

                </div>




                <div className="col-3 mb-3" id="isSeller-radio">
                  <label for="isSeller" className="label">Account Type</label>
                  <input className='radio-farmer' type="radio" name="isSeller" value="false" onClick={handleChange} /><span className='ms-1'>Farmer</span>
                  <input className='radio-seller' type="radio" name="isSeller" value="true" onClick={handleChange} /><span className='ms-1'>Seller</span>
                </div>

                <div className="col-3" id="Gender-radio">


                  <lable for="gender" id="gender_lable">User Type</lable>
                  <br />
                  <input type="radio" name="user" value="NORMAL_USER" onClick={handleChange} /><span>NORMAL_USER</span>
                  <br />
                  <input type="radio" name="user" value="ADMIN" onChange={handleChange} /><span>ADMIN</span>
                  <br />
                  <input type="radio" name="user" value="FARMER" onChange={handleChange} /><span>FARMER</span>

                </div>

                <div className="col-3">
                  {shopNameFlag && (
                    <div>
                      <lable for="shopName">Shop Name :</lable>
                      <input type="text" class="form-control" placeHolder="Enter Shop Name"></input>
                    </div>
                  )}
                </div>
              </div>



              <div className="col-4 mx-auto mt-3" id="btn-div_submit">
                <button className="form-control" id="btn-submit" onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>

        </div>
      </div>


    )
  }
}
export default RegistrationForm;