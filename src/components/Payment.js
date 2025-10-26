// import { useState, useEffect } from "react";
// import visa from "../assets/images/visa.png";
// import mastercard from "../assets/images/mastercard.png";
// import amex from "../assets/images/amex.png";
// import reactRouterDom from "react-router-dom";
// import React from "react";
// import axios from "axios";

// function Payment() {
//   const userId = sessionStorage.getItem("userId");
//   const cartInfoEmpty = {
//     id: "",
//     createdOn: "",
//     updatedOn: "",
//     totalCartPrice: "",
//     totalItems: "",
//     user: null,
//     cartItem: [],
//   };
//   const [cartInfo, setCartInfo] = useState({
//     id: "",
//     createdOn: "",
//     updatedOn: "",
//     totalCartPrice: "",
//     totalItems: "",
//     user: null,
//     cartItem: [],
//   });

//   const url = `http://localhost:7575/getcart/${userId}`;

//   useEffect(() => {
//     axios
//       .get(url, {})
//       .then((response) => {
//         console.log(response.data);
//         setCartInfo(response.data);
//         console.log(cartInfo);
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   }, []);

//   const [order, setOrder] = useState({});
//   console.log("inside Order1");
//   const placeOrder = () => {
//     axios
//       .post("http://localhost:7575/order", {
//         id: cartInfo.id,
//         createdOn: cartInfo.createdOn,
//         updatedOn: cartInfo.updatedOn,
//         totalCartPrice: cartInfo.totalCartPrice,
//         totalItems: cartInfo.totalItems,
//         user: cartInfo.user,
//       })
//       .then((response) => {
//         setOrder(response.data);
//         console.log(" inside Order 2 ");

//         console.log(response.data);
//       })
//       .catch((err) => {
//         // console.log("error ocurred", err);
//         alert("please login before proceeding further");

//         window.location = "/login";
//       });

//     setCartInfo(cartInfoEmpty);
//     console.log(cartInfo);
//     window.location = `/user/order/${order.id}`;
//   };
//   return (
//     // <div class="pt-5">
//     //   {/* <Header /> */}
//     //   <div
//     //     class="py-5"
//     //     style={{
//     //       backgroundImage: `url()`,
//     //       overflow: "hidden",
//     //       height: "800px",
//     //     }}
//     //   >
//     //     <div className="row mb-4">
//     //       <div className="col-lg-8 mx-auto text-center">
//     //         {/* <h1 className="display-6">Book My Flight</h1> */}
//     //       </div>
//     //     </div>
//     //     <div className="row">
//     //       <div className="col-md-6 mx-auto">
//     //         <div className="card ">
//     //           <div className="card-header">
//     //             <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
//     //               <div className="tab-content">
//     //                 <div className="tab-pane fade show active pt-3">
//     //                   <div className="container">
//     //                     <h4 align="center">Confirm Payment</h4>
//     //                     <br />

//     //                     <div className="row">
//     //                       <div className="col-md-6">
//     //                         <span>
//     //                           <h6>CREDIT/DEBIT CARD</h6>
//     //                         </span>
//     //                       </div>
//     //                       <div
//     //                         className="col-lg-6 text-right"
//     //                         style={{ marginTop: "-5px" }}
//     //                       >
//     //                         {/* style="margin-top: -5px; */}
//     //                         <img src={visa} alt="visa card " />
//     //                         <img src={mastercard} alt="mastercard" />
//     //                         <img src={amex} alt="amex card" />
//     //                       </div>
//     //                     </div>
//     //                     <br></br>
//     //                     <form>
//     //                       <div className="form-group">
//     //                         <label for="cc-number" className="control-label">
//     //                           CARD NUMBER
//     //                         </label>
//     //                         <input
//     //                           name="cnumber"
//     //                           type="mobile"
//     //                           className="form-control"
//     //                           placeholder="•••• •••• •••• ••••"
//     //                           pattern="[0-9]{16}"
//     //                           required
//     //                         />
//     //                       </div>

//     //                       <br></br>

//     //                       <div className="row">
//     //                         <div className="col-md-6">
//     //                           <div className="form-group">
//     //                             <label for="cc-exp" className="control-label">
//     //                               CARD EXPIRY
//     //                             </label>
//     //                             <input
//     //                               id="cc-exp"
//     //                               type="month"
//     //                               className="form-control"
//     //                               required
//     //                             />
//     //                           </div>
//     //                         </div>
//     //                         <div className="col-md-6">
//     //                           <div className="form-group">
//     //                             {" "}
//     //                             <label for="cc-cvc" className="control-label">
//     //                               CARD CVV
//     //                             </label>
//     //                             <input
//     //                               name="cvc"
//     //                               type="mobile"
//     //                               className="form-control"
//     //                               placeholder="•••"
//     //                               pattern="[0-9]{3}"
//     //                               required
//     //                             />
//     //                           </div>
//     //                         </div>
//     //                       </div>

