// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import axios from "axios";
// import "../assets/css/contactus.css";

// export const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const sendEmail = (e) => {
//     e.preventDefault();

//     axios
//       .post("http://localhost:7575/contact", formData)
//       .then((response) => {
//         console.log(response.data);
//         // You can handle the response here, such as showing a success message to the user.
//       })
//       .catch((error) => {
//         console.error(error);
//         // Handle any errors here, such as showing an error message to the user.
//       });

//     emailjs
//       .sendForm(
//         "service_55hm335",
//         "template_scy1ipd",
//         e.target,
//         "THU6nAYSu3nMIKAor"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="contactus-form">
//       <form onSubmit={sendEmail}>
//         <label>Name</label>
//         <input
//           type="text"
//           name="user_name"
//           onChange={handleInputChange}
//           value={formData.user_name}
//         />
//         <label>Email</label>
//         <input
//           type="email"
//           name="user_email"
//           onChange={handleInputChange}
//           value={formData.user_email}
//         />
//         <label>Message</label>
//         <textarea
//           name="message"
//           onChange={handleInputChange}
//           value={formData.message}
//         />
//         <input type="submit" value="Send" />
//       </form>
//     </div>
//   );
// };
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import "../assets/css/contactus.css";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateEmail = (email) => {
    // A simple email validation regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Form is not valid, do not proceed
      return;
    }

    axios
      .post("http://localhost:7575/contact", formData)
      .then((response) => {
        console.log(response.data);
        // You can handle the response here, such as showing a success message to the user.
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors here, such as showing an error message to the user.
      });

    emailjs
      .sendForm(
        "service_55hm335",
        "template_scy1ipd",
        e.target,
        "THU6nAYSu3nMIKAor"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Reset form fields and errors
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setFormErrors({
      name: "",
      email: "",
      message: "",
    });

    // Show an alert to the user
    alert("Message sent successfully!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contactus-form">
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={formData.name}
        />
        <div className="error-message">{formErrors.name}</div>

        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={formData.email}
        />
        <div className="error-message">{formErrors.email}</div>

        <label>Message</label>
        <textarea
          name="message"
          onChange={handleInputChange}
          value={formData.message}
        />
        <div className="error-message">{formErrors.message}</div>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
