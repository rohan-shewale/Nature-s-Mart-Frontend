// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// const DisplayUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const history = useHistory();
//   useEffect(() => {
//     // Fetch users from your API here, replace with your API endpoint.
//     axios
//       .get("http://localhost:7575/users")
//       .then((response) => {
//         setUsers(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching users: ", error);
//       });
//   }, []);
//   const handleUpdateUser = (userId) => {
//     history.push(`/userprofile/${userId}`);
//   };

//   // Handle delete user action
//   const handleDeleteUser = (userId) => {
//     axios
//       .delete(`http://localhost:7575/users/${userId}`)
//       .then((response) => {
//         // Handle success, e.g., refresh the user list
//         console.log("User deleted successfully");
//         // You can refresh the user list or update state as needed
//       })
//       .catch((error) => {
//         console.error("Error deleting user: ", error);
//       });
//   };

//   // Function to filter users based on search term
//   const filterUsers = () => {
//     const filtered = users.filter((user) => {
//       const searchTermLower = searchTerm.toLowerCase();
//       return (
//         user.email.toLowerCase().includes(searchTermLower) ||
//         user.username.toLowerCase().includes(searchTermLower) ||
//         user.district.toLowerCase().includes(searchTermLower) ||
//         user.state.toLowerCase().includes(searchTermLower) ||
//         user.mobileNo.toLowerCase().includes(searchTermLower) ||
//         user.id.toString().includes(searchTermLower) ||
//         user.dateOfBirth.join("-").includes(searchTermLower) ||
//         user.aadharNo.includes(searchTermLower)
//       );
//     });
//     setFilteredUsers(filtered);
//   };

//   useEffect(() => {
//     filterUsers();
//   }, [searchTerm, users]);

//   return (
//     <div>
//       <h1 className="my-4">User List</h1>

//       {/* Search Bar */}
//       <div className="mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search users..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* User List */}
//       <div className="row">
//         {filteredUsers.map((user) => (
//           <div className="col-md-4 mb-4" key={user.id}>
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">User ID: {user.id}</h5>
//                 <p className="card-text">
//                   <strong>Username:</strong> {user.username}
//                 </p>
//                 <p className="card-text">
//                   <strong>Email:</strong> {user.email}
//                 </p>
//                 <p className="card-text">
//                   <strong>Mobile No:</strong> {user.mobileNo}
//                 </p>
//                 <p className="card-text">
//                   <strong>Date of Birth:</strong> {user.dateOfBirth.join("-")}
//                 </p>
//                 {/* Add Update and Delete Buttons */}
//                 <div>
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => handleUpdateUser(user.id)}
//                   >
//                     Update
//                   </button>
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => handleDeleteUser(user.id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DisplayUsers;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const DisplayUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // Fetch users from your API here, replace with your API endpoint.
    axios
      .get("http://localhost:7575/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users: ", error);
      });
  }, []);

  const handleUpdateUser = (userId) => {
    history.push(`/userprofile/${userId}`);
  };

  // Handle delete user action
  const handleDeleteUser = (userId) => {
    axios
      .delete(`http://localhost:7575/users/${userId}`)
      .then((response) => {
        // Handle success, e.g., refresh the user list
        console.log("User deleted successfully");
        // You can refresh the user list or update state as needed
      })
      .catch((error) => {
        console.error("Error deleting user: ", error);
      });
  };

  // Function to filter users based on search term
  const filterUsers = () => {
    const filtered = users.filter((user) => {
      const searchTermLower = searchTerm.toLowerCase();
      return (
        user.email.toLowerCase().includes(searchTermLower) ||
        user.username.toLowerCase().includes(searchTermLower) ||
        user.district.toLowerCase().includes(searchTermLower) ||
        user.state.toLowerCase().includes(searchTermLower) ||
        user.mobileNo.toLowerCase().includes(searchTermLower) ||
        user.id.toString().includes(searchTermLower) ||
        user.dateOfBirth.join("-").includes(searchTermLower) ||
        user.aadharNo.includes(searchTermLower)
      );
    });
    setFilteredUsers(filtered);
  };

  useEffect(() => {
    filterUsers();
  }, [searchTerm, users]);

  return (
    <div>
      <h1 className="my-4">User List</h1>

      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* User List */}
      <div className="row">
        {filteredUsers.map((user) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">User ID: {user.id}</h5>
                <p className="card-text">
                  <strong>Username:</strong> {user.username}
                </p>
                <p className="card-text">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="card-text">
                  <strong>Mobile No:</strong> {user.mobileNo}
                </p>
                <p className="card-text">
                  <strong>Date of Birth:</strong> {user.dateOfBirth.join("-")}
                </p>
                {/* Add Update and Delete Buttons */}
                <div>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => handleUpdateUser(user.id)}
                  >
                    Update
                  </button>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Summary</h5>
          <div className="row">
            <div className="col-md-6">
              <p className="card-text">
                <strong>Total Users:</strong> {filteredUsers.length}
              </p>
            </div>
            <div className="col-md-6">
              <p className="card-text text-end">
                <strong>Search Term:</strong> {searchTerm}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayUsers;


