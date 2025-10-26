
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const CartComponent = () => {
//   const [cartInfo, setCartInfo] = useState(null);
//   const [totalCartPrice, setTotalCartPrice] = useState(0);
//   const userId = sessionStorage.getItem("userId");
//   const url = `http://localhost:7575/getcart/${userId}`;

//   useEffect(() => {
//     axios
//       .get(url, {})
//       .then((response) => {
//         setCartInfo(response.data);
//         calculateTotalCartPrice(response.data);
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   }, []);

//   const handleChange = (e, cartItemId) => {
//     const newQuantity = parseInt(e.target.value);

//     // Validate the new quantity
//     if (newQuantity < 0 || newQuantity > 100) {
//       // Display an error message or take other appropriate actions
//       console.error("Invalid quantity");
//       return;
//     }

//     // Update the local state with the new quantity
//     const updatedCartItems = cartInfo.cartItem.map((carts) => {
//       if (carts.id === cartItemId) {
//         const itemTotalPrice = carts.product.price * newQuantity;

//         return {
//           ...carts,
//           quantity: newQuantity,
//           cartItemPrice: itemTotalPrice,
//         };
//       }
//       return carts;
//     });

//     setCartInfo({ ...cartInfo, cartItem: updatedCartItems });
//   };

//   const handleSave = (cartItemId) => {
//     const cartItem = cartInfo.cartItem.find((item) => item.id === cartItemId);

//     // Make a PUT request to update the cart item quantity on the server
//     axios
//       .put(`http://localhost:7575/cartitem/${cartItemId}/${cartItem.quantity}`)
//       .then((response) => {
//         console.log(response.data);
//         // Calculate total cart price after updating the cart item
//         calculateTotalCartPrice({ ...cartInfo, cartItem: cartInfo.cartItem });
//       })
//       .catch((error) => {
//         console.log(error.response);
//         // Revert the local quantity change on error
//         const revertedCartItems = cartInfo.cartItem.map((item) =>
//           item.id === cartItemId
//             ? { ...item, quantity: cartItem.quantity }
//             : item
//         );
//         setCartInfo({ ...cartInfo, cartItem: revertedCartItems });
//       });
//   };

//   const calculateTotalCartPrice = (cartData) => {
//     let total = 0;
//     cartData.cartItem.forEach((item) => {
//       total += item.product.price * item.quantity;
//     });
//     setTotalCartPrice(total);
//   };

//   const handleDeleteCartItem = (cartItemId) => {
//     // Make an API request to delete the cart item
//     axios
//       .delete(`http://localhost:7575/cartitem/${cartItemId}`)
//       .then((response) => {
//         // Update the cart state by fetching the updated cart data
//         axios
//           .get(url, {})
//           .then((response) => {
//             setCartInfo(response.data);
//             // Calculate total cart price after deleting a cart item
//             calculateTotalCartPrice(response.data);
//           })
//           .catch((error) => {
//             console.log(error.response);
//           });
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   };

//   const isCartEmpty = cartInfo && cartInfo.cartItem.length === 0;

//   const renderCartList =
//     cartInfo &&
//     cartInfo.cartItem.map((carts) => {
//       const { product, quantity, cartItemPrice } = carts;

//       return (
//         <div className="card mb-3" key={carts.id}>
//           <div className="row g-0">
//             <div className="col-md-4">
//               <img
//                 src={product.productImageUrl}
//                 alt={product.title}
//                 className="img-fluid rounded-start"
//               />
//             </div>
//             <div className="col-md-8">
//               <div className="card-body">
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="card-text">{product.description}</p>
//                 <p className="card-text">Price: {product.quantity} Rs</p>
//                 <div className="d-flex">
//                   <div className="item-quantity me-auto">
//                     <input
//                       type="number"
//                       name={carts.id}
//                       value={quantity}
//                       onChange={(e) => handleChange(e, carts.id)}
//                       className="form-control"
//                     />
//                   </div>
//                   <div className="item-price">
//                     <p className="card-text">
//                       Total: {cartItemPrice * quantity} Rs
//                     </p>
//                   </div>
//                   <div className="item-actions">
//                     <button
//                       onClick={() => handleSave(carts.id)}
//                       className="btn btn-success"
//                     >
//                       Save
//                     </button>
//                     <button
//                       onClick={() => handleDeleteCartItem(carts.id)}
//                       className="btn btn-danger"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     });

//   const createOrder = () => {
//     // Redirect to the payment page
//     window.location = "/payment";
//   };

