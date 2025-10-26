import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { navigate } from "react-router-dom";

const UpdateUser = () => {
  const { userId } = sessionStorage.getItem("userId");
  const [userData, setUserData] = useState({}); // State to store user data

  useEffect(() => {
    // Fetch user data based on userId and populate the form fields
    axios
      .get(`http://localhost:7575/users/${userId}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });
  }, [userId]);

  // Handle form submission to update user data
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a PUT request to update user data
    axios
      .put(`http://localhost:7575/users/${userId}`, userData)
      .then((response) => {
        // Handle success, e.g., redirect to user list page
        console.log("User updated successfully");
      })
      .catch((error) => {
        console.error("Error updating user data: ", error);
      });
  };

  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        {/* Add form fields here and use userData state for initial values */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={userData.username || ""}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
          />
        </div>
        {/* Add more form fields for other user data */}
        <button type="submit" className="btn btn-primary">
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