//     //                       <br></br>
//     //                       <div className="form-group">
//     //                         <label for="holder-name" className="control-label">
//     //                           CARD HOLDER NAME
//     //                         </label>
//     //                         <input
//     //                           name="cname"
//     //                           type="text"
//     //                           className="form-control"
//     //                           required
//     //                         />
//     //                       </div>

//     //                       <br></br>

//     //                       <div className="card-footer">
//     //                         <div className="col-md-12 text-center">
//     //                           <h6>Total Amount: {cartInfo.totalCartPrice} </h6>
//     //                           <button
//     //                             type="submit"
//     //                             onClick={placeOrder}
//     //                             className="subscribe btn btn-primary btn-block shadow-sm"
//     //                           >
//     //                             {" "}
//     //                             Make Payment{" "}
//     //                           </button>
//     //                         </div>
//     //                       </div>
//     //                     </form>
//     //                   </div>
//     //                 </div>
//     //               </div>
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     //   {/* <Footer /> */}
//     // </div>

//     <div class="pt-5">
//       {/* <Header /> */}
//       <div
//         class="py-5"
//         style={{
//           backgroundImage: `url()`,
//           overflow: "hidden",
//           height: "800px",
//         }}
//       >
//         <div className="row mb-4">
//           <div className="col-lg-8 mx-auto text-center">
//             {/* <h1 className="display-6">Book My Flight</h1> */}
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-6 mx-auto">
//             <div className="card ">
//               <div className="card-header">
//                 <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
//                   <div className="tab-content">
//                     <div className="tab-pane fade show active pt-3">
//                       <div className="container">
//                         <h4 align="center">Confirm Payment</h4>
//                         <br />

//                         <div className="row">
//                           <div className="col-md-6">
//                             <span>
//                               <h6>CREDIT/DEBIT CARD</h6>
//                             </span>
//                           </div>
//                           <div
//                             className="col-lg-6 text-right"
//                             style={{ marginTop: "-5px" }}
//                           >
//                             {/* style="margin-top: -5px; */}
//                             <img src={visa} alt="visa card " />
//                             <img src={mastercard} alt="mastercard" />
//                             <img src={amex} alt="amex card" />
//                           </div>
//                         </div>
//                         <br></br>
//                         <form>
//                           <div className="form-group">
//                             <label for="cc-number" className="control-label">
//                               CARD NUMBER
//                             </label>
//                             <input
//                               name="cnumber"
//                               type="mobile"
//                               className="form-control"
//                               placeholder="•••• •••• •••• ••••"
//                               pattern="[0-9]{16}"
//                               required
//                             />
//                           </div>

//                           <br></br>

//                           <div className="row">
//                             <div className="col-md-6">
//                               <div className="form-group">
//                                 <label for="cc-exp" className="control-label">
//                                   CARD EXPIRY
//                                 </label>
//                                 <input
//                                   id="cc-exp"
//                                   type="month"
//                                   className="form-control"
//                                   required
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-md-6">
//                               <div className="form-group">
//                                 {" "}
//                                 <label for="cc-cvc" className="control-label">
//                                   CARD CVV
//                                 </label>
//                                 <input
//                                   name="cvc"
//                                   type="mobile"
//                                   className="form-control"
//                                   placeholder="•••"
//                                   pattern="[0-9]{3}"
//                                   required
//                                 />
//                               </div>
//                             </div>
//                           </div>

//                           <br></br>
//                           <div className="form-group">
//                             <label for="holder-name" className="control-label">
//                               CARD HOLDER NAME
//                             </label>
//                             <input
//                               name="cname"
//                               type="text"
//                               className="form-control"
//                               required
//                             />
//                           </div>

//                           <br></br>

//                           <div className="card-footer">
//                             <div className="col-md-12 text-center">
//                               <h6>Total Amount: {cartInfo.totalCartPrice} </h6>
//                               <button
//                                 type="submit"
//                                 onClick={placeOrder}
//                                 className="subscribe btn btn-primary btn-block shadow-sm"
//                               >
//                                 {" "}
//                                 Make Payment{" "}
//                               </button>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <Footer /> */}
//     </div>
//   );
// }

// export default Payment;
import React, { useState, useEffect } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import visa from "../assets/images/visa.png";
import mastercard from "../assets/images/mastercard.png";
import amex from "../assets/images/amex.png";

