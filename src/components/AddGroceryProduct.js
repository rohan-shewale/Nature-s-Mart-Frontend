import "../assets/css/addproduct.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { storage } from "./firebase";
import { uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { ref as sRef } from "firebase/storage";

function AddGroceryProduct() {
  const [isvalid, setIsvalid] = useState(false);
  const [imageUrl, setImageurl] = useState("");
  const [image, setImage] = useState(null);
  const [productInfo, setProductInfo] = useState({
    title: "",
    productImage: "",
    quantity: "",
    price: "",
    productRating: "",
    isForRent: "",
    category: "",
    userType: "",
    expiryDate: Date.now(),
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // Check if the input element is the file input for image
    if (name === "productImage") {
      // Update the selected image state
      setSelectedImage(e.target.files[0]);

      // Also update the productInfo state with the image file name if needed
      setProductInfo({ ...productInfo, [name]: e.target.files[0].name });
    } else {
      // Update other form fields as usual
      setProductInfo({ ...productInfo, [name]: value });
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);
  console.log(isvalid);

  const handleSubmit = (e) => {
    //e.preventDefault();

    const fileRef = sRef(storage, `productImage/${image.name}`);
    const uploadTask = uploadBytesResumable(fileRef, image);
    console.log("upload k pehle");
    var ur = "";
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload progress: ${progress}%`);
        console.log("balle balle");
      },
      (error) => {
        console.error("Error uploading file:", error);
      },

      async () => {
        console.log("Upload completed");

        try {
          ur = await getDownloadURL(fileRef);

          setImageurl(ur);
          console.log("UR" + ur);
          console.log("ImageUrl" + imageUrl);
        } catch (error) {
          console.error("Error:", error);
        }

        try {
          const response = await axios.post("http://localhost:7575/product", {
            userId: userid,
            title: productInfo.title,
            productImageUrl: ur,
            quantity: productInfo.quantity,
            price: productInfo.price,
            productRating: 0.0,
            isForRent: productInfo.isForRent,
            category: productInfo.category,
            description: productInfo.description,
            userType: productInfo.userType,
            expiryDate: productInfo.expiryDate,
          });

          console.log(response.data);

          setProductInfo({
            title: "",
            productImage: null,
            quantity: "",
            price: "",
            productRating: "",
            isForRent: "",
            category: "",
            userType: "",
            expiryDate: "",
          });

          window.location = "/products";
        } catch (error) {
          alert("Failed to add product. Please try again !");
          console.error(error.response);
        }

      }
    );

    const userid = sessionStorage.getItem("userId");
    console.log(productInfo);

  };

  const [titleErr, setTitleErr] = useState(" ");
  function titleValidation() {
    if (productInfo.title === "") {
      setTitleErr("* Invalid title");
      setIsvalid(false);
    } else {
      if (!isNaN(productInfo.title)) {
        setTitleErr("Numbers Not allowed");
        setIsvalid(false);
      } else {
        setTitleErr("");
        setIsvalid(true);
      }
    }
  }

  const [descriptionErr, SetDescriptionErr] = useState("");
  function descriptionValidation() {
    if (productInfo.description === "") {
      SetDescriptionErr(" Please Enter Product Description");
      setIsvalid(false);
    } else {
      SetDescriptionErr(" ");
      setIsvalid(true);
    }
  }

  const [priceErr, SetPriceErr] = useState("");
  function priceValidation() {
    if (productInfo.price == " ") {
      SetPriceErr(" Please Enter Price of product");
      setIsvalid(false);
    } else {
      const price_cheak = parseInt(productInfo.price);
      if (price_cheak <= 0) {
        SetPriceErr(" Price of product cannot be 0");
        setIsvalid(false);
      } else {
        SetPriceErr("");
        setIsvalid(true);
      }
    }
  }

  const [submitErr, SetSubmitErr] = useState("");

  const [quantityErr, SetQuantityErr] = useState("");

  const [ratingErr, SetProductRatingErr] = useState("");
  function ratingValidation() {
    if (productInfo.isForRent === " ") {
      SetProductRatingErr(" Please enter ratings");
      setIsvalid(false);
    } else {
      SetProductRatingErr("");
      setIsvalid(true);
    }
  }

  return (

    <div>
      <div className="container">
        <div className="body-register col-8">
          <div className="container-details-main">
            <div className="card">
              <div className="row" id="details-lable">
                <h3 className="">Add New Product</h3>
                <div className="col-5">
                  <label for="productImage">
                    <span className="required_fields">*</span>Product Image
                  </label>
                  <input
                    type="file"
                    name="productImage"
                    className="form-control"
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                  />
                </div>

                <div className="col-5">
                  <label for="product_title">
                    <span className="required_fields">*</span>Product Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="enter product title"
                    class="form-control"
                    onChange={handleChange}
                    onInput={titleValidation}
                  />
                  <span className="text-danger">{titleErr}</span>
                </div>

                {/* <div className="col-5">
                  <label for="image"><span className='required_fields'>*</span>Product Image</label>
                  <input type="file" name="product_image" class="form-control"
                    onChange={handleChange} />

                </div> */}

                <div className="col-10" id="product_description">
                  <label for="Discription">
                    <span className="required_fields">*</span>Description
                  </label>

                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    cols={50}
                    placeholder="enter product description"
                    class="form-control"
                    onInput={descriptionValidation}
                    onChange={handleChange}
                  />

                  {/* <input type="textBox" name="Discription" placeholder="enter product description" class="form-control" 
                  id="product_description"/> */}
                  <span className="text-danger">{descriptionErr}</span>
                </div>

                <div className="col-5">
                  <label for="Quantity">Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    class="form-control"
                    onChange={handleChange}
                  />
                  <span className="text-danger">{quantityErr}</span>
                </div>

                <div className="col-5">
                  <label for="price">
                    <span className="required_fields">*</span>Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="enter price"
                    class="form-control"
                    onInput={priceValidation}
                    onChange={handleChange}
                    required
                  />
                  <span className="text-danger">{priceErr}</span>
                </div>

                {/* <div className="col-5">
                  <label for="price"><span className='required_fields'>*</span>Product Rating :</label>
                  <input type="text" name="rating" placeholder="enter rating" class="form-control"
                    onInput={ratingValidation} onChange={handleChange} required />
                  <span className="text-danger">{ratingErr}</span>
                </div> */}

                <div className="col-5" id="isForRent-radio">
                  <br></br>

                  <lable for="rent" id="isForRentradioLable">
                    Available For Rent
                  </lable>
                  <br />
                  <input
                    type="radio"
                    name="rent"
                    value="Yes"
                    id="rent"
                    onChange={handleChange}
                  />
                  <span>Yes</span>

                  <input
                    type="radio"
                    name="rent"
                    value="No"
                    id="rent"
                    onChange={handleChange}
                  />
                  <span>No</span>
                  <span className="text-danger"></span>
                </div>

                <div className="col-5 category" id="category">
                  <label for="category">Select Product Category</label>
                  <select
                    name="category"
                    id="category"
                    onChange={handleChange}
                    value={productInfo.category}
                  >
                    <option value="" selected disabled>
                      Select Product Category
                    </option>

                    <option value="FRUIT">Fruit</option>
                    <option value="VEGETABLE">Vegetable</option>
                    <option value="MEAT">Meat</option>
                    <option value="DAIRY">Dairy</option>
                    <option value="BAKERY">Bakery</option>
                    <option value="BEVERAGE">Beverage</option>
                    <option value="CEREAL">Cereal</option>
                    <option value="SNACKS">Snacks</option>
                    <option value="CONDIMENTS">Condiments</option>
                    <option value="SPICES">Spices</option>
                    <option value="SEAFOOD">Seafood</option>
                    <option value="FROZEN_FOOD">Frozen Food</option>
                    <option value="DELI">Deli</option>
                    <option value="NUTS">Nuts</option>
                    <option value="GRAINS">Grains</option>
                    <option value="HERBS">Herbs</option>
                    <option value="FERTILIZER">Fertilizer</option>
                    <option value="PESTICIDE">Pesticide</option>
                    <option value="EQUIPMENT">Equipment</option>
                    <option value="SEED">Seed</option>
                  </select>
                </div>
                <div className="col-5 userType" id="userType">
                  <select name="userType" id="userType" onChange={handleChange}>
                    <option value="" selected disabled>
                      Select Product Type
                    </option>
                    <option value="NORMAL_USER">User</option>
                    <option value="FARMER">All</option>
                  </select>
                </div>
                <div className="col-5">
                  <label for="expiryDate">Expiry Date</label>
                  <input
                    type="date"
                    name="expiryDate"
                    class="form-control"
                    onChange={handleChange}
                  />
                  {/* Add any validation or error handling for expiryDate here */}
                </div>

                {/* <br></br>
                <div className="col-3" id="outOfStock-radio">
               <lable for="outOfStock"id="outOfStocklable">Out Of Stock :</lable>
                    <br/>
                    <input type="radio" name="outOfStock" value="false" id="outOfStock_lable" /><span>Yes</span>
                    <input type="radio" name="outOfStock" value="true"  id="outOfStock_lable" /><span>No</span>
              
                </div>  */}

                <div className="col-4" id="btn-div">
                  <button
                    className="form-control"
                    id="btn-submit"
                    onClick={handleSubmit}
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddGroceryProduct;
