import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/order.css";
import emailjs from "@emailjs/browser";

const OrderComponent = () => {
  const [order, setOrderInfo] = useState(null); // Initialize order as null
  const userId = sessionStorage.getItem("userId");
  const url = `http://localhost:7575/order/recent/${userId}`;
  useEffect(() => {
    axios
      .get(url, {})
      .then((response) => {
        console.log(response.data);
        setOrderInfo(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  useEffect(() => {
    // Check if 'order' is available
    if (order) {
      emailjs
        .send(
          "service_54w1zxf",
          "template_k3lq43b",

          order,
          "czQXBeQddD2wbvJTd"
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
          },
          (error) => {
            console.error("Email could not be sent:", error);
          }
        );
    }
  }, [order]);

  // Conditionally render order details when 'order' is available
  return (
    // <section className="gradient-custom-2">
    //   <div className="container py-5 h-100">
    //     <div className="row d-flex justify-content-center align-items-center h-100">
    //       <div className="col-md-10 col-lg-8 col-xl-6">
    //         {order ? ( // Check if 'order' is available
    //           <div
    //             className="card card-stepper"
    //             style={{ borderRadius: "16px" }}
    //           >
    //             <div className="card-header p-4">
    //               <div className="d-flex justify-content-between align-items-center">
    //                 <div>
    //                   <p className="text-muted mb-2">
    //                     {" "}
    //                     Order ID:
    //                     <span className="fw-bold text-body">{order.id}</span>
    //                   </p>
    //                   <p className="text-muted mb-0">
    //                     {" "}
    //                     Placed On:
    //                     <span className="fw-bold text-body">
    //                       {order.orderDate}
    //                     </span>{" "}
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="card-body p-4">
    //               <div className="d-flex flex-row mb-4 pb-2">
    //                 <div className="flex-fill">
    //                   <h5 className="bold">Order Details</h5>
    //                   <p className="text-muted">
    //                     Total Items: {order.cart.totalItems}
    //                   </p>
    //                   <h4 className="mb-3">
    //                     Total Price: ₹ {order.totalPrice}
    //                     <span className="small text-muted">
    //                       {" "}
    //                       via ({order.paymentMode}){" "}
    //                     </span>
    //                   </h4>
    //                   <p className="text-muted">
    //                     Tracking Status: ({order.orderStatus} ON)
    //                     <span className="text-body"> {order.deliveryDate}</span>
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ) : (
    //           // Render a loading message or spinner while 'order' is null
    //           <div>Loading...</div>
    //         )}
    //       </div>
    //     </div>
    //   </div>

    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-3"></div>
    //       <div className="col-md-6">
    //         <h1>Thank for ordering !</h1>
    //         <br></br>
    //         <h2>Enjoy shopping</h2>
    //       </div>
    //       <div className="col-md-3"></div>
    //     </div>
    //   </div>
    // </section>

    <section className="gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-10 col-lg-8 col-xl-6">
            {order ? ( // Check if 'order' is available
              <div
                className="card card-stepper"
                style={{ borderRadius: "16px" }}
              >
                <div className="card-header p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="text-muted mb-2">
                        {" "}
                        Order ID:
                        <span className="fw-bold text-body">{order.id}</span>
                      </p>
                      <p className="text-muted mb-0">
                        {" "}
                        Placed On:
                        <span className="fw-bold text-body">
                          {order.orderDate}
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex flex-row mb-4 pb-2">
                    <div className="flex-fill">
                      <h5 className="bold">Order Details</h5>
                      <p className="text-muted">
                        Total Items: {order.cart.totalItems}
                      </p>
                      <h4 className="mb-3">
                        Total Price: ₹ {order.totalPrice}
                        <span className="small text-muted">
                          {" "}
                          via ({order.paymentMode}){" "}
                        </span>
                      </h4>
                      <p className="text-muted">
                        Tracking Status: ({order.orderStatus} ON)
                        <span className="text-body"> {order.deliveryDate}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Render a loading message or spinner while 'order' is null
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1>Thank for ordering !</h1>
            <br></br>
            <h2>Enjoy shopping</h2>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </section>
  );
};

export default OrderComponent;
