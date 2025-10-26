

import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/ProductAction";
import axios from "axios";
import { useEffect, useState } from "react";
import '../assets/css/productDetails.css'
import productImage from '../assets/images/productImage.png';

const ProductDetails = () => {
  const [quantity2, setQuantity] = useState(0);
  const [error, setError] = useState("");
  const productId = useParams();
  const product = useSelector((state) => state.product);

  const { id, title, image, price, category, description, expiryDate, quantity, productImageUrl } = product;

  const dispatch = useDispatch();

  const fetchDetails = async (id) => {
    const response = await axios.get(`http://localhost:7575/product/${id.productId}`).catch((err) => {
      console.log("error occurred", err);
    });
    dispatch(selectedProduct(response.data));
  }

  var userid = sessionStorage.getItem("userId");

  useEffect(() => {
    if (productId && productId !== "") {
      fetchDetails(productId);
    }
  }, [productId]);

  const changeQuantity = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0 && newQuantity <= 10) {
      setQuantity(newQuantity);
      setError(""); // Clear any previous errors
    } else {
      setError("Quantity must be between 0 and 10");
    }
  }

  const addToCart = () => {
    if (quantity2 > 0) {
      axios.post("http://localhost:7575/cartitem", {
        userId: userid,
        quantity: quantity2,
        productId: id,
        price: price,
        title: title,
        productImage: null
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          alert("Please login before proceeding further");
          window.location = "/login";
        });
    } else {
      setError("Quantity must be greater than 0");
    }
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img className="img-fluid" src={productImageUrl} alt={title} />
        </div>
        <div className="col-md-8">
          <div className="product-description">
            <span>{category}</span>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{expiryDate}</p>
          </div>
          <div className="product-description">
            <input type="number" onChange={changeQuantity} defaultValue={quantity} value={quantity2} min="0" max="10" />
            {error && <p className="text-danger">{error}</p>}
          </div>
          <div className="product-configuration">
            <div className="product-color">
              <span>Price</span>
              <h4>₹{price}</h4>
            </div>
          </div>
          <div className="product-price">
            <Link to={"/user/cart"}>
              <button className="btn btn-primary" onClick={addToCart}>Add to cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;
