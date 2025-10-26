import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Fetch products from your API here, replace with your API endpoint.
    axios
      .get(
        `http://localhost:7575/product/seller-products/${sessionStorage.getItem(
          "userId"
        )}`
      )
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
  }, []);

  // Filter products based on the search term and selected category.
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "All" || product.category === selectedCategory) {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleDelete = (productId) => {
    axios
      .delete(`http://localhost:7575/product/${productId}`)
      .then((response) => {
        // Handle the success response here, e.g., show a success message or refresh the product list
        console.log("Product deleted successfully");
        // You might want to refresh the product list by fetching products again.
      })
      .catch((error) => {
        // Handle any errors that occur during the delete operation
        console.error("Error deleting product: ", error);
      });
  };

  const handleUpdate = (productId) => {
    // Implement your update logic here, e.g., navigating to an update form.
    console.log(`Update product with ID: ${productId}`);
  };

  return (
    <div>
      <h1 className="my-4">Product List</h1>

      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filter Buttons */}
      <div className="mb-3">
        <button
          className={`btn btn-outline-secondary ${selectedCategory === "All" ? "active" : ""
            }`}
          onClick={() => handleCategoryChange("All")}
        >
          All
        </button>

        <button
          className={`btn btn-outline-secondary ${selectedCategory === "FRUIT" ? "active" : ""
            }`}
          onClick={() => handleCategoryChange("FRUIT")}
        >
          Fruit
        </button>
        <button
          className={`btn btn-outline-secondary ${selectedCategory === "VEGETABLE" ? "active" : ""
            }`}
          onClick={() => handleCategoryChange("VEGETABLE")}
        >
          Vegetable
        </button>
        <button
          className={`btn btn-outline-secondary ${selectedCategory === "MEAT" ? "active" : ""
            }`}
          onClick={() => handleCategoryChange("MEAT")}
        >
          Meat
        </button>
        <button
          className={`btn btn-outline-secondary ${selectedCategory === "DAIRY" ? "active" : ""
            }`}
          onClick={() => handleCategoryChange("DAIRY")}
        >
          Dairy
        </button>
        <button
          className={`btn btn-outline-secondary ${selectedCategory === "BAKERY" ? "active" : ""
            }`}
          onClick={() => handleCategoryChange("BAKERY")}
        >
          Bakery
        </button>
        <button
          className={`btn btn-outline-secondary ${selectedCategory === "BEVERAGE" ? "active" : ""
            }`}
          onClick={() => handleCategoryChange("BEVERAGE")}
        >
          Beverage
        </button>
        <button
          className={`btn btn-outline-secondary ${selectedCategory === "CEREAL" ? "active" : ""
            }`}
          onClick={() => handleCategoryChange("CEREAL")}
        >
          Cereal
        </button>
        <button
          className={`btn btn-outline-secondary ${selectedCategory === "SNACKS" ? "active" : ""
            }`}
          onClick={() => handleCategoryChange("SNACKS")}
        >
          Snacks
        </button>
        <button
          className={`btn btn-outline-secondary ${selectedCategory === "CONDIMENTS" ? "active" : ""
            }`}
          onClick={() => handleCategoryChange("CONDIMENTS")}
        >
          Condiments
        </button>
        <button
          className={`btn btn-outline-secondary ${selectedCategory === "SPICES" ? "active" : ""
            }`}
          onClick={() => handleCategoryChange("SPICES")}
        >
          Spices
        </button>
        <button
          className={`btn btn-outline-secondary ${selectedCategory === "SEAFOOD" ? "active" : ""
            }`}
          onClick={() => handleCategoryChange("SEAFOOD")}
        >
          Seafood
        </button>
        <button
          className={`btn btn-outline-secondary ${selectedCategory === "FROZEN_FOOD" ? "active" : ""
            }`}
          onClick={() => handleCategoryChange("FROZEN_FOOD")}
        >
          Frozen Food
        </button>
        <button
          className={`btn btn-outline-secondary ${selectedCategory === "DELI" ? "active" : ""
            }`}
          onClick={() => handleCategoryChange("DELI")}
        >
          Deli
        </button>
        <button
          className={`btn btn-outline-secondary ${selectedCategory === "NUTS" ? "active" : ""
            }`}
          onClick={() => handleCategoryChange("NUTS")}
        >
          Nuts
        </button>
        <button
          className={`btn btn-outline-secondary ${selectedCategory === "GRAINS" ? "active" : ""
            }`}
          onClick={() => handleCategoryChange("GRAINS")}
        >
          Grains
        </button>
        <button
          className={`btn btn-outline-secondary ${selectedCategory === "HERBS" ? "active" : ""
            }`}
          onClick={() => handleCategoryChange("HERBS")}
        >
          Herbs
        </button>
      </div>

      {/* Product List */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img
                src={product.productImageUrl}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  <strong>Description:</strong> {product.description}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>
                <p className="card-text">
                  <strong>Category:</strong> {product.category}
                </p>
                <p className="card-text">
                  <strong>Quantity:</strong> {product.quantity}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayProducts;
