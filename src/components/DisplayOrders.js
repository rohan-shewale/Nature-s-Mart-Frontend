import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayOrders = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("orderDate"); // Default sorting by orderDate
  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting in ascending order

  useEffect(() => {
    // Fetch orders from your API here, replace with your API endpoint.
    axios
      .get(`http://localhost:7575/order/user/${sessionStorage.getItem("userId")}`)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders: ", error);
      });
  }, []);

  // Sort orders based on the selected sorting field and order.
  const sortedOrders = [...orders].sort((a, b) => {
    const compareResult =
      sortOrder === "asc"
        ? a[sortBy] < b[sortBy]
          ? -1
          : 1
        : a[sortBy] > b[sortBy]
          ? -1
          : 1;
    return compareResult;
  });

  const handleSortChange = (field) => {
    if (field === sortBy) {
      // Toggle sorting order if the same field is clicked
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc"); // Reset to ascending order when changing the sorting field
    }
  };

  return (
    <div>
      <h1 className="my-4">Order List</h1>

      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by order ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Sorting Buttons */}
      <div className="mb-3">
        <button
          className={`btn btn-outline-secondary ${sortBy === "orderDate" ? "active" : ""
            }`}
          onClick={() => handleSortChange("orderDate")}
        >
          Sort by Order Date {sortOrder === "asc" ? "↑" : "↓"}
        </button>
        <button
          className={`btn btn-outline-secondary ${sortBy === "totalPrice" ? "active" : ""
            }`}
          onClick={() => handleSortChange("totalPrice")}
        >
          Sort by Total Price {sortOrder === "asc" ? "↑" : "↓"}
        </button>
        {/* Add more sorting buttons for other fields as needed */}
      </div>

      {/* Order List */}
      <div className="row">
        {sortedOrders
          .filter((order) =>
            order.id.toString().includes(searchTerm.toLowerCase())
          )
          .map((order) => (
            <div className="col-md-4 mb-4" key={order.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Order ID: {order.id}</h5>
                  <p className="card-text">
                    <strong>Order Date:</strong> {order.orderDate.join("-")}
                  </p>
                  <p className="card-text">
                    <strong>Delivery Date:</strong>{" "}
                    {order.deliveryDate.join("-")}
                  </p>
                  <p className="card-text">
                    <strong>Status:</strong> {order.orderStatus}
                  </p>
                  <p className="card-text">
                    <strong>Total Price:</strong> ${order.totalPrice}
                  </p>
                  <p className="card-text">
                    <strong>Delivery Charge:</strong> ${order.deliveryCharge}
                  </p>
                  <p className="card-text">
                    <strong>Payment Mode:</strong> {order.paymentMode}
                  </p>
                  <p className="card-text">
                    <strong>Username:</strong> {order.cart.user.username}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DisplayOrders;
