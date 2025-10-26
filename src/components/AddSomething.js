import React, { useState } from 'react';
import axios from 'axios';

function AddProductForm() {
  const [productInfo, setProductInfo] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: null, // To store the selected image file
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductInfo({ ...productInfo, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProductInfo({ ...productInfo, image: imageFile });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to store the form data
    const formData = new FormData();
    formData.append('title', productInfo.title);
    formData.append('price', productInfo.price);
    formData.append('description', productInfo.description);
    formData.append('category', productInfo.category);
    formData.append('image', productInfo.image); // Append the image file

    try {
      // Send a POST request to your server endpoint
      const response = await axios.post('http://localhost:7575/product/add-product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for handling file uploads
        },
      });

      console.log('Product added successfully', response.data);

      // Clear the form or redirect to another page
      // Reset the productInfo state as needed
    } catch (error) {
      console.error('Error adding product', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={productInfo.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={productInfo.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={productInfo.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Category:</label>
        <select
          name="category"
          value={productInfo.category}
          onChange={handleChange}
        >
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          {/* Add other categories here */}
        </select>
      </div>
      <div>
        <label>Image:</label>
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={handleImageChange}
        />
      </div>
      <div>
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
}

export default AddProductForm;