//   return (
//     <div>
//       <main className="page">
//         <section className="shopping-cart dark">
//           <div className="container">
//             <div className="block-heading" style={{ marginTop: "-80px" }}>
//               <h2>Shopping Cart</h2>
//             </div>
//             <div className="content">
//               <div className="row">
//                 <div className="col-md-12 col-lg-8">
//                   {isCartEmpty ? (
//                     <h3>Your cart is empty. Add items to your cart first.</h3>
//                   ) : (
//                     renderCartList
//                   )}
//                 </div>
//                 {isCartEmpty ? null : ( // Conditionally render the summary section
//                   <div className="col-md-12 col-lg-4">
//                     <div className="summary">
//                       <h3>Summary</h3>
//                       <div className="summary-item">
//                         <span className="text">Subtotal</span>
//                         <span className="price">₹{totalCartPrice + 50}</span>
//                       </div>
//                       <div className="summary-item">
//                         <span className="text">Discount</span>
//                         <span className="price">₹100</span>
//                       </div>
//                       <div className="summary-item">
//                         <span className="text">Shipping</span>
//                         <span className="price">₹50</span>
//                       </div>
//                       <div className="summary-item">
//                         <span className="text">Total</span>
//                         <span className="price">₹{totalCartPrice}</span>
//                       </div>
//                       {/* Conditionally render the Checkout button */}
//                       {!isCartEmpty && (
//                         <button
//                           type="button"
//                           className="btn btn-primary btn-block"
//                           onClick={createOrder}
//                         >
//                           Checkout
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default CartComponent;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const CartComponent = () => {
  const [cartInfo, setCartInfo] = useState(null);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const userId = sessionStorage.getItem("userId");
  const url = `http://localhost:7575/getcart/${userId}`;

  useEffect(() => {
    axios
      .get(url, {})
      .then((response) => {
        setCartInfo(response.data);
        calculateTotalCartPrice(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  const handleChange = (e, cartItemId) => {
    const newQuantity = parseInt(e.target.value);

    if (newQuantity < 0 || newQuantity > 100) {
      console.error("Invalid quantity");
      return;
    }

    const updatedCartItems = cartInfo.cartItem.map((carts) => {
      if (carts.id === cartItemId) {
        const itemTotalPrice = carts.product.price * newQuantity;

        return {
          ...carts,
          quantity: newQuantity,
          cartItemPrice: itemTotalPrice,
        };
      }
      return carts;
    });

    setCartInfo({ ...cartInfo, cartItem: updatedCartItems });
  };

  const handleSave = (cartItemId) => {
    const cartItem = cartInfo.cartItem.find((item) => item.id === cartItemId);

    axios
      .put(`http://localhost:7575/cartitem/${cartItemId}/${cartItem.quantity}`)
      .then((response) => {
        console.log(response.data);
        calculateTotalCartPrice({ ...cartInfo, cartItem: cartInfo.cartItem });
      })
      .catch((error) => {
        console.log(error.response);
        const revertedCartItems = cartInfo.cartItem.map((item) =>
          item.id === cartItemId
            ? { ...item, quantity: cartItem.quantity }
            : item
        );
        setCartInfo({ ...cartInfo, cartItem: revertedCartItems });
      });
  };

  const calculateTotalCartPrice = (cartData) => {
    let total = 0;
    cartData.cartItem.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    setTotalCartPrice(total);
  };

  const handleDeleteCartItem = (cartItemId) => {
    axios
      .delete(`http://localhost:7575/cartitem/${cartItemId}`)
      .then((response) => {
        axios
          .get(url, {})
          .then((response) => {
            setCartInfo(response.data);
            calculateTotalCartPrice(response.data);
          })
          .catch((error) => {
            console.log(error.response);
          });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const isCartEmpty = cartInfo && cartInfo.cartItem.length === 0;

  const renderCartList =
    cartInfo &&
    cartInfo.cartItem.map((carts) => {
      const { product, quantity, cartItemPrice } = carts;

      return (
        <div className="card mb-3" key={carts.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={product.productImageUrl}
                alt={product.title}
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ₹{product.quantity}</p>
                <div className="d-flex align-items-center">
                  <div className="item-quantity me-3">
                    <input
                      type="number"
                      name={carts.id}
                      value={quantity}
                      onChange={(e) => handleChange(e, carts.id)}
                      className="form-control"
                    />
                  </div>
                  <div className="item-price">
                    <p className="card-text">Total: ₹{cartItemPrice * quantity}</p>
                  </div>
                  <div className="item-actions ms-auto">
                    <button
                      onClick={() => handleSave(carts.id)}
                      className="btn btn-success btn-sm me-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => handleDeleteCartItem(carts.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

  const createOrder = () => {
    window.location = "/payment";
  };

  return (
    <div>
      <main className="page">
        <section className="shopping-cart dark">
          <div className="container">
            <div className="block-heading" style={{ marginTop: "-80px" }}>
              <h2>Shopping Cart</h2>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  {isCartEmpty ? (
                    <h3>Your cart is empty. Add items to your cart first.</h3>
                  ) : (
                    renderCartList
                  )}
                </div>
                {isCartEmpty ? null : (
                  <div className="col-md-12 col-lg-4">
                    <div className="summary border rounded p-3">
                      <h3 className="mb-4">Order Summary</h3>
                      <div className="summary-item d-flex justify-content-between align-items-center">
                        <span className="text">Subtotal:</span>
                        <span className="price">₹{totalCartPrice}</span>
                      </div>
                      <div className="summary-item d-flex justify-content-between align-items-center">
                        <span className="text">Discount:</span>
                        <span className="price">₹100</span>
                      </div>
                      <div className="summary-item d-flex justify-content-between align-items-center">
                        <span className="text">Shipping:</span>
                        <span className="price">₹50</span>
                      </div>
                      <hr />
                      <div className="summary-item d-flex justify-content-between align-items-center">
                        <span className="text">Total:</span>
                        <span className="price">₹{totalCartPrice + 50 - 100}</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary btn-block mt-4"
                        onClick={createOrder}
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CartComponent;


