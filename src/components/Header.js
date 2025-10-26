import "../assets/css/header.css";
import userProfileIcon from "../assets/images/user_profile_icon.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import AuthenticateService from "../components/login/AuthenticateService";
import SignoutImpl from "./signout/SignoutImpl";

const Header = () => {
  const userType=AuthenticateService.getUserType();
  const userid = sessionStorage.getItem("userId");
  
  const handleregister=() =>{

    window.location="/register"
   }  

  
  // const checkUserStatus =()=>{
  //   if(userid !== ""){
  //     setIsUserLoginflag(true);
  //     return("user")
  //   }else{
  //     return(<div><Link to={"/login"}>Sign in</Link></div>)
  //   }
  // }
  

  return (
   

    <div className="super_container">
      {/* <!-- Header --> */}

      <header className="header">
        {/* <!-- Header Main --> */}

        <div className="header_main">
          <div className="container">
            <div className="row align-items-center">
              {/* <!-- Logo --> */}
              <div className="col-md-3 col-sm-3">
                <div className="logo_container">
                  <div className="logo"><span className="nature">Natures</span>  Mart</div>
                </div>
              </div>

              <div className="col-md-6"></div>

              {/* <!-- Register and Sign In --> */}
              <div className="col-md-3 d-flex justify-content-end">

                <button className="btn text-dark ms-1" onClick={handleregister} style={{ fontSize: "15pt" }}>Register</button>
                <div className="signin_content">
                  {/* {checkUserStatus} */}
                  <Link to={"/login"}><SignoutImpl /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Main Navigation --> */}

        <div>
            <nav className="navbar navbar-expand-lg bg-body-green mb-4"  style={{ fontSize: 18, padding: 0 }}>
              <div className="container-fluid justify-content-end">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link active" style={{ color: "black" }} aria-current="page" to="/">HOME</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link active" style={{ color: "black" }} aria-current="page" to="/crops">CROPS</Link>
                    </li>

                    {userType !== "admin" && (
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        style={{ color: "black" }}
                        aria-current="page"
                        to="/crops"
                      >
                        CROPS
                      </Link>
                    </li>
                  )}

                  {userType === "admin" ? (
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        style={{ color: "black" }}
                        aria-current="page"
                        to="/admin/dashboard"
                      >
                        DASHBOARD
                      </Link>
                    </li>
                  ) : userType === "farmer" ? (
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        style={{ color: "black" }}
                        aria-current="page"
                        to="/farmer/dashboard"
                      >
                        DASHBOARD
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        style={{ color: "black" }}
                        aria-current="page"
                        to="/dashboard"
                      >
                        DASHBOARD
                      </Link>
                    </li>
                  )}

                    <li className="nav-item">
                      <Link className="nav-link active" style={{ color: "black" }} aria-current="page" to="/products">PRODUCTS</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link active" style={{ color: "black" }} aria-current="page" to="/displayorders">ORDERS</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link active" style={{ color: "black" }} aria-current="page" to="/schemes"> GOVT-SCHEMES</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link active" style={{ color: "black" }} aria-current="page" to="/news"> LATEST NEWS</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link active" style={{ color: "black" }} aria-current="page" to="/user/cart"> CART</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link active" style={{ color: "black" }} aria-current="page" to="/farmerProfile"> PROFILE</Link>
                    </li>
        
                    
                  </ul>
                </div>
              </div>
            </nav>
          </div>

      </header>
    </div>
  );
};

export default Header;
// import React from "react";
// import { Link } from "react-router-dom";
// import AuthenticateService from "../components/login/AuthenticateService";
// import SignoutImpl from "./signout/SignoutImpl";

// const Header = () => {
//   const userType = AuthenticateService.getUserType();
//   const isAuthenticated = AuthenticateService.isUserLoggedIn();
//   const username = sessionStorage.getItem("authenticatedUser");

//   const handleRegister = () => {
//     // Define your registration logic here or navigate to the registration page.
//   };

//   return (
//     <div className="super_container">
//       {/* Header */}
//       <header className="header">
//         {/* Header Main */}
//         <div className="header_main">
//           <div className="container">
//             <div className="row align-items-center">
//               {/* Logo */}
//               <div className="col-md-3 col-sm-3">
//                 <div className="logo_container">
//                   <div className="logo">
//                     <span className="nature">Natures</span> Mart
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-6"></div>

//               {/* Register and Sign In */}
//               <div className="col-md-3 d-flex justify-content-end">
//                 <button
//                   className="btn text-dark ms-1"
//                   onClick={handleRegister}
//                   style={{ fontSize: "15pt" }}
//                 >
//                   Register
//                 </button>
//                 <div className="signin_content">
//                   {isAuthenticated ? (
//                     <div className="d-flex align-items-center">
//                       <div className="user-welcome me-2" style={{ display: 'inline-block' }}>
//                         Welcome,
//                       </div>
//                       <div className="username" style={{ display: 'inline-block' }}>{username}!</div>
//                       <div className="signout" style={{ display: 'inline-block' }}>
//                         <SignoutImpl />
//                       </div>
//                     </div>
//                   ) : (
//                     <Link to={"/login"}>Sign in</Link>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Navigation */}
//         <div>
//           <nav
//             className="navbar navbar-expand-lg bg-body-green mb-4"
//             style={{ fontSize: 18, padding: 0 }}
//           >
//             <div className="container-fluid justify-content-end">
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarNavDropdown"
//                 aria-controls="navbarNavDropdown"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon" />
//               </button>
//               <div
//                 className="collapse navbar-collapse justify-content-center"
//                 id="navbarNavDropdown"
//               >
//                 <ul className="navbar-nav">
//                   {/* ... Your navigation links ... */}
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;