function Payment() {
  const userId = sessionStorage.getItem("userId");
  const cartInfoEmpty = {
    id: "",
    createdOn: "",
    updatedOn: "",
    totalCartPrice: "",
    totalItems: "",
    user: null,
    cartItem: [],
  };

  const [cartInfo, setCartInfo] = useState(cartInfoEmpty);

  const [formData, setFormData] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
    cardHolderName: "",
  });

  const [formErrors, setFormErrors] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
    cardHolderName: "",
  });

  const url = `http://localhost:7575/getcart/${userId}`;

  useEffect(() => {
    axios
      .get(url, {})
      .then((response) => {
        setCartInfo(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  const [order, setOrder] = useState({});

  const placeOrder = () => {
    axios
      .post("http://localhost:7575/order", {
        id: cartInfo.id,
        createdOn: cartInfo.createdOn,
        updatedOn: cartInfo.updatedOn,
        totalCartPrice: cartInfo.totalCartPrice,
        totalItems: cartInfo.totalItems,
        user: cartInfo.user,
      })
      .then((response) => {
        setOrder(response.data);
        setCartInfo(cartInfoEmpty);
        window.location = `/user/order/${order.id}`;
      })
      .catch((err) => {
        alert("Please login before proceeding further");
        window.location = "/login";
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // if (name === "cardNumber") {
    //   const formattedValue = value
    //     .replace(/\s/g, "") // Remove existing spaces
    //     .replace(/(\d{4})/g, "$1 "); // Add a space every 4 digits

    //   setFormData({ ...formData, [name]: formattedValue });
    // } else {
    //   setFormData({ ...formData, [name]: value });
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled out
    const errors = {};
    let formIsValid = true;

    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = "This field is required";
        formIsValid = false;
      }
    }

    if (!formIsValid) {
      setFormErrors(errors);
      return;
    }

    // If all fields are filled out, proceed with the payment
    placeOrder();
  };

  return (
    <div class="pt-5">
      <div
        class="py-5"
        style={{
          backgroundImage: `url()`,
          overflow: "hidden",
          height: "800px",
        }}
      >
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto text-center"></div>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-header">
                <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                  <div className="tab-content">
                    <div className="tab-pane fade show active pt-3">
                      <div className="container">
                        <h4 align="center">Confirm Payment</h4>
                        <br />

                        <div className="row">
                          <div className="col-md-6">
                            <span>
                              <h6>CREDIT/DEBIT CARD</h6>
                            </span>
                          </div>
                          <div
                            className="col-lg-6 text-right"
                            style={{ marginTop: "-5px" }}
                          >
                            <img src={visa} alt="visa card " />
                            <img src={mastercard} alt="mastercard" />
                            <img src={amex} alt="amex card" />
                          </div>
                        </div>
                        <br></br>
                        <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <label
                              htmlFor="cc-number"
                              className="control-label"
                            >
                              CARD NUMBER
                            </label>
                            <input
                              name="cardNumber"
                              type="text"
                              className="form-control"
                              placeholder="•••• •••• •••• ••••"
                              pattern="[0-9]{16}"
                              required
                              onChange={handleChange}
                            />
                            <div className="text-danger">
                              {formErrors.cardNumber}
                            </div>
                          </div>

                          <br></br>

                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label
                                  htmlFor="cc-exp"
                                  className="control-label"
                                >
                                  CARD EXPIRY
                                </label>
                                <input
                                  name="cardExpiry"
                                  type="month"
                                  className="form-control"
                                  required
                                  onChange={handleChange}
                                />
                                <div className="text-danger">
                                  {formErrors.cardExpiry}
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label
                                  htmlFor="cc-cvc"
                                  className="control-label"
                                >
                                  CARD CVV
                                </label>
                                <input
                                  name="cardCVC"
                                  type="text"
                                  className="form-control"
                                  placeholder="•••"
                                  pattern="[0-9]{3}"
                                  required
                                  onChange={handleChange}
                                />
                                <div className="text-danger">
                                  {formErrors.cardCVC}
                                </div>
                              </div>
                            </div>
                          </div>

                          <br></br>
                          <div className="form-group">
                            <label
                              htmlFor="holder-name"
                              className="control-label"
                            >
                              CARD HOLDER NAME
                            </label>
                            <input
                              name="cardHolderName"
                              type="text"
                              className="form-control"
                              required
                              onChange={handleChange}
                            />
                            <div className="text-danger">
                              {formErrors.cardHolderName}
                            </div>
                          </div>

                          <br></br>

                          <div className="card-footer">
                            <div className="col-md-12 text-center">
                              <h6>Total Amount: {cartInfo.totalCartPrice}</h6>
                              <button
                                type="submit"
                                className="subscribe btn btn-primary btn-block shadow-sm"
                              >
                                Make Payment
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
