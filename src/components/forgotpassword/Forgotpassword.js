// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import emailjs from "@emailjs/browser";

// function generateRandomCode() {
//   // Generate a random number between 100000 and 999999 (inclusive)
//   const min = 100000;
//   const max = 999999;
//   const randomCode = Math.floor(Math.random() * (max - min + 1)) + min;

//   return randomCode;
// }

// function PasswordReset() {
//   const [info, setInfo] = useState({
//     newpassword: "",
//     username: "",
//     confirmpassword: "",
//     resetCode: "", // Add resetCode to the state
//     enteredCode: "", // Add a field for the entered security code
//   });
//   const [resetCodeSent, setResetCodeSent] = useState(false);
//   const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);
//   const [userData, setUserData] = useState();
//   const [userResetCode, setUserResetCode] = useState(null); // Initialize with null

//   const handleChange = (e) => {
//     e.preventDefault();
//     const name = e.target.name;
//     const value = e.target.value;

//     setInfo({ ...info, [name]: value });
//   };

//   useEffect(() => {
//     // Generate the random reset code only once when the component mounts
//     setUserResetCode(generateRandomCode());
//   }, []); // Empty dependency array means this effect runs once on mount

//   const handleUsernameSubmit = async (e) => {
//     e.preventDefault();

//     axios
//       .get(`http://localhost:7575/users/${info.username}`)
//       .then((response) => {
//         setUserData(response.data);

//         sendEmail();
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const sendEmail = () => {
//     // Set user data once the response is received
//     const updatedUserData = { ...userData, resetCode: userResetCode };
//     setUserData(updatedUserData, () => {
//       if (userData) {
//         console.log(updatedUserData); // This will log the updated userData

//         // Send an email with the reset code and updatedUserData
//         emailjs
//           .send(
//             "service_54w1zxf",
//             "template_7zwci31",
//             { userData: updatedUserData }, // Use updatedUserData
//             "czQXBeQddD2wbvJTd"
//           )
//           .then(
//             (emailResponse) => {
//               console.log("Email sent successfully:", emailResponse);
//               setResetCodeSent(true);
//             },
//             (error) => {
//               console.error("Email could not be sent:", error);
//             }
//           );
//       }
//     });
//   };

//   const handleCodeSubmit = (e) => {
//     e.preventDefault();
//     console.log(info.enteredCode);
//     console.log(userResetCode);
//     if (info.enteredCode === String(userResetCode)) {
//       // Convert userResetCode to string and compare

//       // For example, make a POST request to your server to update the password
//       const url = `http://localhost:7575/login/forgot-password`;
//       axios
//         .post(url, {
//           username: info.username,
//           newpassword: info.newpassword,
//           confirmpassword: info.confirmpassword,
//         })
//         .then((response) => {
//           console.log(response.data);
//           if (response.data === "updated") {
//             setPasswordResetSuccess(true);
//           }
//         })
//         .catch((error) => {
//           console.log(error.response);
//         });
//     } else {
//       alert("Invalid reset code. Please try again.");
//     }
//   };

//   return (

//   );
// }

// export default PasswordReset;
import React, { useState, useEffect } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";

function generateRandomCode() {
  // Generate a random number between 100000 and 999999 (inclusive)
  const min = 100000;
  const max = 999999;
  const randomCode = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomCode.toString(); // Convert to string
}

function PasswordReset() {
  const [info, setInfo] = useState({
    newpassword: "",
    username: "",
    confirmpassword: "",
    resetCode: "", // Add resetCode to the state
    enteredCode: "", // Add a field for the entered security code
  });
  const [resetCodeSent, setResetCodeSent] = useState(false);
  const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);
  const [userData, setUserData] = useState(null); // Initialize with null
  const [userResetCode, setUserResetCode] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInfo({ ...info, [name]: value });
  };

  useEffect(() => {
    // Generate the random reset code only once when the component mounts
    setUserResetCode(generateRandomCode());
  }, []);

  const handleUsernameSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:7575/users/${info.username}`)
      .then((response) => {
        setUserData(response.data);
        console.log(response.data.email);
        // Send an email with the reset code and email
        sendEmail(response.data.email, userResetCode);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const sendEmail = (email, resetCode) => {
    if (email) {
      // Send an email with the reset code and email
      emailjs
        .send(
          "service_54w1zxf",
          "template_7zwci31",
          {
            resetCode: resetCode,
            email: email, // Use the extracted email
          },
          "czQXBeQddD2wbvJTd"
        )
        .then(
          (emailResponse) => {
            console.log("Email sent successfully:", emailResponse);
            setResetCodeSent(true);
          },
          (error) => {
            console.error("Email could not be sent:", error);
          }
        );
    }
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();

    if (info.enteredCode === userResetCode) {
      // For example, make a POST request to your server to update the password
      const url = `http://localhost:7575/login/forgot-password`;
      axios
        .post(url, {
          username: info.username,
          newpassword: info.newpassword,
          confirmpassword: info.confirmpassword,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data === "updated") {
            setPasswordResetSuccess(true);
          }

          window.location = "/login";
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else {
      alert("Invalid reset code. Please try again.");
    }
  };

  return (
    // <div className="container-fluid">
    //   <div className="row rounded">
    //     <div className="col-md-4 offset-md-4">
    //       <div
    //         className="login-form bg-light mt-4 p-4"
    //         style={{ borderRadius: "30px" }}
    //       >
    //         {passwordResetSuccess ? (
    //           <div>
    //             <p>Password has been successfully reset.</p>
    //           </div>
    //         ) : resetCodeSent ? (
    //           <div>
    //             <form onSubmit={handleCodeSubmit}>
    //               {/* Input fields for the new password and code */}
    //             </form>
    //           </div>
    //         ) : (
    //           <div>
    //             <form onSubmit={handleUsernameSubmit}>
    //               <input
    //                 type="text"
    //                 name="username"
    //                 className="form-control"
    //                 placeholder="Username"
    //                 value={info.username}
    //                 onChange={handleChange}
    //               />
    //               <button type="submit" className="btn btn-success">
    //                 Submit
    //               </button>
    //             </form>
    //           </div>
    //         )}

    //         <hr className="mt-4" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //------------------------------
    <div className="container-fluid">
      <div className="row rounded">
        <div className="col-md-4 offset-md-4">
          <div
            className="login-form bg-light mt-4 p-4"
            style={{ borderRadius: "30px" }}
          >
            {passwordResetSuccess ? (
              <div>
                <p>Password has been successfully reset.</p>
              </div>
            ) : resetCodeSent ? (
              <div>
                <form onSubmit={handleCodeSubmit}>
                  <input
                    type="password"
                    name="newpassword"
                    className="form-control"
                    placeholder="Enter New Password"
                    value={info.newpassword}
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    name="confirmpassword"
                    className="form-control"
                    placeholder="Confirm New Password"
                    value={info.confirmpassword}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="enteredCode"
                    className="form-control"
                    placeholder="Enter Security Code"
                    value={info.enteredCode}
                    onChange={handleChange}
                  />
                  <button type="submit" className="btn btn-success">
                    Reset Password
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <form onSubmit={handleUsernameSubmit}>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                    value={info.username}
                    onChange={handleChange}
                  />
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </form>
              </div>
            )}

            <hr className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
